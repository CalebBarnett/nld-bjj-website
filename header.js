// header.js
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById('site-header')) {
    const headerDiv = document.createElement('div');
    headerDiv.id = 'site-header';
    document.body.prepend(headerDiv);
  }

  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('site-header').innerHTML = data;
    })
    .catch(err => console.error('Error loading header:', err));
});
