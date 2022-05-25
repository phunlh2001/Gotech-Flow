$(function () {
  $(".carousel").slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    draggable: true,
    autoplay: false,
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
        },
        draggable: true,
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
