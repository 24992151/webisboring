// Toggle Navigation Visibility
document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('nav-open');
});

// Supercars Hover Mapping Content
function showInfo(info) {
  document.getElementById('hover-text').textContent = info;
  document.getElementById('hover-text').style.display = 'block';
}

function hideInfo() {
  document.getElementById('hover-text').textContent = '';
  document.getElementById('hover-text').style.display = 'none';
}

// Horizontal scrolling for main content
document.addEventListener('DOMContentLoaded', function () {
  var mainContent = document.getElementById('main-content');
  var scrollPosition = 0;

  mainContent.addEventListener('wheel', function (e) {
      if (!isWithinHeaderFooter(e.target)) {
          e.preventDefault();
          scrollPosition += e.deltaY;
          mainContent.scroll({
              top: 0,
              left: scrollPosition,
              behavior: 'smooth'
          });
      }
  });

  // Element Difference between header and footer
  function isWithinHeaderFooter(element) {
      var header = document.querySelector('header');
      var footer = document.querySelector('footer');

      while (element) {
          if (element === header || element === footer) {
              return true;
          }
          element = element.parentElement;
      }
      return false;
  }
});
