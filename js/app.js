$(() => {

  const $links = $('.nav-link');
  const $window = $(window);
  const $menu = $('.menu');
  const $body = $('body');
  const $social =$('.social');

  $links.on('click', scrollToSection);
  $menu.on('click', toggleMenu);


  function toggleMenu() {
    $('.dropdown').slideToggle();
  }

  function scrollToSection() {
    const section = $(this).attr('href');
    $body.animate( {
      scrollTop: $(section).offset().top
    }, 1000, () => {
      if ($window.width() < 575) {
        $('.dropdown').slideToggle();
      }
    });
  }

  $social.hover(
    function() {
      $(this).addClass('bounce');
    }
  );

});
