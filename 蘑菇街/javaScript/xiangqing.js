$(function(){

	$('.foot').load('html/footer.html');
    $('.head').load('html/nva.html');
    $('.ce').load('html/right.html');
   
	$('#inp').keyup(function(){
		$.ajax({
			url:'http://list.mogujie.com/module/mget?code=tips&keyWord='+$('#inp').val()+'&callback=__GET_SEARCH_RESULT_1__&_=1526547073856',
	        cache:false,
	        jsonp:'callback',
	        jsonpCallback:'__GET_SEARCH_RESULT_1__',
	        dataType:'jsonp',
	        success:function(reg){
	               console.log(reg);
	             
	            $('#xialan_ul').html('');
	           var reg=reg.data.tips.data;
//	           console.log(reg)
				if(reg.length!=0){
					for(var i=0;i<reg.length;i++){
		           	
			           	$('#xialan_ul').append(	
			           		`
			           	<li>
					        <a href="http://list.mogujie.com/s?q=${reg[i].tag}&acm=${reg[i].acm}">${reg[i].tag}</a>  
					        
					      </li>
			           	`)  	
		           }
				}
	           
        	}
   		});
	})
	$('#inp').click(function(){
	  	$('#xialan').show()
	})
	$('#xialan').mouseleave(function(){
		$('#xialan').show()
	})
	$('#xialan').mouseout(function(){
		$('#xialan').hide()
	})
	$('#xialan_ul li').click(function(){
	   	var index=$(this).index();
	   	$('#xialan').hide();
	   	$('#inp').val($('this').html())
	  	
	  	
	})
	
//	放大镜
	$('.daimg').mouseover(function(ev){
		var e=window.event||ev;
		$('#mongban').show();
		$('.chaoda').show();
		
		var imgx=$('.daimg').width()-$('#mongban').width();
		var imgy=$('.daimg').height()-$('#mongban').height();

		$('.daimg').mousemove(function(ev){
			var e=window.event||ev;
			var banx=e.pageX-$('.changpingtu').offset().left-$('#mongban').width()/2;
			var bany=e.pageY-$('.changpingtu').offset().top-$('#mongban').height()/2;
			
			if(banx>=imgx){
				banx=imgx;
			}else if(banx<=0){
				banx=0;
			}
			if(bany>=imgy){
				bany=imgy;
			}else if(bany<0){
				bany=0;
			}
			$('#mongban').css('left',banx+'px');
			$('#mongban').css('top',bany+'px');
			
			var scale=$('.chaoda_ol').width()/$('.daimg').width();
			$('.chaoda').scrollLeft(scale*banx);
			$('.chaoda').scrollTop(scale*bany);
		})
	})
	$('.daimg').mouseout(function(){
   	   	$('#mongban').hide();
		$('.chaoda').hide();
   	    $('.daimg').mousemove();
    })
	$('.xiaotu_tab li').click(function(){
		var index=$(this).index();
		$(this).addClass('hongbian').siblings().removeClass('hongbian');
		console.log(index)
		console.log($('daimg img'))
		
		$('.daimg img').eq(index).addClass('img_xian').siblings().removeClass('img_xian');
		$('.chaoda_ol img').eq(index).addClass('img_xian').siblings().removeClass('img_xian');
	})
	console.log($('.yanse').find('b'))
	$('.yanse li').click(function(){
		var index=$(this).index();
		$('.yanse b').eq(index).addClass('chu_b').parent().siblings().find('b').removeClass('chu_b');
	})
	
	$('.chima li').click(function(){
		var index=$(this).index();
		$('.chima b').eq(index).addClass('chu_b').parent().siblings().find('b').removeClass('chu_b');
		
	})
	
	$.fn.extend({
        Tab:function (title,con,select) {
        	
            $(title).click(function () {
                var index=$(this).index();
                $(this).find('span').addClass(select).parent().siblings().find('span').removeClass(select);
               $(con).eq(index).show().siblings().hide();
            })
        }
    })
	
	
	$('.pingjia-wai').Tab('.xuanxiang_ul li','.xuanxiangyan > div','spans');
	
	$('.xuanxiang_ul li').click(function(){
		
		var index=$(this).index();
		console.log(index);
		$('.top_ol li').eq(index).find('span').addClass('spans').parent().siblings().find('span').removeClass('spans');
		$('html').scrollTop(1085);	
		$('.top').hide();
		if($(this).index()>0){
			$('.kushudaohang').hide();
		}
		if($(this).index()==0){
			$('.kushudaohang').show();
		}
	})
	$('.top_ol li').click(function(){
		var index=$(this).index();
		console.log(index)
		$('.xuanxiang_ul li').eq(index).find('span').addClass('spans').parent().siblings().find('span').removeClass('spans');
	})
	
	$(window).scroll(function(){
		
		if($('html').scrollTop()>1085){

			$('.top').css('display','flex');
		}else if($('html').scrollTop()<1085){
			$('.top').css('display','none');
			
		}
	})
	

	
	

	


	$(window).scroll(function(){
		
		var scrollTop=$('html').scrollTop();

		for(var i=0;i<$('.yiyan > div').length;i++){
			var  that=$('.yiyan > div').eq(i);

			if(scrollTop>=that.offset().top-200){
				$('.kushudaohang_ul li').eq(i).addClass('bain_bj').find('span').addClass('jian').parent().siblings().removeClass('bain_bj').find('span').removeClass('jian');
				$('.top_ul li').eq(i).addClass('bain_bj').find('span').addClass('jian').parent().siblings().removeClass('bain_bj').find('span').removeClass('jian');
			}
		}
	})
	
	$('.top_ul li').click(function(){
		var index=$(this).index();
	
		$('html').scrollTop($('.yiyan > div').eq(index).offset().top-100)

	})

	$('.kushudaohang_ul li').click(function(){
		var index=$(this).index();
	
		$('html').scrollTop($('.yiyan > div').eq(index).offset().top-100)

	})
	
	
})

		