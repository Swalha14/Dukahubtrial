// JS/script.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active-link");
    }
  });

  // Handle all forms with class dukahub-form
  const forms = document.querySelectorAll(".dukahub-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      let valid = true;
      let messages = [];

      // Email check
      const emailInput = form.querySelector("input[type='email']");
      if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        valid = false;
        messages.push("Please enter a valid email address.");
      }

      // Password check
      const passwordInput = form.querySelector("input[name='password']");
      if (passwordInput && passwordInput.value.length < 6) {
        valid = false;
        messages.push("Password must be at least 6 characters.");
      }

      // Confirm password check (signup only)
      const confirmPassword = form.querySelector("input[name='confirm_password']");
      if (confirmPassword && passwordInput && confirmPassword.value !== passwordInput.value) {
        valid = false;
        messages.push("Passwords do not match.");
      }

      // If invalid, stop submit & show alert
      if (!valid) {
        e.preventDefault();
        alert(messages.join("\n"));
      }
    });
  });
});
