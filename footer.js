// footer.js
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById('site-footer')) {
    const footerDiv = document.createElement('footer');
    footerDiv.id = 'site-footer';
    document.body.appendChild(footerDiv);
  }

  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('site-footer').innerHTML = data;
    })
    .catch(err => console.error('Error loading footer:', err));
});
