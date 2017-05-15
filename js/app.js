$(() => {

  const $links = $('.nav');
  const $header = $('header');
  const $window = $(window);


  $links.on('click', scrollToSection);
  $window.scroll(updateHeader).trigger('scroll');


  function scrollToSection() {
    const section = $(this).attr('href');
    $('body').animate( {
      scrollTop: $(section).offset().top
    }, 1000);
  }

  function updateHeader() {
    const bottomOfHeader = $header.offset().top + $header.height();
    const viewportHeight = $window.height();

    if (bottomOfHeader >= viewportHeight) {
      $header.addClass('opaque');
    } else {
      $header.removeClass('opaque');
    }
  }

});
