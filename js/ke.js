$(function(){
    var Now=1; 
    var Max=3; 
    function showView(){
         for (var i=1;i<(Max+1);i++)
         {
            if (i==Now)
                $("#div"+Now).show(); 
            else
                $("#div"+i).hide(); 
         }
         if (Now==Max) 
         {
            Now=1;
         }
         else
         {
            Now++;
         }

         setTimeout(showView,4000);       
   
      }

      showView();

})

