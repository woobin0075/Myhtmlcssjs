$('.outerbox').css({'display':'none'});
$('.secondouterbox').css({'display':'none'});
$('.innercategorybox2').css({'display':'none'});

$('.categorybox').hover(function(){
    $('.outerbox').css({'display':'block'});
    $('.outerbox .innercategorybox').css({'display':'block'});
   
}, function(){
    $('.outerbox .innercategorybox .list').hover(function(){
        $('.secondouterbox').css({'display':'block'});
    }, function(){
        $('.innercategorylist .list').hover(function(){
            $('.innercategorybox2').css({'display':'block'});
        }, function(){
            
        });
        
    });
    
});