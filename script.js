document.getElementById("pulsaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let phone = document.getElementById("phone").value.trim();
    let nominal = document.getElementById("nominal").value;

    if (!phone || !nominal) {
        alert("Please enter a phone number and select an amount.");
        return;
    }

    // Construct Anggichanger API URL (example format)
    let url = `https://anggichanger.com/api/buy?phone=${encodeURIComponent(phone)}&amount=${encodeURIComponent(nominal)}`;

    // Redirect user to Anggichanger for payment
    window.location.href = url;
});
