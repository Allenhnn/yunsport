$(document).ready(function () {
    var log = 0
    $('.img_carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 4200,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    })
    $('.sec1_titles').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 1200,
        mouseDrag: false
    })
    $('.sec5_items').owlCarousel({
        loop: false,
        items: 1,
        mouseDrag: false
    })
    $('.cards').owlCarousel({
        loop: false,
        items: 2,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            456: {
                items: 2,
            }
        }

    })



    $('.sec5_items').trigger('to.owl.carousel', 4)

    $('.down').click(function () {
        down()
    })
    // stroke
    $('.stroke').click(function () {
        $('body').toggleClass('darked')
    })
    // toast 
    $('.open1').click(function () {
        $('.toast').addClass('show')
    })
    $('.robot').click(function () {
        $('.toast').toggleClass('show')
    })
    $('.send_btn').click(function (e) {
        const get_send = $('.send input').val()
        if (get_send == '') {
            e.preventDefault()
        }
        else {
            $('.send input').val('')
            $('.record').append('<h4 class="color_g f1">' + get_send + '</h4>')
            $('.comment').append('<div class="abox">' + get_send + '</div>')
            setTimeout(function () {
                $('.comment').append('<div class="qbox">感謝您的回饋 留言已送至會員資料</div>')
                $(".comment").animate({ scrollTop: 9999 })
            }, 500)
        }
    })
    $('.s1').click(function () {
        $('.comment').append('<div class="abox">最新消息</div>')
        setTimeout(function () {
            $('.comment').append('<div class="qbox">畫面已為您跳至最新消息</div>')
            $(".comment").animate({ scrollTop: 9999 })
            $(window).scrollTop($('#sec4').offset().top)
        }, 500)
    })
    $('.s2').click(function () {
        $('.comment').append('<div class="abox">聯絡我們</div>')
        setTimeout(function () {
            $('.comment').append('<div class="qbox">畫面已為您跳至聯絡我們</div>')
            $(".comment").animate({ scrollTop: 9999 })
            $(window).scrollTop($('#sec6').offset().top)
        }, 500)
    })
    // events
    $('#login').click(function () {
        if (log == 0) {
            $('#login_modal').modal()
        }
        else {
            $('#loging').modal()
        }
    })

    $('#login_btn').click(function () {
        log = 1
        $('#alert1').modal()
        $('#login').addClass('fill_log')
        $('.log').text('遊客 您好')
    })
    $('#logOut').click(function () {
        log = 0
        $('#alert2').modal()
        $('.act').html('')
        $('.record').html('')
        $('.log').text('會員登入')
        $('.reserve').removeClass('fill_res')
        $('#login').removeClass('fill_log')

        $('td div').removeClass('resG')
        $('td div').removeClass('resG')
        count_date = [0, 0, 0, 0, 0]

    })
    $('.ar_right').click(() => {
        $(".cards").trigger("next.owl.carousel");
    })
    $('.ar_left').click(() => {
        $(".cards").trigger("prev.owl.carousel");
    })

    // DATE 
    var date = [4, 6, 17, 21, 30]
    const all_date = [2, 1, 1, 2, 2]
    let count_date = [0, 0, 0, 0, 0]
    $('.reserve').click(function () {
        const get_res = $(this).closest('.sec5_item').find('h2').text()
        if (log == 0) {
            $('#login_modal').modal()
        }
        else {
            if ($(this).hasClass('fill_res')) {
                $("#alert4").modal()
            }
            else {
                $('.act').append('<h4 class="color_g f1">' + get_res + '</h4>')
                $(this).addClass('fill_res')
                $('#alert3').modal()
                const vv = $('.reserve').index(this)
                switch (vv) {
                    case 0: case 1:
                        count_date[0]++
                        break
                    case 2:
                        count_date[1]++
                        break
                    case 3:
                        count_date[2]++
                        break
                    case 4: case 5:
                        count_date[3]++
                        break
                    case 6: case 7:
                        count_date[4]++
                        break
                }
                // alert(count_date)
                for (let i = 0; i < count_date.length; i++) {
                    if (count_date[i] / all_date[i] == 1) {
                        $('td div').eq(date[i] - 1).addClass('resG')
                    }
                    if (count_date[i] / all_date[i] == 0.5) {
                        $('td div').eq(date[i] - 1).addClass('resY')
                    }

                }
            }
        }
    })
    for (let i = 0; i < date.length; i++) {
        $('td div').eq(date[i] - 1).addClass('days')

    }
    $('td div').click(function () {
        const get_td = parseInt($(this).text())
        for (let i = 0; i < date.length; i++) {
            if (get_td == date[i]) {
                $('.sec5_items').trigger('to.owl.carousel', i)
                break

            }
            else {
                $('.sec5_items').trigger('to.owl.carousel', 5)
            }
        }

    })
    // scroll
    $(window).on('scroll', function () {
        // progression
        const pro1 = $(document).height() - $(window).innerHeight()
        const proV = $(window).scrollTop() / pro1
        $('.progression').css('width', proV * 100 + '%')
        // nav
        if (scrollY > 10) {
            $('.navbar').addClass('fill_nav')
        }
        else {
            $('.navbar').removeClass('fill_nav')
        }

    })

    const handler = () => {
        const height = $('#sec3').offset().top - $(window).innerHeight() * 0.75
        if ($(window).scrollTop() > height) {
            $(window).unbind('scroll', handler)
            count()
        }
    }
    $(window).bind('scroll', handler)

    // function


    function count() {
        $('.count').each(function () {
            $(this).prop('a', 0)
                .animate({ a: $(this).text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now))
                    }
                })
        })
    }

    function down() {
        $(window).scrollTop($('#sec5').offset().top)
    }

    AOS.init({
        duration: 1000
    })
})