
$(function(){
   
    $('table tr td').mouseover(function(){
       $(this).parent().find('td').css('background','#ABD6BD');
    })

    $('table tr td').mouseout(function(){
       $(this).parent().find('td').css('background','#C7E4D3');
    })

})





