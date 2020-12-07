window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollwheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeId.SATELLITE
        }

        map = new google.maps.Map(document.getElementById("map"),mapProp)
    }

    initialize();
}

// Menu Mobile 

$(function(){

    var curIndex = 0;
    var amt = $('.wrapper-author').length;


    $menuMobile();
    $initiSlider();
    $menuScroll();
    $autoPlay();


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
    };
    
    function $initiSlider(){
        var sizeContainer = 100 * amt;
        var sizeBoxSingle = 100 / amt;
        $('.wrapper-author').css('width',sizeBoxSingle+'%');
        $('.scroll-wrapper').css('width',sizeContainer+'%');

        for(var i = 0; i < amt; i++){
            if(i == 0)
                $('.slider-bullets').append('<span style="background-color: rgb(150, 150, 150);"></span>')
            else
                $('.slider-bullets').append('<span></span>')
        }
    };

    function $autoPlay(){
        setInterval(function(){
            curIndex++;
            if(curIndex == amt){
                curIndex = 0;
            }
            $goToSlider(curIndex);
        },3000)
    };

    function $goToSlider(curIndex){
        var offSetX = $('.wrapper-author').eq(curIndex).offset().left - $('.scroll-wrapper').offset().left;
        $('.slider-bullets span').css('background-color','rgb(230, 230, 230)');
        $('.slider-bullets span').eq(curIndex).css('background-color','rgb(150, 150, 150)');
        $('.scroll-equipe').stop().animate({'scrollLeft':offSetX+'px'});
    };

    $(window).resize(function(){
        $('.scroll-equipe').stop().animate({'scrollLeft':0});
    });
});