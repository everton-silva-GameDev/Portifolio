$(function(){

    $menuMobile()
    $menuScroll()

    function $menuMobile(){
        $('.menu-mobile').click(function(){
            $(this).find('ul').slideToggle()
        })
    }

    function $menuScroll(){
        $('nav a').click(function(){
            var href = $(this).attr('href');
            var offSetTop = $(href).offset().top;

            $('html, body').animate({'scrollTop':offSetTop},)
            
            return false
        })
    }
})