
$(function(){
    var currentIndex = 0;
    var isDrag = false;
    var valueMax = 70000;
    var valueCurrent = 0;

    $('.preco-button').mousedown(function(){
        isDrag = true;
    })

    $(document).mouseup(function(){
        isDrag = false;
    })

    $('.barra-de-preco').mousemove(function(e){
        if(isDrag){
            var elBase = $(this)
            var mouseX = e.pageX - elBase.offset().left;
            if(mouseX < 0)
                mouseX = 0;
            if(mouseX > elBase.width())
                mouseX = elBase.width();
            $('.preco-button').css('left',(mouseX-13)+'px');
            valueCurrent = (currentIndex/100) * valueMax;
            valueCurrent = $formatarPreco(valueCurrent)
            $('.preco-pesquisa').html('R$'+valueCurrent)
            currentIndex = (mouseX / elBase.width()) * 100;
            $('.barra-preco-fill').css('width',currentIndex+'%');
        }
    })

    function $formatarPreco(valueCurrent){
        valueCurrent = valueCurrent.toFixed(2);
        valueArr = valueCurrent.split('.');

        var newValue = $formatarTotal(valueArr)
        
        return newValue
    }

    function $formatarTotal(valueArr){
        if(valueArr[0] < 1000){
                return valueArr[0]+','+valueArr[1]
        }else if(valueArr[0] < 10000){
            return valueArr[0][0]+'.'+valueArr[0].substr(1,valueArr[0].length)+','+valueArr[1]
        }else{
            return valueArr[0][0]+valueArr[0][1]+'.'+valueArr[0].substr(2,valueArr[0].length)+','+valueArr[1]
        }
    }
})

$(function(){

    var imgShow = 3;
    var maxIndex = Math.ceil($('.mini-img-wraper').length/3)-1;
    let curIndex = 0;

    $initSlider();
    $navigateSlider();
    $clickSlider();

    function $initSlider(){
        var amt = $('.mini-img-wraper').length * 33.3;
        var elScroll = $('.nav-galeria-wraper')
        var elSingle = $('.mini-img-wraper')
        elScroll.css('width',amt+'%');
        elSingle.css('width',33.3*(100/amt)+'%')
    }

    function $navigateSlider(){
        $('.arrow-right').click(function(){
            if(curIndex < maxIndex){
                curIndex+=1;
                var elOff = $('.nav-galeria-wraper').eq(curIndex*3).offset().left; - $('.mini-img-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
            }else{
                console.log('Chegamos até o final')
            }
        })

        $('.arrow-left').click(function(){
            if(curIndex > 0){
                curIndex-=1;
                var elOff = $('.nav-galeria-wraper').eq(curIndex*3).offset().left; - $('.mini-img-wraper').offset().left;
                $('.nav-galeria').animate({'scrollLeft':elOff+'px'})
            }else{
                console.log('Chegamos até o final')
            }
        })
    }

    function $clickSlider(){
        $('.mini-img-wraper').click(function(){
            $('.mini-img-wraper').css('background-color','transparent')
            $(this).css('background-color','rgb(210, 210, 210)')
            var img = $(this).children().css('background-image');
            $('.foto-destaque').css('background-image',img)
        })

        $('mini-img-wraper').eq(0).click();
    }

    $('[goto=contato]').click(function(){
        $('html,body').animate({'scrollTop':$('#contato').offset().top});
        $('a').css('color','black')
        $(this).css('color','#EB2D2D')
    })

});