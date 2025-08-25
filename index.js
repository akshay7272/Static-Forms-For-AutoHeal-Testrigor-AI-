document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    document.getElementById("message").textContent = "Please fill out all fields.";
    document.getElementById("message").style.color = "red";
    return;
  }

  document.getElementById("message").textContent = "Signup successful!";
  document.getElementById("message").style.color = "green";

  document.getElementById("signupForm").reset();
});