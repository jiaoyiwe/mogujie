$(function(){

    $('.foot').load('html/footer.html');
    $('.head').load('html/nva.html');
    $('.kuang').load('html/search.html');

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

    // 滚动条事件
    $(window).bind('scroll',function(){
        var gao=$(window).scrollTop();
        if(gao>125){
            $('.shanglan').stop().animate({
                height:'103px'
            },250,'linear')
            $('.shanglan').css('position','fixed')
        }
        if(gao<= 125){
            $('.shanglan').stop().animate({
                height:'0px'
            },250,'linear')
            $('.shanglan').css('position','absolute')
        }
    })

})