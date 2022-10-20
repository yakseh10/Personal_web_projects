var navstatus = 0;

function open(){
    if(!navstatus){
        $('.mainDiv').css('width','25%')
        $('li').css('display','block')
        navstatus=1
    }
    else{
        $('.mainDiv').css('width','0')
        $('li').css('display','none')
        navstatus=0
    }
}