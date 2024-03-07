$('.category').mouseenter(function(){
    $('.Categorybox:nth-child(1)').css({'display':'block'})
})

$('.Categorybox:nth-child(1) .char:nth-child(1)').mouseenter(function(){
    $('.Categorybox:nth-child(2)').css({'display':'block'})
    $('.Categorybox:nth-child(3)').css({'display':'none'})
})

$('.Categorybox:nth-child(2) .char:nth-child(1)').mouseenter(function(){
    $('.Categorybox:nth-child(3)').css({'display':'block'})
})

$('.Categorybox:nth-child(2) .emptybox').mouseleave(function(){
    $('.Categorybox:nth-child(3)').css({'display':'none'})
})


$('.Categorybox:nth-child(1) .emptybox').mouseenter(function(){
    $('.Categorybox:nth-child(2)').css({'display':'none'})
    
})

$('.Categorybox:nth-child(1) .emptybox').mouseleave(function(){
    $('.Categorybox:nth-child(1)').css({'display':'none'})
})
