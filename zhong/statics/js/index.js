var common = {
    init: function () {
        lazyload();
        this.animationFun('fadeInUp');
        this.scrollHeader();
        //返回顶部
        if ($('.js-backtop')) {
            $('.js-backtop').click(function () {
                $("html, body").animate({
                    'scrollTop': 0
                }, 600);
                return false;
            });
        }
        if ($('.js-close')) {
            $('.js-close').click(function () {
                $(".search-form").hide();
            })
        }

        /*移动端头部收展*/
        $('.mb-aside-nav .js-list-name').click(function () {
            $(this).siblings('.sub-list').slideToggle();
            if (!$(this).parent().hasClass('active')) {
                $(this).parent().addClass('active');
            }
            $(this).parent().siblings('.list-item').removeClass('active');
            $(this).parent().siblings('.list-item').find('.sub-list').slideUp();
        });
        $('.js-nav-icon').click(function () {
            $('.mb-aside-nav').show();
            $('.mb-aside-nav .nav-list').stop().animate({'right': 0});
        });
        $('.js-close-icon').click(function () {
            $('.mb-aside-nav .nav-list').stop().animate({'right': '-77%'});
            $('.mb-aside-nav').hide();
        });
        $('.mb-aside-nav-left').click(function () {
            $('.mb-aside-nav .nav-list').stop().animate({'right': '-77%'});
            $('.mb-aside-nav').hide();
        })
    },
    animationFun: function (className) {
        var $offsetTop = $(window).height();
        var $elment = ".js-" + className;
        var waypoints1 = $($elment).waypoint({
            handler: function handler(direction) {
                if (direction === "down") {
                    $(this.element).addClass(className); // }else {
                    //     $(this.element).removeClass("animated fadeInUp")
                }
            },
            offset: $offsetTop
        });
    },
    scrollHeader:  function () {
        var beforeScrollTop = $(window).scrollTop();
        var $header = $(".zs-header");
        if(beforeScrollTop>0) {
            $header.removeClass('opacity');
        }else {
            $header.addClass('opacity');
        }
        $(window).scroll(function () {
            var afterScrollTop = $(window).scrollTop();
            if(!$header.hasClass("none")) {
                if(afterScrollTop-beforeScrollTop>0) {
                    $header.addClass('active');
                }else if(afterScrollTop-beforeScrollTop==0) {
                    return false
                }else{
                    $header.removeClass('active');
                }
            }
            beforeScrollTop = $(window).scrollTop();
            if(beforeScrollTop>0) {
                $header.removeClass('opacity');
            }else {
                $header.addClass('opacity');
            }
        })
    }
}
$(function () {
    common.init();
})