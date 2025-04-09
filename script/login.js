document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    // Get or create alert container
    let alertContainer = document.getElementById("alert-container");
    if (!alertContainer) {
      alertContainer = document.createElement("div");
      alertContainer.id = "alert-container";
      alertContainer.classList.add("fixed", "top-5", "right-5", "w-80");
      document.body.appendChild(alertContainer);
    }

    // Clear previous alerts
    alertContainer.innerHTML = "";

    if (username === "" || password === "") {
      showAlert("⚠️ Please fill in all fields.", "alert-warning");
      return;
    }

    if (username === "user@example.com" && password === "Test@1234") {
      showAlert("✅ Login Successful!", "alert-success");
      setTimeout(() => {
        window.location.href = "main.html"; // Redirect to main page after 1.5 seconds
      }, 1500);
    } else {
      showAlert("❌ Invalid Username or Password!", "alert-error");
    }
  });

// Function to show alert
function showAlert(message, type) {
  const alertContainer = document.getElementById("alert-container");

  const alertDiv = document.createElement("div");
  alertDiv.className = `alert ${type} flex items-center p-4 mb-2 shadow-lg`;
  alertDiv.innerHTML = `
        <span>${message}</span>
    `;

  alertContainer.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.remove();
  }, 3000);
}
