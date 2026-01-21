// header.js
document.addEventListener("DOMContentLoaded", () => {
  if (!document.getElementById("site-header")) {
    const header = document.createElement("header");
    header.id = "site-header";
    document.body.prepend(header);
  }

  fetch("header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;

      // 🔑 Initialize dropdown AFTER header loads
      initDropdown();
    })
    .catch(err => console.error("Header load error:", err));
});
