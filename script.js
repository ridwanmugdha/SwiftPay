// Handle form submission
document
  .getElementById("transferForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const recipient = document.querySelector("select").value;
    const amount = document.getElementById("amount").value;

    // Validate
    if (!recipient || recipient === "Select recipient") {
      alert("Please select a recipient");
      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    // Update modal with transaction details
    document.getElementById("modalAmount").textContent =
      "$" + parseFloat(amount).toFixed(2);
    document.getElementById("modalRecipient").textContent = recipient;

    // Show success modal
    document.getElementById("successModal").classList.remove("hidden");

    // Reset form
    this.reset();
  });

// Close modal
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("successModal").classList.add("hidden");
});

// Close modal when clicking outside
document.getElementById("successModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.add("hidden");
  }
});

// Format amount input
document.getElementById("amount").addEventListener("blur", function () {
  if (this.value) {
    this.value = parseFloat(this.value).toFixed(2);
  }
});
