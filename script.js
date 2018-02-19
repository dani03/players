$(document).ready(function(){
  var $mainMenu = $("#main-menu ul").children("li");
  var $totalMainMenu = $mainMenu.length;
  // je declare la variable openIndex pour indiquer quand est ce que l'index est fermé(-1)
   var openIndex = 2;


   var init = function(){
     bindEvents();
     if($validItem(openIndex)){
       animateItem($mainMenu.eq(openIndex),true,700);
     }

   };
   var bindEvents = function(){
     $mainMenu.children(".images").click(function(){
       var newIndex = $(this).parent().index();
       var $item = $mainMenu.eq(newIndex);

       if(openIndex === newIndex)
       {
         animateItem($item, false, 250);
         openIndex = -1;
       }
       else
       {
           if($validItem(newIndex))
           {
             animateItem($mainMenu.eq(openIndex), false, 250);
             openIndex = newIndex;
             animateItem($item, true, 250);

           }
       }

     });
     $(".button").hover(function(){
       $(this).addClass("hovered");
     },
   function(){
     $(this).removeClass("hovered");

   });
   $(".button").click(function(){
     var newIndex = $(this).index();
     var $item = $mainMenu.eq(newIndex);
     if(openIndex === newIndex)
     {
       animateItem($item, false, 250);
       openIndex = -1;
     }
     else
     {
         if($validItem(newIndex))
         {
           animateItem($mainMenu.eq(openIndex), false, 250);
           openIndex = newIndex;
           animateItem($item, true, 250);

         }
     }
     });
   };

  var $validItem = function(indexTocheck)
   {
     return (indexTocheck >= 0 )&& ( indexTocheck < 5);
   }
   animateItem = function($item, toOpen, speed){
     var $colorImage = $item.find(".color");
// ici nous interogeons notre variable toopen en lui demandant s'il est ouvert alors il augmente la largeur
     var itemParam = toOpen ? {width:"320px"}:{width:"140px"};
     var colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};
     $colorImage.animate(colorImageParam,speed);
     $item.animate(itemParam, speed);

   };
   init();
});
