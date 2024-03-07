let click=false;
let click2=false;
let click3=false;

$('.picture').css({'opacity':'0'});

$('.container .box:nth-child(1)').hover(
    function(){
        $(' .box:nth-child(1) span').css({'color':'white'});
    }, function(){
        $(' .box:nth-child(1) span').css({'color':'black'});
    }
)

$('.container .box:nth-child(2)').hover(
    function(){
        $('.box:nth-child(2) span').css({'color':'white'});
    }, function(){
        $('.box:nth-child(2) span').css({'color':'black'});
    }
)

$('.container .box:nth-child(3)').hover(
    function(){
        $('.box:nth-child(3) span').css({'color':'white'});
    }, function(){
        $('.box:nth-child(3) span').css({'color':'black'});
    }
)

function imageopen(){
    click = !click;
    
    if(click === true){
        document.getElementById('url').href = "https://www.naver.com/";
        document.getElementById('homepage').src="./images/네이버.PNG"
        
        $('.picture').css({'opacity':'1'});
        click2=false;
        click3=false;
    }else{
        $('.picture').css({'opacity':'0'});
    }
    
}

function imageopen2(){
    click2 = !click2;
    
    if(click2 === true){
        document.getElementById('url').href = "https://www.google.com/";
        document.getElementById('homepage').src="./images/google.PNG"
        $('.picture').css({'opacity':'1'});
        click=false;
        click3=false;
    }else{
        $('.picture').css({'opacity':'0'});
    }
    
}

function imageopen3(){
    click3 = !click3;
    
    if(click3 === true){
        document.getElementById('url').href = "https://www.daum.net/";
        document.getElementById('homepage').src="./images/다음.PNG"
        $('.picture').css({'opacity':'1'});
        click2=false;
        click=false;
    }else{
        $('.picture').css({'opacity':'0'});
    }
    
}