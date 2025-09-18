var employees = JSON.parse(localStorage.getItem("employees")) || [];

let i = 1;

let data = employees.map((e) => [
  i++,
  e.name,
  e.email,
  e.phone,
  e.department,
  e.job,
  e.salary,
  `<button class="btn btn-sm btn-danger delete-btn">Delete</button>`
]);

var table = new DataTable("#example", {
  responsive: true,
  dom: '<"d-md-flex mt-md-2 justify-content-between align-items-center mb-3"Bf>rt<"d-md-flex mt-md-2 justify-content-between mt-3"lip>',
  buttons: [
    { extend: "copy", className: "btn btn-success p-2 btn-sm" },
    { extend: "csv", className: "btn btn-warning btn-sm" },
    { extend: "excel", className: "btn btn-primary btn-sm" },
    { extend: "pdf", className: "btn btn-danger btn-sm" },
    { extend: "print", className: "btn btn-info btn-sm" }
  ],
  data: data
});

// Delete Item

document.querySelector("#example").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    let confirmDelete = confirm("Do you want to delete this item?");

    if (confirmDelete) {
      let row = e.target.closest("tr");
      let rowData = table.row(row).data();

      let email = rowData[2];

      employees = employees.filter((emp) => emp.email !== email);
      localStorage.setItem("employees", JSON.stringify(employees));

      table.row(row).remove().draw();

      alert("✅ Item deleted successfully!");
    }
  }
});
