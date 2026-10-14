const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerText = "🌙 Dark Mode";
    } else {
        themeBtn.innerText = "☀️ Light Mode";
    }
});