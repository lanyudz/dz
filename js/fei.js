$(function(){
      var Now=1; 
      var Max=3;

      function showView(){
        
         $('#div'+Now).fadeIn(800).delay(4000);

         $('#div'+Now).fadeOut(800);

         if (Now==Max){
             Now=1;
         }
         else{
             Now++;
         }

         setTimeout(showView,5600);

      }

      showView();

})

