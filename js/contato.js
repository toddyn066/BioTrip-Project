let btn_form = document.getElementById("enviar");
let alert = document.getElementById("alert");
let form = document.getElementById("divformulario");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
    form.reset();
    enviarAlert();
});

function enviarAlert(){
    alert.style.display = "block";
    setTimeout(function() {
        alert.style.display = "none";
    }, 4000);
}