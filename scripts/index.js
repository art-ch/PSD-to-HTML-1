//  ------------------------------------- Statements ------------------------------------- //
const title = $('.banner-title');
title.css({ textAlign: 'center' });

//  ------------------------------------- Selectors -------------------------------------- //
$('#lead-banner p').css({ background: 'seagreen' });

$('h3').css({ border: '3px solid seagreen' });
$('.wrapper').css({ border: '3px solid skyblue' });
$('#clients').css({ border: '3px solid #ee9b00' });

//  --------------------------------------- Filters -------------------------------------- //
// first/last
$('header nav li:first').css({ border: '3px solid seagreen' });

// first-child/last-child
$('#contact h2:first-child').css({ background: '#2a9d8f' });

// odd/even
$('header nav li a:odd').css({ border: '3px solid #48cae4' });

// not
$(`section:not('#contact')`).css({ background: '#e9ecef' });

// less than/greater than
$('#social-nav li:gt(1)').css({ border: '3px solid #84a59d' });

// attribute filters
$('div[class]').css({ border: '3px solid pink' });

// attribute with specific value
$('img[alt=quote]').css({ border: '3px solid purple' });

//  ----------------------------------- DOM Traversal ------------------------------------ //
// next
$('#contact-methods').next().css({ border: '3px solid #9b2226' });

// prev
$('#social-nav').prev().css({ border: '3px solid #03045e' });

// parent(s)/children
title.parents().css({ border: '3px solid #ff4d6d' });

// find
$('#contact').find('.facebook').css({ border: '3px solid #455e89' });

// closest
$('#social-nav').closest('.wrapper').css({ border: '3px solid #4a4e69' });

//  ------------------------------------- Chaining --------------------------------------- //
$('#contact-methods')
  .css({ border: '2px solid #4d194d' })
  .next()
  .css({ border: '3px solid #00a896' })
  .closest('section')
  .css({ border: '3px solid #b388eb' });

//  ---------------------------------- Adding Content ------------------------------------ //
const addTweet = (command) => {
  return `<div style="margin: 20px 0; padding: 10px; background: #a9def9">
    ${command.charAt(0).toUpperCase() + command.slice(1)}: Omae wa mou shindeiru
  </div>`;
};

// append
$('#tweets .section-header').append(addTweet('append'));

// prepend
$('#tweets .section-header').prepend(addTweet('prepend'));

// before
$('#tweets h3').before(addTweet('before'));

// after
$('#tweets h3').after(addTweet('after'));

// text
$('#tweets h3').text(addTweet('text'));

// html
$('#tweets .section-header').html(addTweet('html'));

//  --------------------------------- Wrapping Content ----------------------------------- //
$('section').wrap('<div>');
$('section').unwrap();
$('section').wrapAll('<div>');

//  --------------------------------- Removing Content ----------------------------------- //
$('.wrapper-button').empty();
$('#tweets').remove();

//  -------------------------------- Managing Attributes --------------------------------- //
console.log($('#contact img').attr('alt'));
$('#contact img').removeAttr('alt');
$('#contact img').attr('alt', 'location');

//  ----------------------------------- CSS in jQuery ------------------------------------ //
// chaining
$('#social-nav').css('top', '-120px').css('left', '55px');

// w/o chaining
$('#social-nav').css({
  width: '40px',
  border: '3px solid #427aa1'
});

//  ------------------------------- Manipulating Classes --------------------------------- //
$('header .wrapper').removeClass('wrapper');
$('header > div').addClass('wrapper');

const button = $('.wrapper-button');
button[0].onclick = () => {
  $('#points-of-sale').toggleClass('close');
  return false;
};

//  ----------------------------------- Events ------------------------------------ //
const myLis = $('#points-of-sale li');

// event
myLis.on('click', function () {
  $(this).css({ background: '#ffd500' });

  myLis.off('click');
});

// event helper
myLis.click(function () {
  $(this).css({ transform: 'scale(1.1)' });

  myLis.off('click');
});

// document onready/window load
$(document).on('ready', function () {
  console.log('document is ready');
});
$(window).on('load', function () {
  console.log('window loaded');
});

// event object
$('*').on('click', function (e) {
  console.log(e.target);
  console.log(`The event type is: ${e.type}`);
  console.log(`The X co-ordinate of event is: ${e.pageX}`);
  console.log(`The Y co-ordinate of event is: ${e.pageY}`);
  e.stopPropagation();
});

//  ------------------------------------ Animations ------------------------------------- //
// animate
$('#tweets > h2').on('click', function () {
  // can only be used with numeric parameters
  $(this).animate({ width: '500px' }, 1000, 'linear', function () {
    console.log('animation complete');
  });

  $(this).fadeOut(1000).fadeIn();
  $(this).fadeTo(1000, 0.5).fadeTo(1000, 1);
});

// hide/show/toggle
$('#clients > h2').on('click', function () {
  // can only be used with numeric parameters
  $(this).hide(1000);
  $(this).toggle(1000);
});

// slide
$('.slide-up').on('click', function () {
  $('#lead-banner').slideUp(100);
});
$('.slide-down').on('click', function () {
  $('#lead-banner').slideToggle(1000, console.log('sliding complete'));
});

//  -------------------------------------- Plugins -------------------------------------- //
$('.rslides').responsiveSlides();
