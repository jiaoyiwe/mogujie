var jsq=document.querySelector('#jsq');

var jishi=null;
  jishi=setInterval(function (){
      var shizi= new Date('2018,5,20,00:00:00');
      var xianzai=new Date();
      var shizi_s=shizi.getTime();
      var xianzai_s=xianzai.getTime();
      var shengxia=shizi_s-xianzai_s;

      var xiao=parseInt(shengxia/(1000*60*60));
      xiao=xiao<10?'0'+xiao:xiao;
      var xiao_s=shengxia%(1000*60*60);

      var feng=parseInt(xiao_s/(1000*60));
      feng=feng<10?'0'+feng:feng;
      var feng_s=xiao_s%(1000*60);

      var miao=parseInt((feng_s/1000));
      miao=miao<10?'0'+miao:miao;

      jsq.innerHTML='<span class="Timer_left_shi">'+xiao+'</span><span>:</span> <span class="Timer_left_shi">'+feng+'</span> <span>:</span> <span class="Timer_left_shi">'+miao+'</span>';

      if(shengxia<=0){
         clearInterval(jishi);
          jsq.innerHTML='<span class="Timer_left_shi">00</span><span>:</span> <span class="Timer_left_shi">00</span> <span>:</span> <span class="Timer_left_shi">00</span>';
      }
  },1);



