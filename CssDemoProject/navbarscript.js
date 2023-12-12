$(window).on('scroll',function(){
    if ($(window).scrollTop()) {
        $('#menu').addClass('black');
    }
    else{
        $('#menu').removeClass('black');
    }
})