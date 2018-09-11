window.addEventListener('load',function () {
    var lis=document.querySelectorAll('#shichang li');
    var chu=document.querySelector('#rotation_con');
    var divs=document.querySelectorAll('#rotation_con .con1');

    for(var i=0; i<lis.length; i++){
        lis[i].index=i;
        lis[i].onmouseover=function(){
            for(var j=0;j<divs.length; j++){
                divs[j].style.display='none';
            }
            chu.style.display='block';
            divs[this.index].style.display='flex';
        }
        lis[i].onmouseout= function () {
            chu.style.display='none';
        }
    }

    chu.onmouseover=function(){
        chu.style.display='block';
    }
    chu.onmouseout=function(){
        chu.style.display='none';
    }

    var liss=document.querySelectorAll('#shichang1 li');
    var top=document.querySelectorAll('#top_xianxi');
    var top_con=document.querySelectorAll('#top_xianxi .con1');
    console.log(liss)
    console.log(top)
    console.log(top_con)
    top_con[0].style.display='flex';
    for(var i=0; i<liss.length; i++){
        liss[i].index=i;
        liss[i].onmouseover=function(){
            for(var j=0;j<top_con.length; j++){
                top_con[j].style.display='none';
            }
            top_con[this.index].style.display='flex';
        }
    }

});