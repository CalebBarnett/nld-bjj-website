// scripts.js
document.addEventListener("click", (e) => {
  const toggle = e.target.closest(".dropdown-toggle");
  const dropdown = e.target.closest(".dropdown");

  // If clicking the toggle
  if (toggle && dropdown) {
    e.preventDefault();

    const isOpen = dropdown.classList.contains("open");

    // Close all other dropdowns
    document.querySelectorAll(".dropdown.open").forEach(d => {
      d.classList.remove("open");
      const btn = d.querySelector(".dropdown-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });

    // Toggle current
    dropdown.classList.toggle("open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    return;
  }

  // Clicked elsewhere → close all dropdowns
  document.querySelectorAll(".dropdown.open").forEach(d => {
    d.classList.remove("open");
    const btn = d.querySelector(".dropdown-toggle");
    if (btn) btn.setAttribute("aria-expanded", "false");
  });
});
