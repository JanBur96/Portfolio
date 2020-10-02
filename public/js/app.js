// Get the elements
let upButton = document.querySelector('.button-up');

// Scroll to top button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    upButton.style.display = 'block';
  } else {
    upButton.style.display = 'none';
  }
}

upButton.addEventListener('click', topFunction);

function topFunction() {
  document.documentElement.scrollTop = 0;
}
