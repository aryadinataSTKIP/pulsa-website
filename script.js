document.getElementById("pulsaForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let phone = document.getElementById("phone").value;
    let nominal = document.getElementById("nominal").value;

    // Construct Anggichanger API URL (example format)
    let url = `https://anggichanger.com/api/buy?phone=${phone}&amount=${nominal}`;

    // Redirect user to Anggichanger for payment
    window.location.href = url;
});
