function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");

  if (name === "" || phno === "") {
    error.textContent = "Please fill in all the fields before continuing.";
  } else {
    error.textContent = "";
    // Proceed with form submission or next step
    alert("Form submitted successfully!");
  }
}
