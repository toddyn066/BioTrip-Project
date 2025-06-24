let duvidas = document.getElementById("accordionFlushExample");
let perguntas = ["Quais as formas de pagamento aceitas?", "Qual a política de cancelamento e reembolso?", "Tem uma idade mínima para participar das viagens?", "O que está incluso no valor do passeio?", "Posso levar meu pet nas viagens?", "Há sinal de celular ou wi-fi no local das viagens?"]

function dinamicDuvidas(){
    duvidas.innerHTML = "";

    for (let i = 0; i < perguntas.length; i++) {
        duvidas.innerHTML += `
            <div class="accordion-item border border-success divaccordion">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapse${i}" aria-expanded="false" aria-controls="flush-collapse${i}">
                        ${perguntas[i]}
                    </button>
                </h2>
                <div id="flush-collapse${i}" class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">${artigos[i].paragrafo01}</div>
                </div>
            </div>
        `
    }
}

dinamicDuvidas();