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
