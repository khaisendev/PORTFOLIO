// PROGRESS BAR

let progress = document.querySelectorAll('[data-progress]');

window.addEventListener('load', () => {
	progress.forEach(element => {
	let progress_width = +(element.getAttribute('data-progress'));
		
	if(progress_width > 100) {
		progress_width = 100;
	}
		element.style.width = progress_width + '%';
	})
})


// HEADER MENU

$(window).scroll(function() {
  if ($(this).scrollTop() > 1) { // измените значение на необходимое вам
    $('#navbar').addClass('scrolled');
  } else {
    $('#navbar').removeClass('scrolled');
  }
});
var prevScrollpos = window.pageYOffset;
$(window).scroll(function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $('#navbar').addClass('menu');
  } else {
    $('#navbar').removeClass('menu');
  }
  prevScrollpos = currentScrollPos;
});


var currentSection = 0;
window.addEventListener('scroll', function() {
  var scrollPosition = window.innerHeight + window.pageYOffset;
  var documentHeight = document.documentElement.offsetHeight;

  if (scrollPosition >= documentHeight) {
    var sections = document.querySelectorAll('.main__section');

    if (currentSection < sections.length) {
      sections[currentSection].classList.add('show');
      currentSection++;
    }
  }
});