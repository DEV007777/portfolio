$(document).ready(function () {
  $('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const activeButton = document.querySelector('.buttons button.active');
  const activeContentId = activeButton.getAttribute('data-content-id');
  const activeContent = document.getElementById(activeContentId);

  if (activeContent) {
    activeContent.classList.add('active');
  }
});

function toggleContent(contentId, buttonId) {
  var contents = document.getElementsByClassName('content');
  var buttons = document.getElementsByClassName('buttons')[0].getElementsByTagName('button');

  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }

  for (var j = 0; j < buttons.length; j++) {
    buttons[j].classList.remove('active');
  }

  var content = document.getElementById(contentId);
  var button = document.getElementById(buttonId);
  if (content && button) {
    content.classList.add('active');
    button.classList.add('active');
  }
}



document.addEventListener('DOMContentLoaded', function () {
  var but = document.querySelector('.work  button.aactive');
  var actContentId = but.getAttribute('data-comp-id');
  var actContent = document.getElementById(actContentId);

  if (activeContent) {
    actContent.classList.add('aactive');
  }
});

function toggleConten(centId, bnId) {
  var conten = document.getElementsByClassName('comp');
  var butto = document.getElementsByClassName('work')[0].getElementsByTagName('button');

  for (var i = 0; i < conten.length; i++) {
    conten[i].classList.remove('aactive');
  }

  for (var j = 0; j < butto.length; j++) {
    butto[j].classList.remove('aactive');
  }

  var cot = document.getElementById(centId);
  var but = document.getElementById(bnId);
  if (cot && but) {
    cot.classList.add('aactive');
    but.classList.add('aactive');
  }
}



document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      const isActive = item.classList.contains('active');

      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.toggle-icon').textContent = '+';
      });

      if (!isActive) {
        item.classList.add('active');
        item.querySelector('.toggle-icon').textContent = '-';
      } else {
        item.querySelector('.toggle-icon').textContent = '+';
      }
    });
  });
});















