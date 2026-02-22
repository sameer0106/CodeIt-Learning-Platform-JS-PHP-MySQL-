// Retrieve stored username and password
const storedUsername = localStorage.getItem("username") || "Sameer";
const storedPassword = localStorage.getItem("password") || "che123";

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === storedUsername && password === storedPassword) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("error-message").innerText =
            "Invalid username or password. Please try again.";
    }
});
