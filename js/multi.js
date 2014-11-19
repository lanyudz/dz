$(function(){
 　 
    var oVi=$('video');
    $('#ope div').click(function(){
       var i=$(this).attr('id')
       oVi.eq(i).show(); 
       if(oVi[i].paused){
          oVi[i].play();
       }
       for(var j=0;j<6;j++){
         if(j!=i){  
            oVi.eq(j).hide();

            if(oVi[j].played){
               oVi[j].pause();
            }
         }
       }

    })
})

