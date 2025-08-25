// Handle Sign Up Form
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (!name || !email || !password) {
    message.textContent = "Please fill out all fields.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Signup successful!";
  message.style.color = "green";
  document.getElementById("signupForm").reset();
});

// Handle Registration Form
// document.getElementById("registrationForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//   const username = document.getElementById("username").value.trim();
//   const regEmail = document.getElementById("regEmail").value.trim();
//   const regPassword = document.getElementById("regPassword").value;
//   const confirmPassword = document.getElementById("confirmPassword").value;
//   const regMessage = document.getElementById("regMessage");

//   if (!username || !regEmail || !regPassword || !confirmPassword) {
//     regMessage.textContent = "Please complete all fields.";
//     regMessage.style.color = "red";
//     return;
//   }

//   if (regPassword !== confirmPassword) {
//     regMessage.textContent = "Passwords do not match.";
//     regMessage.style.color = "red";
//     return;
//   }

//   regMessage.textContent = "Registration successful!";
//   regMessage.style.color = "green";
//   document.getElementById("registrationForm").reset();
// });
