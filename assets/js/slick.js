$(function () {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    fade: true,
    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa-solid fa-circle-left'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa-solid fa-circle-right'></i></button>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          draggable: true,
          false: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          arrows: true,
        },
      },
    ],
  });

  // $(".notes").slick({
  //   infinite: true,
  //   autoplay: true,
  //   autoplaySpeed: 100,
  //   cssEase: "linear",
  //   fade: true,
  //   vertical: true,
  //   arrows: false,
  // });
  $("#notes").slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    vertical: true,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1900,
    // fade: true,
  });
});

$("a[data-slide]").click(function (e) {
  e.preventDefault();
  $([document.documentElement, document.body]).animate(
    {
      scrollTop: $(".carousel").offset().top,
    },
    0
  );
  var slideno = $(this).data("slide");
  $(".carousel").slick("slickGoTo", slideno - 1);
});
