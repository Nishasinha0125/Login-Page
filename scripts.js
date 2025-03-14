let loginBtn = document.getElementById("loginBtn");
let signupBtn = document.getElementById("signupBtn");
let title = document.getElementById("title");
let nameField = document.getElementById("nameField");

signupBtn.onclick = function() {
    nameField.style.display = "block";
    title.innerText = "Signup";
    signupBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
};

loginBtn.onclick = function() {
    nameField.style.display = "none";
    title.innerText = "Login";
    signupBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
};