$(function(){
    $('.head').load('html/nva.html');
    $('.foot').load('html/footer.html');
    $('.aside').load('html/right.html');
    $.ajax({
        url:'http://mce.mogucdn.com/jsonp/multiget/3?callback=jsonp43532_47150_47165_47156&appPlat=pc&pids=43532%2C47150%2C47165%2C47156',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp43532_47150_47165_47156',
        dataType:'jsonp',
        success:function(reg){
            console.log(reg)
            var reg1=reg.data['43532'].list;
            var reg2=reg.data['47150'].list;
            var reg3=reg.data['47156'].list;
            var reg4=reg.data['47165'].list;
            console.log(reg1)
            console.log(reg2)
            console.log(reg3)
            console.log(reg4)

            for(i=0;i<reg1.length;i++){
                $('#tuan_nav_nav').append('<a href="'+reg1[i].link+'">'+reg1[i].title+'</a>')
            }

            for(i=0;i<reg2.length;i++){
                $('#zhu_left').append('<a href="'+reg2[i].link+'"><img src="'+reg2[i].image+'" alt=""><div>'+reg2[i].title+'</div><div class="zhu_leftim_img_con">'+reg2[i].description+'</div></a>')
            }
            
            for(i=0;i<reg3.length;i++){
                $('#zhu_right').append('<a href="'+reg3[i].link+'"><img src="'+reg3[i].image+'" alt=""><div>'+reg3[i].title+'</div><div class="zhu_right_div">'+reg3[i].description+'</div></a>')
            }
        }
    })
    
	
    
    
    $('#shangpingtuan_baio a').click(function(){
    	var index=$(this).index();
    	$('html').scrollTop(530);
    	var kuang=$('#shangpingtuan_baio a').width();
    	$('#shangpingtuan_baio a').eq(index).css('font-weight','bold').siblings().css('font-weight','500');
    	$('.aside_left a').eq(index).css('background','#FF5777').siblings().css('background','#777');
    	$('#bian_left').css('left',kuang*index+'px');
    })	
    $('.aside_left a').click(function(){
    	
    	var index=$(this).index();
    	$('html').scrollTop(530);
    	var kuang=$('#shangpingtuan_baio a').width();
    	$('#bian_left').css('left',kuang*index+'px');
    	$('.aside_left a').eq(index).css('background','#FF5777').siblings().css('background','#777');
    	$('#shangpingtuan_baio a').eq(index).css('font-weight','bold').siblings().css('font-weight','500');
    })
    $('#shangpingtuan_baio a').mouseover(function(){
    	var index=$(this).index();
    	var kuang=$('#shangpingtuan_baio a').width();
    	$('#bian_left').stop().animate({
    		left:kuang*index+'px'
    	},300,'linear');
    
    })
	
    

   
    

    $.ajax({
        		url:'http://list.mogujie.com/search?callback=moguwall&page=1&book=&fcid=20002675&algoKey=pc_tuan_book_pop&action=tuan&cKey=pc-tuan&large=1&_mgjuuid=b2f303a0-fafa-4278-8bdb-e251113e4de7&userId=&_=1526260408222',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'moguwall',
        dataType:'jsonp',
        success:function(reg){
//          console.log(reg)
            var data=reg.result.wall;
//          console.log(data);	
          
                $('#buttom_wai').append(baidu.template("tuango",data))
        }
    })
    
    jQuery(".zhu_zhong_con").slide({mainCell:".zhong_img ",autoPlay:true});	
    
    window.addEventListener('load',function (){
    	console.log($('img.lazy'))
    	$("img.lazy").lazyload({effect:"fadeIn",threshold :0,placeholder:"loading.gif"})
    })
    ;
    
})
