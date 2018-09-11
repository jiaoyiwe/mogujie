$(function(){
//	 搜索内容
	$('#inp').keyup(function(){
		$.ajax({
			url:'http://list.mogujie.com/module/mget?code=tips&keyWord='+$('#inp').val()+'&callback=__GET_SEARCH_RESULT_1__&_=1526280603626',
	        cache:false,
	        jsonp:'callback',
	        jsonpCallback:'__GET_SEARCH_RESULT_1__',
	        dataType:'jsonp',
	        success:function(reg){
//	               console.log(reg);
	             
	            $('#xialan_ul').html('');
	           var reg=reg.data.tips.data;
//	           console.log(reg)
	           for(var i=0;i<reg.length;i++){
	           	
	           	$('#xialan_ul').append(	
	           		`
	           	<li>
			        <a href="http://list.mogujie.com/s?q=${reg[i].tag}&acm=${reg[i].acm}" 	>${reg[i].tag}</a>  
			        
			      </li>
	           	`);
		           	
	           }
        	}
   		});
	})
	$('#inp1').keyup(function(){
		$.ajax({
			url:'http://list.mogujie.com/module/mget?code=tips&keyWord='+$('#inp1').val()+'&callback=__GET_SEARCH_RESULT_1__&_=1526280603626',
	        cache:false,
	        jsonp:'callback',
	        jsonpCallback:'__GET_SEARCH_RESULT_1__',
	        dataType:'jsonp',
	        success:function(reg){
//	               console.log(reg);
	             
	            $('#xialan_ul1').html('');
	           var reg=reg.data.tips.data;
	           console.log(reg)
	           for(var i=0;i<reg.length;i++){
	           	
	           	
	           	console.log($('#xialan_ul1'))	
	           	$('#xialan_ul1').append(	
	           		`
	           	<li>
			        <a href="http://list.mogujie.com/s?q=${reg[i].tag}&acm=${reg[i].acm}" 	>${reg[i].tag}</a>  
			        
			      </li>
	           	`)
		           	
	           }
        	}
   		});
	})

	$('#xialan_ul li').click(function(){
	   	var index=$(this).index();
	  	$('#xialan').hide()
	  	$('#inp').val($('this').html())
	})
	
	
	
	
    //产品分类
    $.ajax({
        url:'http://mce.mogucdn.com/jsonp/multiget/3?callback=jQuery211016635002235041862_1525330811586&pids=109499%2C109520%2C109731%2C109753%2C110549%2C109779%2C110548%2C110547%2C109757%2C109793%2C109795%2C110563%2C110546%2C110544&_=1525330811590',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jQuery211016635002235041862_1525330811586',
        dataType:'jsonp',
        success:function(reg){
            console.log(reg.data);

            var arr=[109499,109520,109731,109753,109757,109779,109793,109795,110544,110546,110547,110548,110549,110563];
            // $('#shichang').append(baidu.template("temp",reg));
            for(var i =0 ;i<arr.length;i++){
                $('#shichang').append('<li><dl><dt><a href="'+reg.data[arr[i]].list[0].link+'" target="_blank" a="'+reg.data[arr[i]].list[0].is_red+'" biao="'+reg.data[arr[i]].list[0].is_HotTag+'">'+reg.data[arr[i]].list[0].title+'</a></dt><dd><a href="'+reg.data[arr[i]].list[1].link+'" target="_blank"  se="'+reg.data[arr[i]].list[1].is_red+'" biao="'+reg.data[arr[i]].list[1].is_HotTag+'">'+reg.data[arr[i]].list[1].title+'</a><a href="'+reg.data[arr[i]].list[2].link+'" target="_blank"  se="'+reg.data[arr[i]].list[2].is_red+'" biao="'+reg.data[arr[i]].list[2].is_HotTag+'">'+reg.data[arr[i]].list[2].title+'</a><a href="'+reg.data[arr[i]].list[3].link+'" target="_blank"  se="'+reg.data[arr[i]].list[3].is_red+'" biao="'+reg.data[arr[i]].list[3].is_HotTag+'">'+reg.data[arr[i]].list[3].title+'</a></dd></dl></li>');

                $('#shichang1').append('<li><dl><dt><a href="'+reg.data[arr[i]].list[0].link+'" target="_blank" a="'+reg.data[arr[i]].list[0].is_red+'" biao="'+reg.data[arr[i]].list[0].is_HotTag+'">'+reg.data[arr[i]].list[0].title+'</a></dt><dd><a href="'+reg.data[arr[i]].list[1].link+'" target="_blank"  se="'+reg.data[arr[i]].list[1].is_red+'" biao="'+reg.data[arr[i]].list[1].is_HotTag+'">'+reg.data[arr[i]].list[1].title+'</a><a href="'+reg.data[arr[i]].list[2].link+'" target="_blank"  se="'+reg.data[arr[i]].list[2].is_red+'" biao="'+reg.data[arr[i]].list[2].is_HotTag+'">'+reg.data[arr[i]].list[2].title+'</a><a href="'+reg.data[arr[i]].list[3].link+'" target="_blank"  se="'+reg.data[arr[i]].list[3].is_red+'" biao="'+reg.data[arr[i]].list[3].is_HotTag+'">'+reg.data[arr[i]].list[3].title+'</a></dd></dl></li>')
            }
        }
    });
//搜索框下
    $.ajax({
        url:'http://list.mogujie.com/module/mget?code=sketch%2ChotWord&callback=__GET_HOTWORD_BASEWORD__&_=1525506660935',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'__GET_HOTWORD_BASEWORD__',
        dataType:'jsonp',
        success:function(reg){
            var data=reg.data.hotWord.data;
            for(i=0;i<8;i++){
                $('#search_main_buttom').append('<a href="'+data[i].acm+'" target="_blank" style="color:'+data[i].color+';"">'+data[i].query+'</a>')
            }
        }
    })
//女装
    $.ajax({
        url:'http://mce.mogucdn.com/jsonp/multiget/3?callback=jsonp109514_110449_110456_109552_110534&appPlat=pc&pids=109514%2C110449%2C110456%2C109552%2C110534',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp109514_110449_110456_109552_110534',
        dataType:'jsonp',
        success:function(reg){
            var reg1=reg.data['109514'].list;
            var reg2=reg.data['109552'].list;
            var reg3=reg.data['110449'].list;
            var reg4=reg.data['110456'].list;
            var reg5=reg.data['110534'].list;
//          console.log(reg)
            for( var i = 0;i<reg1.length;i++){
               $('#Women_theme-nav').append('<a href="'+reg1[i].link+'">'+reg1[i].title+'</a>|')
            }

            for(var i=0;i<reg2.length;i++){
                $('#women_con_right_buttom').append('<a href="'+reg2[i].link+'"><div class="women_con_right_buttom_con"><div class="women_con_right_buttom_jiashao" ><p style="background-image: linear-gradient(139deg,'+reg2[i].beginColor+', '+reg2[i].endColor+');">'+reg2[i].title+'</p><p>'+reg2[i].subTitle+'</p></div><div class="women_con_right_buttom_img"><img src="'+reg2[i].image+'_100x100.v1cAC.70.webp" alt=""></div></div></a>')
            }
            for(var i=0;i<reg5.length;i++){
                $('#bao1').append('<a href="'+reg5[i].link+'">'+reg5[i].title+'</a>|')
            }
        }

    });

    $.ajax({
        url:'http://list.mogujie.com/search?callback=jQuery211041910682044453007_1525696230609&cKey=pc-index&fcid=52014&pid=9750&searchTag=&sort=pop&page=1&ratio=3%3A4&_version=1&cpc_offset=0&offset=&_=1525696230614',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jQuery211041910682044453007_1525696230609',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.result.wall.docs;

            for(var i =0;i<reg.length;i++){
                $('#liek_da').append('<div class="liek_zhong"><a href="'+reg[i].similarityUrl+'" class="zhaoxiangsi" target="_blank">找相似</a><a href="'+reg[i].link+'-dit_26" class="liek_img" target="_blank"><img src="" alt="" data-original="'+reg[i].img+'_240x320.v1cAC.70.webp" class="lazy"></a><a href="'+reg[i].link+'-dit_26" class="liek_xianxi" target="_blank"><p class="liek_xianxi_con">'+reg[i].title+'</p><div   class="liek_jiage"><div class="liek_tuango"><img src="image/tuan.png" alt=""></div><b class="liek_xianjia">￥'+reg[i].price+'</b><p class="liek_yaunjia">￥<span>'+reg[i].orgPrice+'</span></p><span class="liek_shouchang"><img src="image/xx.png" alt="">'+reg[i].cfav+'w</span></div></a></div>')
            }
        }
    });


    $.ajax({
        url:'http://list.mogujie.com/search?callback=jQuery211043971949258509513_1525741901899&cKey=pc-index&fcid=52014&pid=9750&searchTag=&sort=pop&page=2&ratio=3%3A4&_version=1&cpc_offset=0&offset=&_=1525741901906',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jQuery211043971949258509513_1525741901899',
        dataType:'jsonp',
        success:function(reg){
            var reg=reg.result.wall.docs;
            for(var i =0;i<reg.length;i++){
                $('#liek_da1').append('<div class="liek_zhong"><a href="'+reg[i].similarityUrl+'" class="zhaoxiangsi" target="_blank">找相似</a><a href="'+reg[i].link+'-dit_26" class="liek_img" target="_blank"><img src="" alt="" data-original="'+reg[i].img+'_240x320.v1cAC.70.webp" class="lazy"></a><a href="'+reg[i].link+'-dit_26" class="liek_xianxi" target="_blank"><p class="liek_xianxi_con">'+reg[i].title+'</p><div   class="liek_jiage"><div class="liek_tuango"><img src="image/tuan.png" alt=""></div><b class="liek_xianjia">￥'+reg[i].price+'</b><p class="liek_yaunjia">￥<span>'+reg[i].orgPrice+'</span></p><span class="liek_shouchang"><img src="image/xx.png" alt="">'+reg[i].cfav+'w</span></div></a></div>')
            }
        }
    });


    $.ajax({
        url:'http://mce.mogucdn.com/jsonp/multiget/3?callback=jQuery21101471135547183393_1525666716018&pids=98662&appPlat=pc&_=1525666716019',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jQuery21101471135547183393_1525666716018',
        dataType:'jsonp',
        success:function(reg){
            var reg=reg.data['98662'].list;

           var  diyi=$('.swiper-slide_con');
            for(var i=0;i<diyi.length;i++){
                diyi.eq(i).html('<a href="'+reg[i].link+'" target="_blank" class="swiper-slide_img"><img src="'+reg[i].itemImage+'_300x9999.v1c7E.70.webp" alt=""></a><a href="'+reg[i].link+'" target="_blank" class="swiper-slide_xianxi">'+reg[i].title+'</a><div class="swiper-slide_jiage"><em>￥'+reg[i].salePrice+'</em><del>￥'+reg[i].price+'</del></div>')
            }
        }
    });
   // 张开部分14个
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18784&callback=jsonp18784&_=1525743274617',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18784',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('#rotation_con .con1').eq(0).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(0).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18895&callback=jsonp18895&_=1525743266548',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18895',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(1).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(1).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18907&callback=jsonp18907&_=1525743274338',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18907',
        dataType:'jsonp',
        success:function(reg){
            var reg=reg.data

            $('.con1').eq(2).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(2).html(baidu.template("chuxian",reg))
        }
    })
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18917&callback=jsonp18917&_=1525742657641',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18917',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(3).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(3).html(baidu.template("chuxian",reg))
        }

    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18934&callback=jsonp18934&_=1525753547282',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18934',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(4).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(4).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18922&callback=jsonp18922&_=1525743275786',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18922',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(5).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(5).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18943&callback=jsonp18943&_=1525742657705',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18943',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(6).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(6).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18913&callback=jsonp18913&_=1525743278271',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18913',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(7).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(7).html(baidu.template("chuxian",reg))
        }
    });

    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18957&callback=jsonp18957&_=1525743276895',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18957',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(8).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(8).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18961&callback=jsonp18961&_=1525743276508',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18961',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(9).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(9).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18939&callback=jsonp18939&_=1525743281943',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18939',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(10).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(10).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18930&callback=jsonp18930&_=1525743281482',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18930',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(11).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(11).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18926&callback=jsonp18926&_=1525743275996',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18926',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data
            $('.con1').eq(12).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(12).html(baidu.template("chuxian",reg))
        }
    });
    $.ajax({
        url:'http://mce.mogujie.com/jsonp/makeup/3?pid=18949&callback=jsonp18949&_=1525743277990',
        cache:false,
        jsonp:'callback',
        jsonpCallback:'jsonp18949',
        dataType:'jsonp',
        success:function(reg){

            var reg=reg.data;
            $('.con1').eq(13).html(baidu.template("chuxian",reg))
            $('#top_xianxi .con1').eq(13).html(baidu.template("chuxian",reg))
        }
    });

	
})

