// Part 1: Event Handling
document.getElementById("toggleMessageBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.classList.toggle("hidden");
});

// Part 2: Interactive Elements
// Light/Dark mode toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});

// Part 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  // Clear old errors
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
  document.getElementById("formSuccess").textContent = "";

  let isValid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name.length < 2) {
    document.getElementById("nameError").textContent = "Name must be at least 2 characters.";
    isValid = false;
  }

  // Email validation (simple regex)
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Enter a valid email.";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Show success message
  if (isValid) {
    document.getElementById("formSuccess").textContent = "Form submitted successfully ✅";
  }
});
