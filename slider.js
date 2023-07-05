$(function () {
  $('.responsive-slider').slick({
    nextArrow: '.yellow_arrow',
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          nextArrow: '.yellow_arrow',
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
          nextArrow: '.yellow_arrow',
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          nextArrow: '.yellow_arrow',
          dots: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});