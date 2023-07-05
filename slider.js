$(function () {
  $('.responsive-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});