function size(){
   var s=[$(window).width()]/1366;
   $('section').css('width',$(window).width());
   $('#butt').css('width',110*s);
   $('#butt').css('margin-top',30*s);
   $('#butt').css('margin-left',50*s);
   $('#butt').css('font-size',16*s);
   $('#butt div').css('width',110*s);
   $('#butt div').css('height',35*s);
   $('#butt div').css('line-height',35*s+'px'); 
   $('#butt div').css('margin-top',10*s);
   $('#live').css('width',1140*s);
   $('#live').css('margin-left',10*s);
   $('#live').css('margin-top',30*s);
   $('#live div').css('margin-left',20*s);
   $('#live div').css('margin-top',10*s);
   $('#live div').css('width',350*s);
   $('#live div').css('height',240*s);
   $('.imgMode').css('width',350*s);
   $('.imgMode').css('height',197*s);
} 


