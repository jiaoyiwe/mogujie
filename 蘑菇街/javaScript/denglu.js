$(function(){
    $('#diannao').click(function(){
        console.log(123);
        $('#sj_denglu').css('display','none');
        $('#denglu_sj').css('display','block');
    });
    $('#denglu_fanshi').click(function(){
        $('#sj_denglu').css('display','block');
        $('#denglu_sj').css('display','none');
    });
    $('.tab a').eq(0).addClass('bian');
    $('.dl').eq(0).css('display','block');
    $('.dl').eq(1).css('display','none');

    $('.tab a').click(function () {
        $('#tishi').css('display','none');
        $(this).addClass('bian').parent().siblings().children().removeClass('bian');
        var index=$(this).parent().index();
        $('.dl').eq(index).css('display','block').siblings().css('display','none');
    })


    $(".inp").blur(function(){
        var com=$(this).prop('placeholder')
        if($(this).val().length==0){
        	
        	$('#tishi').html('请输入'+com).css('display','block')
        }
        
    });	
    $(".inp").focus(function(){
        $('#tishi').css('display','none')
    });
    
    
    $('.foot').load('html/footer.html');
            
    
 
})


