document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let email = emailInput.value.trim();
  let password = passwordInput.value.trim();

  let errorCred = document.getElementById("errorCred");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.length === 0) {
    errorCred.innerHTML = "No users found. Please register first.";
    return;
  }

  let found = users.find(
    (user) => user.Email === email && user.Password === password
  );

  if (found) {
    localStorage.setItem("loggedIn", "true");
    window.location.replace("Project/table.html");
  } else {
    emailInput.value = "";
    passwordInput.value = "";
    errorCred.innerHTML = "This credentials is not matched";
  }
});
