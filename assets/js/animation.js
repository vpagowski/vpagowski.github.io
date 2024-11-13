document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    var greetingText = document.querySelector('.greeting-text');
    greetingText.classList.add('visible');
  }, 500);
});
