document.getElementById("registrationForm").addEventListener("submit", function(event) {
  let name = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();
  let age = document.getElementById("age").value;
  let photo = document.getElementById("photo").files[0];

  if (name.length < 3) {
    alert("Name must be at least 3 characters long");
    event.preventDefault();
    return;
  }

  if (!email.includes("@")) {
    alert("Please enter a valid email");
    event.preventDefault();
    return;
  }

  let phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    event.preventDefault();
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long");
    event.preventDefault();
    return;
  }

  if (age < 15 || age > 100) {
    alert("Age must be between 15 and 100");
    event.preventDefault();
    return;
  }

  if (photo && photo.size > 102400) { 
    alert("Photo size must not exceed 100 KB");
    event.preventDefault();
    return;
  }

  if (!document.getElementById("terms").checked) {
    alert("You must agree to the Terms & Conditions");
    event.preventDefault();
    return;
  }
});
