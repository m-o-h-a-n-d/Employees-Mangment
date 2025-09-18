// User Info
var fullName = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var address = document.getElementById("address");
var department = document.getElementById("department");
var job = document.getElementById("job_title");
var salary = document.getElementById("salary");

var form = document.getElementsByTagName("form")[0];
var tableBody = document.getElementById("employeeTableBody"); // tbody للعرض

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const employee = {
    name: fullName.value,
    email: email.value,
    phone: phone.value,
    address: address.value,
    department: department.value,
    job: job.value,
    salary: salary.value
  };

  let employees = JSON.parse(localStorage.getItem("employees")) || [];

  let checkEmail = employees.some((emp) => emp.email === employee.email);
  let checkPhone = employees.some((emp) => emp.phone === employee.phone);

  let oldErrors = document.querySelectorAll(".error-msg");
  oldErrors.forEach((err) => err.remove());

  var hasError = false;
  if (checkEmail) {
    var error = document.createElement("span");
    error.classList.add("error-msg");
    error.style.color = "red";
    error.textContent = "This email already exists!";
    email.insertAdjacentElement("afterend", error);
    hasError = true;
  }

  if (checkPhone) {
    var error = document.createElement("span");
    error.classList.add("error-msg");
    error.style.color = "red";
    error.textContent = "This phone already exists!";
    phone.insertAdjacentElement("afterend", error);
    hasError = true;
  }
  if (hasError) {
    return;
  }

  employees.unshift(employee);
  localStorage.setItem("employees", JSON.stringify(employees));
  alert("✅ The Employee is Saved!");

  
  this.reset();
});
