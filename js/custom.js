// @koala-prepend "plugins/popper-v2.11.5.js"
// @koala-prepend "plugins/bootstrap.js"
// @koala-prepend "plugins/jquery.validate.js"
// @koala-prepend "plugins/spam-protection-2022.js"
// @koala-prepend "plugins/datepicker.js"
// @koala-prepend "plugins/lity-v2.4.1.js"
// @koala-prepend "plugins/slick.min.js"
// @koala-prepend "plugins/resizeable.js"
// @koala-prepend "plugins/map.js"
// @koala-prepend "plugins/fancybox.js"
// @koala-prepend "plugins/aos.js"

// "plugins/jquery-validation.js"
// "plugins/spam-protection.js"

// Document.Ready Start
$(document).ready(function () {
  AOS.init({
    disable: window.innerWidth < 768,
    once: true
  });
  //xs_mobile Sticky mobile header/Hifza udpate
  main_nav = $('ul.navigation').html();
  $('.xs_main_nav').html('<ul class="navigation">' + main_nav + '</ul>');

  lg_logo = $('.lg_logo').html();
  $('.xs_logo').html(lg_logo);

  social_icons = $('ul.social_icons').html();
  $('.static_social_icons').html('<ul class="social_icons">' + social_icons + '</ul>');

  if ($(window).width() < 990) {
    $(window).on('scroll', function () {
      var y_scroll_pos = window.pageYOffset;
      //var scroll_pos_test = element_position;
      if (y_scroll_pos > 500) {
        $('.xs_header').addClass('sticky');
      } else {
        $('.xs_header').removeClass('sticky');
      }

    });

    $(document).on('click', '.humburger_menu.sticky', function (e) {
      e.preventDefault();
      $('body, html').animate({
        scrollTop: 0
      });
    });
  };
  //xs_mobile Sticky mobile header/Hifza udpate

  if ($(window).width() > 100) {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var tp = $(".default_sticky").attr('data-top');
      if (scroll >= tp) {
        $(".default_sticky").addClass("affix");
        $(".sticky_button").addClass("show");
        $("body").addClass("body_affix");
      } else {
        $(".default_sticky").removeClass("affix");
        $(".sticky_button").removeClass("show");
        $("body").removeClass("body_affix");
      }
    });
  }


  // Mobile menu function
  if ($('#mobile_nav ul ul, .xs_main_nav ul ul').length > 0) {
    $('#mobile_nav ul ul, .xs_main_nav ul ul ').before('<em class="fa fa-angle-down  menu_expander"></em>')
  }
  if ($('ul.navigation ul').length > 0) {
    $('ul.navigation li > ul').parents('li').addClass('has_child');
  }

  $('.menu_expander').click(function () {
    $(this).next().slideToggle();
    $(this).toggleClass('toggled');
    $(this).parent().siblings().find('ul').slideUp()
    $(this).parent().siblings().find('em').removeClass('toggled')
  });

  $('.card').click(function () {
    $('.card').removeClass('active');
    $(this).addClass('active');
  });


  $('.humburger_menu').click(function () {
    $('.navigation').toggleClass('expand');
    $('.header').toggleClass('open');
  });


  //Add sticky button for Book Now
  // if ($(window).width() < 769) {
  //     $(window).on('scroll', function() {
  //         var y_scroll_pos = window.pageYOffset;
  //         //var scroll_pos_test = element_position;
  //         if (y_scroll_pos > 720) {
  //             $('#scroll-to, .humburger_menu').addClass('sticky');
  //             $('.referral .btn').addClass('hide');
  //             $('.responsive_header .header_top .top .btns>a.fixd').addClass('hide');
  //         } else {
  //             $('#scroll-to, .humburger_menu').removeClass('sticky');
  //             $('.referral .btn').removeClass('hide');
  //             $('.responsive_header .header_top .top .btns>a.fixd').removeClass('hide');
  //         }
  //     });
  //     $(document).on('click', '.humburger_menu.sticky', function(e) {
  //         e.preventDefault();
  //         $('body, html').animate({
  //             scrollTop: 0
  //         });
  //     });
  // };
  // Open/Close booking form
  $('.sticky_button').on('click', function () {
    $('.nav_form').toggleClass('open');
    $(this).hide();
    $('.datetimepicker').addClass('top-left');
  });
  $('.close_me').on('click', function () {
    $('.nav_form').toggleClass('open');
    $('.sticky_button').show();
    $('.datetimepicker').removeClass('top-left');
  });
  // Menu toggle
  $('.menu').on('click', function () {
    $('.header').toggleClass('show');
    $('.navigation').toggleClass('show');
    $(this).toggleClass('close_btn');
  });
  // Accordion: add active class to title bar.
  $('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
  });
  $('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
  });
  // Collapse open section
  $('#accordion').on('show.bs.collapse', function () {
    $('#accordion .in').collapse('hide');
  });
  // Go to specific ID
  $(document).on('click', '.goto', function (e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }
    e.preventDefault();
    var pos = $id.offset().top;
    $('body, html').animate({
      scrollTop: pos
    });
  });





  // Accordion
  $(".accordion_container .item h3").append("<span class=\"plusminus\"></span> ");
  $(".accordion_container .item h3").click(function () {
    $(".accordion_container .item").removeClass('active');
    $(this).parent().addClass('active');
    if ($('.accordion_body').is(':visible')) {
      $(".accordion_body").slideUp(300);
    }
    if ($(this).next(".accordion_body").is(':visible')) {
      $(this).next(".accordion_body").slideUp(300);
      $(".accordion_container .item").removeClass('active');
    } else {
      $(this).next(".accordion_body").slideDown(300);
    }
  });


  $('.update_form_data').on('click', function () {
    if ($(this).attr('thanks')) {
      var _thanks = $(this).attr('thanks');
      $('.thanks').val('');
      $('.thanks').val(_thanks);
    }
    if ($(this).attr('key')) {
      var _key = $(this).attr('key');
      $('.key').val('');
      $('.key').val(_key);
    }
    if ($(this).attr('accountid')) {
      var _accountid = $(this).attr('accountid');
      $('.accountid').val('');
      $('.accountid').val(_accountid);
    }
    if ($(this).attr('email')) {
      var _email_recipient = $(this).attr('email');
      $('.email').val('');
      $('.email').val(_email_recipient);
    }
  });


  _icons = $('#header_icons').html();
  $('#footer_icons').empty();
  $('#footer_icons').html(_icons);

  $(".nav-link,.smooth_link").click(function () {
    _target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(_target).offset().top
    }, 2000);
  });

  $('.btn_popup_expand').on('click', function () {
    $(this).hide();
  });

  $('.popup_title').on('click', function () {
    _title = $(this).attr('title');
    _target = $(this).attr('target');
    $(_target).empty();
    $(_target).html(_title);
  });

  //read more
  $('.read_more').on('click', function () {
    _target = $(this).parent('.testimonial_txt');
    $(_target).addClass('expanded');
  });

  //read less
  $('.read_less').on('click', function () {
    _target = $(this).parent('.testimonial_txt');
    $(_target).removeClass('expanded');
  });

});


$(document).ready(function () {
  $('.update_form_data').on('click', function () {
    if ($(this).attr('thanks')) {
      var _thanks = $(this).attr('thanks');
      $('.thanks').val('');
      $('.thanks').val(_thanks);
    }
    if ($(this).attr('key')) {
      var _key = $(this).attr('key');
      $('.key').val('');
      $('.key').val(_key);
    }
    if ($(this).attr('accountid')) {
      var _accountid = $(this).attr('accountid');
      $('.accountid').val('');
      $('.accountid').val(_accountid);
    }
    if ($(this).attr('email')) {
      var _email_recipient = $(this).attr('email');
      $('.email').val('');
      $('.email').val(_email_recipient);
    }
  });
});
$(document).on('change', '.update_form_data_select', function () {
  var loc = $(this).val();
  var _rel = $(this).attr('rel');
  if ($(_rel).find('.' + loc).attr('thanks')) {
    var _thanks = $(_rel).find('.' + loc).attr('thanks');
    $('.thanks').val('');
    $('.thanks').val(_thanks);
  }
  if ($(_rel).find('.' + loc).attr('key')) {
    var _key = $(_rel).find('.' + loc).attr('key');
    $('.key').val('');
    $('.key').val(_key);
  }
  if ($(_rel).find('.' + loc).attr('accountid')) {
    var _accountid = $(_rel).find('.' + loc).attr('accountid');
    $('.accountid').val('');
    $('.accountid').val(_accountid);
  }
  if ($(_rel).find('.' + loc).attr('email')) {
    var _email = $(_rel).find('.' + loc).attr('email');
    $('.email').val('');
    $('.email').val(_email);
  }
});

$(document).ready(function () {
  $('.change_practice_logo').on('click', function () {

    _target = $(this).attr('target');
    _source = $(this).attr('rel');
    $(_target).attr('src', _source);

  });
});



$(document).ready(function () {
  $('.update_form_data').on('click', function () {
    if ($(this).attr('thanks')) {
      var _thanks = $(this).attr('thanks');
      $('.thanks').val('');
      $('.thanks').val(_thanks);
    }
    if ($(this).attr('key')) {
      var _key = $(this).attr('key');
      $('.key').val('');
      $('.key').val(_key);
    }
    if ($(this).attr('accountid')) {
      var _accountid = $(this).attr('accountid');
      $('.accountid').val('');
      $('.accountid').val(_accountid);
    }
    if ($(this).attr('email')) {
      var _email_recipient = $(this).attr('email');
      $('.email').val('');
      $('.email').val(_email_recipient);
    }
  });
});
$(document).on('change', '.update_form_data_select', function () {
  var loc = $(this).val();
  var _rel = $(this).attr('rel');
  if ($(_rel).find('.' + loc).attr('thanks')) {
    var _thanks = $(_rel).find('.' + loc).attr('thanks');
    $('.thanks').val('');
    $('.thanks').val(_thanks);
  }
  if ($(_rel).find('.' + loc).attr('key')) {
    var _key = $(_rel).find('.' + loc).attr('key');
    $('.key').val('');
    $('.key').val(_key);
  }
  if ($(_rel).find('.' + loc).attr('accountid')) {
    var _accountid = $(_rel).find('.' + loc).attr('accountid');
    $('.accountid').val('');
    $('.accountid').val(_accountid);
  }
  if ($(_rel).find('.' + loc).attr('email')) {
    var _email = $(_rel).find('.' + loc).attr('email');
    $('.email').val('');
    $('.email').val(_email);
  }
});

$('.hero_form input').focus(function () {
  $(this).parents('.form-group').addClass('focus');
})

$('.hero_form input').blur(function () {
  if (!$(this).val()) {
    $(this).parents('.form-group').removeClass('focus');
  }
})


$(document).ready(function () {

  // $("form.pdf_form").validationEngine({ scroll: false, promptPosition: "topLeft",/* showOneMessage: true, */autoHideDelay: 5000, autoHidePrompt: true, delay: 500, binded: false });



  // Slick Slider for multiple slides

  $(".treatment-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    swipe: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    appendArrows: '.ts-arrows',
    // autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        }
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,

        }
      }]
  });

  $(".ba-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 1500,
    //variableWidth: true,
    infinite: true,
    swipe: false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".testimonials_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 1500,
    //variableWidth: true,
    infinite: true,
    swipe: true
  });

  $(".test_slide").slick({
    slidesToShow: 2,
    // slidesToScroll: 1,
    dots: false,
    swipe: true,
    infinite: true,
    arrows: true,
    centerMode: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 1,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,

        }
      }]
  });

  $('.no_slider').slick('unslick');



  $('.before_after_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    swipe: false,
    appendArrows: '.cus-arrows',
    responsive: [
      {
        breakpoint: 1930,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1660,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $(".insta_post").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    swipe: true,
    infinite: true,
    arrows: false,
    centerMode: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    appendArrows: '.ig-arrows',
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,

        }
      }]
  });

  $(".logos-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    swipe: true,
    infinite: true,
    arrows: false,
    centerMode: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    responsive: [

      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 767,
        settings: 'unslick'
      }]
  });

});

// Humber menu animation
$(document).ready(function () {
  $('.icon-humburger').click(function () {
    $(this).toggleClass('open');
  });

  $(window).on('load resize', function () {
    setTimeout(function () {
      if ($(window).width() < 767) {
        $($(".hero_testi").detach()).appendTo('.hero_testi_wrap');
      } else {
        $($('.hero_testi').detach()).appendTo('.hero_testi_wrap_1');
      }
    }, 100);
  });

});