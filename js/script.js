// Optional: Toggle menu (for mobile nav if implemented)
document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (toggle && navLinks) {
      toggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });
    }
  
    // Contact form validation
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const message = document.querySelector("#message");
  
        if (!name.value || !email.value || !message.value) {
          alert("Please fill in all fields before submitting.");
          e.preventDefault();
          return;
        }
  
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.value.match(emailPattern)) {
          alert("Please enter a valid email address.");
          e.preventDefault();
          return;
        }
  
        alert("Message sent! Thank you for contacting me.");
      });
    }
  });
  