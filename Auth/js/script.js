let Email = document.getElementById("email");
let Password = document.getElementById("password");
let btn = document.getElementsByClassName("btn")[0];

var users = [];
var ErrorPassword = document.getElementById("errorPass");
var Success = document.getElementById("success");

btn.addEventListener("click", function () {
  
  let EmailVal = Email.value.trim();
  let PasswordVal = Password.value.trim();

  if (PasswordVal.length < 9) {
    ErrorPassword.innerHTML = "It should be more than 8 characters";
    Password.value = "";
  } else {
    ErrorPassword.innerHTML = "";

    users.push({ Email: EmailVal, Password: PasswordVal });
    localStorage.setItem("users", JSON.stringify(users));

    Success.innerHTML = "Registered successfully ✅";
    Email.value = "";
    Password.value = "";

    window.location.href = "login.html";
  }
});
