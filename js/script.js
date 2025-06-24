// alert login
let login_form = document.getElementById("form_login");
let alert_login = document.getElementById("alert-login");
let cancel_btn_login = document.getElementById("btn_cancel-login")

login_form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert_login.style.display = "block";
    cancel_btn_login.click();
    setTimeout(function() {
        alert_login.style.display = "none";
    }, 4000);
})

// alert cadastro
let cadastro_form = document.getElementById("form_cadastro");
let alert_cadastro = document.getElementById("alert-cadastro");
let cancel_btn_cadastro = document.getElementById("btn_cancel-cadastro")

cadastro_form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert_cadastro.style.display = "block";
    cancel_btn_cadastro.click();
    setTimeout(function() {
        alert_cadastro.style.display = "none";
    }, 4000);
})