/* Validation form */
ValidationFormSelf("validation-newsletter");
ValidationFormSelf("validation-cart");
ValidationFormSelf("validation-user");
ValidationFormSelf("validation-contact");

/* Exists */
$.fn.exists = function(){
    return this.length;
};

/* Paging ajax */
/*if($(".paging-product").exists())
{
    loadPagingAjax("ajax/ajax_product.php?perpage=8",'.paging-product');
}*/

/* Paging category ajax */
/*if($(".paging-product-category").exists())
{
    $(".paging-product-category").each(function(){
        var list = $(this).data("list");
        loadPagingAjax("ajax/ajax_product.php?perpage=8&idList="+list,'.paging-product-category-'+list);
    })
}*/

/* Back to top */
NN_FRAMEWORK.BackToTop = function(){
    $(window).scroll(function(){
        if(!$('.scrollToTop').length) $("body").append('<div class="scrollToTop"><img src="'+GOTOP+'" alt="Go Top"/></div>');
        if($(this).scrollTop() > 100) $('.scrollToTop').fadeIn();
        else $('.scrollToTop').fadeOut();
    });

    $('body').on("click",".scrollToTop",function() {
        $('html, body').animate({scrollTop : 0},800);
        return false; 
    });
};

/* Alt images */
NN_FRAMEWORK.AltImages = function(){
    $('img').each(function(index, element) {
        if(!$(this).attr('alt') || $(this).attr('alt')=='')
        {
            $(this).attr('alt',WEBSITE_NAME);
        }
    });
};

/* Fix menu */
NN_FRAMEWORK.FixMenu = function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >= $(".header").height()) $(".menu_mobi").css({position:"fixed",left:'0px',right:'0px',top:'0px',zIndex:'999'});
        else $(".menu_mobi").css({position:"relative"});
    });

    $(window).scroll(function(){
        var cach_top3 = $(window).scrollTop();
        var heaigt_header = $('.header').height();

        if(cach_top3 >= heaigt_header){
            $('div.header').addClass('head-fix');
        }else{
            $('div.header').removeClass('head-fix');
        } 
    });

    /* click danh muc ben trai */
    $("#danhmuc ul li span").click(function(){ if($(this).parent('li').children('ul').find('li').length>0){ if($(this).hasClass('active')) { $(this).parent('li').find('ul:first').hide(300); $(this).removeClass('active'); }else{ $(this).parent('li').find('ul:first').show(300); $(this).addClass('active'); } return false; } });
    
    /* tạo menu mobile */
    var menu_mobi = $('ul.menu_desktop').html();
    $('.menu_mobi_add').append('<span class="close_menu">X</span><ul>'+menu_mobi+'</ul>');
    $(".menu_mobi_add ul li").each(function(index, element) {
        if($(this).children('ul').children('li').length>0){
            $(this).children('a').append('<i class="fas fa-chevron-right"></i>');
        }
    });
    $(".menu_mobi_add ul li a i").click(function(){
        if($(this).parent('a').hasClass('active2')){
            $(this).parent('a').removeClass('active2');
            if($(this).parent('a').parent('li').children('ul').children('li').length > 0){
                $(this).parent('a').parent('li').children('ul').hide(300);
                return false;
            }
        }
        else{
            $(this).parent('a').addClass('active2');
            if($(this).parents('li').children('ul').children('li').length > 0){
                $(".menu_m ul li ul").hide(0);
                $(this).parents('li').children('ul').show(300);
                return false;
            }
        }
    });

    $('.icon_menu_mobi,.close_menu,.menu_baophu').click(function(){
        if($('.menu_mobi_add').hasClass('menu_mobi_active'))
        {
            $('.menu_mobi_add').removeClass('menu_mobi_active');
            $('.menu_baophu').fadeOut(300);
        }
        else
        {
            $('.menu_mobi_add').addClass('menu_mobi_active');
            $('.menu_baophu').fadeIn(300);
        }
        return false;
    });
};

/* Tools */
NN_FRAMEWORK.Tools = function(){
    if($(".toolbar").exists())
    {
        $(".footer").css({marginBottom:$(".toolbar").innerHeight()});
    }
};

/* Popup */
NN_FRAMEWORK.Popup = function(){
    if($("#popup").exists())
    {
        $('#popup').modal('show');
    }
};

/* Wow */
NN_FRAMEWORK.WowAnimation = function(){
    new WOW().init();
};

/* Mmenu */
NN_FRAMEWORK.Mmenu = function(){
    if($("nav#menu").exists())
    {
        $('nav#menu').mmenu();
    }
};

/* Toc */
NN_FRAMEWORK.Toc = function(){
    if($(".toc-list").exists())
    {
        $(".toc-list").toc({
            content: "div#toc-content",
            headings: "h2,h3,h4"
        });

        if(!$(".toc-list li").length) $(".meta-toc").hide();

        $('.toc-list').find('a').click(function(){
            var x = $(this).attr('data-rel');
            goToByScroll(x);
        });
    }
};

/* Simply scroll */
NN_FRAMEWORK.SimplyScroll = function(){
    if($(".newshome-scroll ul").exists())
    {
        $(".newshome-scroll ul").simplyScroll({
            customClass: 'vert',
            orientation: 'vertical',
            // orientation: 'horizontal',
            auto: true,
            manualMode: 'auto',
            pauseOnHover: 1,
            speed: 1,
            loop: 0
        });
    }
};

/* Tabs */
NN_FRAMEWORK.Tabs = function(){
    if($(".ul-tabs-pro-detail").exists())
    {
        $(".ul-tabs-pro-detail li").click(function(){
            var tabs = $(this).data("tabs");
            $(".content-tabs-pro-detail, .ul-tabs-pro-detail li").removeClass("active");
            $(this).addClass("active");
            $("."+tabs).addClass("active");
        });
    }
};

/* Photobox */
NN_FRAMEWORK.Photobox = function(){
    if($(".album-gallery").exists())
    {
        $('.album-gallery').photobox('a',{thumbs:true,loop:false});
    }
};

/* Datetime picker */
NN_FRAMEWORK.DatetimePicker = function(){
    if($('#ngaysinh').exists())
    {
        $('#ngaysinh').datetimepicker({
            timepicker: false,
            format: 'd/m/Y',
            formatDate: 'd/m/Y',
            minDate: '01/01/1950',
            maxDate: TIMENOW
        });
    }
};

/* Search */
NN_FRAMEWORK.Search = function(){
    if($(".icon-search").exists())
    {
        $(".icon-search").click(function(){
            if($(this).hasClass('active'))
            {
                $(this).removeClass('active');
                $(".search-grid").stop(true,true).animate({opacity: "0",width: "0px"}, 200);   
            }
            else
            {
                $(this).addClass('active');                            
                $(".search-grid").stop(true,true).animate({opacity: "1",width: "230px"}, 200);
            }
            document.getElementById($(this).next().find("input").attr('id')).focus();
            $('.icon-search i').toggleClass('fa fa-search fa fa-times');
        });
    }
};

/* Videos */
NN_FRAMEWORK.Videos = function(){
    /* Fancybox */
    // $('[data-fancybox="something"]').fancybox({
    //     // transitionEffect: "fade",
    //     // transitionEffect: "slide",
    //     // transitionEffect: "circular",
    //     // transitionEffect: "tube",
    //     // transitionEffect: "zoom-in-out",
    //     // transitionEffect: "rotate",
    //     transitionEffect: "fade",
    //     transitionDuration: 800,
    //     animationEffect: "fade",
    //     animationDuration: 800,
    //     slideShow: {
    //         autoStart: true,
    //         speed: 3000
    //     },
    //     arrows: true,
    //     infobar: false,
    //     toolbar: false,
    //     hash: false
    // });

    if($(".video").exists())
    {
        $('[data-fancybox="video"]').fancybox({
            transitionEffect: "fade",
            transitionDuration: 800,
            animationEffect: "fade",
            animationDuration: 800,
            arrows: true,
            infobar: false,
            toolbar: true,
            hash: false
        });
    }
};

/* Owl */
NN_FRAMEWORK.OwlPage = function(){
    if($(".owl-slideshow").exists())
    {
        $('.owl-slideshow').owlCarousel({
            items: 1,
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: false,
            touchDrag: false,
            animateIn: 'animate__animated animate__fadeInLeft',
            animateOut: 'animate__animated animate__fadeOutRight',
            margin: 0,
            smartSpeed: 500,
            autoplaySpeed: 3500,
            nav: false,
            dots: true            
        });
        $('.prev-slideshow').click(function() {
            $('.owl-slideshow').trigger('prev.owl.carousel');
        });
        $('.next-slideshow').click(function() {
            $('.owl-slideshow').trigger('next.owl.carousel');
        });
    }

    if($(".owl-brand").exists())
    {
        $('.owl-brand').owlCarousel({
            items: 7,
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass:true,
            responsiveRefreshRate: 200,           
            responsive : { 
                480 : {
                    items: 3,
                    margin: 10
                },                
                900 : {
                    items: 7,
                    margin: 10
                }
            }
        });
        $('.prev-brand').click(function() {
            $('.owl-brand').trigger('prev.owl.carousel');
        });
        $('.next-brand').click(function() {
            $('.owl-brand').trigger('next.owl.carousel');
        });
    }

    if($(".owl-partner").exists())
    {
        $('.owl-partner').owlCarousel({
            items: 7,
            rewind: true,
            autoplay: true,
            loop: false,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            autoplaySpeed: 1000,
            nav: false,
            dots: false,
            responsiveClass:true,
            responsiveRefreshRate: 200,
            responsive : { 
                480 : {
                    items: 3,
                    margin: 10
                },                
                900 : {
                    items: 7,
                    margin: 10
                }
            }
        });
        $('.prev-partner').click(function() {
            $('.owl-partner').trigger('prev.owl.carousel');
        });
        $('.next-partner').click(function() {
            $('.owl-partner').trigger('next.owl.carousel');
        });
    }
};

/* Owl pro detail */
NN_FRAMEWORK.OwlProDetail = function(){
    if($(".owl-thumb-pro").exists())
    {
        $('.owl-thumb-pro').owlCarousel({
            items: 4,
            lazyLoad: false,
            mouseDrag: true,
            touchDrag: true,
            margin: 10,
            smartSpeed: 250,
            nav: false,
            dots: false
        });
        $('.prev-thumb-pro').click(function() {
            $('.owl-thumb-pro').trigger('prev.owl.carousel');
        });
        $('.next-thumb-pro').click(function() {
            $('.owl-thumb-pro').trigger('next.owl.carousel');
        });
    }
};

/* xemnhanh product detail */
NN_FRAMEWORK.xemnhanh_sanpham = function(){
    $("body").on("click",".xemnhanh",function(){       
        var id = $(this).data("id");        

        if(id)
        {             
            $.ajax({
                url:'ajax/ajax_xemnhanh.php',
                type: "POST",
                dataType: 'html',
                async: false,
                data: {id:id},
                success: function(result){
                    $("#popup-pro-detail .modal-body").html(result);
                    $('#popup-pro-detail').modal('show');
                    MagicZoom.refresh("Zoom-1");
                    NN_FRAMEWORK.OwlProDetail();
                }
            });
        }
    });
};

/* yeuthich product */
NN_FRAMEWORK.yeuthich_sanpham = function(){
    $("body").on("click",".yeuthich",function(){       
        
        var goc = $(this);
        var id = goc.data('id');

        if(goc.hasClass('act-love')){
            alert('Bạn đã yêu thích sản phẩm này rồi.');
        }else{
            goc.addClass('act-love');
            $.ajax({
                type:'post',
                url:'ajax/ajax_yeuthich.php',
                dataType:'json',
                data:{id:id},
                success:function(kq){       
                    $('.sanpham_dayeu span').html(kq.soluong);  
                    alert('Cảm ơn bạn đã yêu thích sản phẩm của chúng tôi.');                      
                }
            });
        };                 
        return false;
    });
};

/* Cart */
NN_FRAMEWORK.Cart = function(){
    $("body").on("click",".addcart",function(){
        var mau = ($(".color-pro-detail input:checked").val()) ? $(".color-pro-detail input:checked").val() : 0;
        var size = ($(".size-pro-detail input:checked").val()) ? $(".size-pro-detail input:checked").val() : 0;
        var id = $(this).data("id");
        var action = $(this).data("action");
        var quantity = ($(".qty-pro").val()) ? $(".qty-pro").val() : 1;

        if(id)
        {
            $.ajax({
                url:'ajax/ajax_cart.php',
                type: "POST",
                dataType: 'json',
                async: false,
                data: {cmd:'add-cart',id:id,mau:mau,size:size,quantity:quantity},
                success: function(result){
                    if(action=='addnow')
                    {
                        $('.count-cart').html(result.max);
                        $.ajax({
                            url:'ajax/ajax_cart.php',
                            type: "POST",
                            dataType: 'html',
                            async: false,
                            data: {cmd:'popup-cart'},
                            success: function(result){
                                $("#popup-cart .modal-body").html(result);
                                $('#popup-cart').modal('show');
                            }
                        });
                    }
                    else if(action=='buynow')
                    {
                        window.location = CONFIG_BASE + "gio-hang";
                    }
                }
            });
        }
    });

    $("body").on("click",".del-procart",function(){
        if(confirm(LANG['delete_product_from_cart']))
        {
            var code = $(this).data("code");
            var ship = $(".price-ship").val();

            $.ajax({
                type: "POST",
                url:'ajax/ajax_cart.php',
                dataType: 'json',
                data: {cmd:'delete-cart',code:code,ship:ship},
                success: function(result){
                    $('.count-cart').html(result.max);
                    if(result.max)
                    {
                        $('.price-temp').val(result.temp);
                        $('.load-price-temp').html(result.tempText);
                        $('.price-total').val(result.total);
                        $('.load-price-total').html(result.totalText);
                        $(".procart-"+code).remove();
                    }
                    else
                    {
                        $(".wrap-cart").html('<a href="" class="empty-cart text-decoration-none"><i class="fa fa-cart-arrow-down"></i><p>'+LANG['no_products_in_cart']+'</p><span>'+LANG['back_to_home']+'</span></a>');
                    }
                }
            });
        }
    });

    $("body").on("click",".counter-procart",function(){
        var $button = $(this);
        var quantity = 1;
        var input = $button.parent().find("input");
        var id = input.data('pid');
        var code = input.data('code');
        var oldValue = $button.parent().find("input").val();
        if($button.text() == "+") quantity = parseFloat(oldValue) + 1;
        else if(oldValue > 1) quantity = parseFloat(oldValue) - 1;
        $button.parent().find("input").val(quantity);
        update_cart(id,code,quantity);
    });

    $("body").on("change","input.quantity-procat",function(){
        var quantity = $(this).val();
        var id = $(this).data("pid");
        var code = $(this).data("code");
        update_cart(id,code,quantity);
    });

    if($(".select-city-cart").exists())
    {
        $(".select-city-cart").change(function(){
            var id = $(this).val();
            load_district(id);
            load_ship();
        });
    }

    if($(".select-district-cart").exists())
    {
        $(".select-district-cart").change(function(){
            var id = $(this).val();
            load_wards(id);
            load_ship();
        });
    }

    if($(".select-wards-cart").exists())
    {
        $(".select-wards-cart").change(function(){
            var id = $(this).val();
            load_ship(id);
        });
    }

    if($(".payments-label").exists())
    {
        $(".payments-label").click(function(){
            var payments = $(this).data("payments");
            $(".payments-cart .payments-label, .payments-info").removeClass("active");
            $(this).addClass("active");
            $(".payments-info-"+payments).addClass("active");
        });
    }

    if($(".color-pro-detail").exists())
    {
        $(".color-pro-detail").click(function(){
            $(".color-pro-detail").removeClass("active");
            $(this).addClass("active");
            
            var id_mau=$("input[name=color-pro-detail]:checked").val();
            var idpro=$(this).data('idpro');

            $.ajax({
                url:'ajax/ajax_color.php',
                type: "POST",
                dataType: 'html',
                data: {id_mau:id_mau,idpro:idpro},
                success: function(result){
                    if(result!='')
                    {
                        $('.left-pro-detail').html(result);
                        MagicZoom.refresh("Zoom-1");
                        NN_FRAMEWORK.OwlProDetail();
                    }
                }
            });
        });
    }

    if($(".size-pro-detail").exists())
    {
        $(".size-pro-detail").click(function(){
            $(".size-pro-detail").removeClass("active");
            $(this).addClass("active");
        });
    }

    if($(".quantity-pro-detail span").exists())
    {
        $(".quantity-pro-detail span").click(function(){
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if($button.text() == "+")
            {
                var newVal = parseFloat(oldValue) + 1;
            }
            else
            {
                if(oldValue > 1) var newVal = parseFloat(oldValue) - 1;
                else var newVal = 1;
            }
            $button.parent().find("input").val(newVal);
        });
    }
};

NN_FRAMEWORK.slick_index = function(){
    $('.chay_thinghiem').slick({
        lazyLoad: 'progressive', infinite: true, accessibility:true, vertical:false, slidesToShow: 2, 
        slidesToScroll: 1, autoplay:true, autoplaySpeed:3000,  speed:1000, arrows:false, centerMode:false,
        dots:false,  draggable:true,  responsive: [
            {
              breakpoint: 461,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth:false,
                vertical:false,
                centerMode:false,
                arrows:false,
              }
            }               
        ] 
        }); 

    $('.chay_tinnoibat').slick({
        lazyLoad: 'progressive', infinite: true, accessibility:true, vertical:false, slidesToShow: 1, 
        slidesToScroll: 1, autoplay:true, autoplaySpeed:3000,  speed:1000, arrows:true, centerMode:false,
        dots:false,  draggable:true, responsive: [
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                vertical:false,
                arrows:false,
              }
            },{
              breakpoint: 461,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth:false,
                vertical:false,
                centerMode:false,
                arrows:false,
              }
            }               
        ] 
        }); 

};

/* Ready */
$(document).ready(function(){
    NN_FRAMEWORK.Tools();
    NN_FRAMEWORK.Popup();
    NN_FRAMEWORK.WowAnimation();
    NN_FRAMEWORK.AltImages();
    NN_FRAMEWORK.BackToTop();
    NN_FRAMEWORK.FixMenu();
    //NN_FRAMEWORK.Mmenu();
    NN_FRAMEWORK.OwlPage();
    NN_FRAMEWORK.OwlProDetail();
    NN_FRAMEWORK.Toc();
    NN_FRAMEWORK.Cart();
    NN_FRAMEWORK.SimplyScroll();
    NN_FRAMEWORK.Tabs();
    NN_FRAMEWORK.Videos();
    NN_FRAMEWORK.Photobox();
    NN_FRAMEWORK.Search();
    NN_FRAMEWORK.DatetimePicker();
    NN_FRAMEWORK.xemnhanh_sanpham();
    NN_FRAMEWORK.yeuthich_sanpham();
    NN_FRAMEWORK.slick_index();
});