//JS

$(document).ready(function () {
  //Lazy-Load
  var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazyload",
  });

  //Menu
  $(function () {
    $(".header_hamburger").on("click", function () {
      $(".toggle").toggleClass("open");
      $(".header_menu").toggleClass("open");
    });
  });

  //Menu-Active
  jQuery(function ($) {
    var path = window.location.href;
    $("ul li a").each(function () {
      if (this.href === path) {
        $(this).addClass("active");
      }
    });
  });

  //Menu-Scroll
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $("#header").addClass("fixed");
    } else {
      $("#header").removeClass("fixed");
    }
  });

  //Home_Slider
  const iconLeft = '<i class="fa-solid fa-chevron-left"></i>';
  const iconRight = '<i class="fa-solid fa-chevron-right"></i>';

  $(".home_slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    navText: [iconLeft, iconRight],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
      1400: {
        items: 1,
      },
      1600: {
        items: 1,
      },
    },
  });

  //Home_Projects_İtems

  $(".home_projects_items").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1400: {
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  });

  //Home-Counter
  $(".count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 4000,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
});
