let index_cards = document.getElementById("index_cards");
let index_objetivos = document.getElementById("index_objetivos");
let index_opinioes = document.getElementById("index_opinioes");

function dinamicIndex(){
    index_cards.innerHTML = ""
    index_objetivos.innerHTML = ''
    index_opinioes.innerHTML = ``
    
    for (let i = 0; i < 4; i++) {
        index_cards.innerHTML += `
            <div class="col-lg-3 col-md-6 mb-3">
                <div class="card">
                    <img src="${catalogoFilmesSeries[i].imagem} alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${catalogoFilmesSeries[i].titulo}</h5>
                        <p class="card-text">${catalogoFilmesSeries[i].sinopse}</p>
                        <a href="./view/${i%2==0?'viagem_nacional.html':'viagem_internacional.html'}" class="btn" id="btndescobrir">Descobrir</a>
                    </div>
                </div>
            </div>
        `
    }
    for (let i = 0; i < 3; i++) {
        index_objetivos.innerHTML += `
            <div class="feature col">
                <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                    <i class="bi bi-leaf iconeobjetivo"></i>
                </div>
                <h3 class="fs-2">${poemas[i].titulo}</h3>
                <p>${poemas[i+1].texto}</p>
            </div>    
        `

        index_opinioes.innerHTML += `
            <div class="col-lg-4 col-12 mb-2">
                <div class="opinionbody">
                    <div class="d-flex gap-4 align-items-center">
                        <figure><img src="img/profile/profile${i+1}.jpg" alt=""></figure>
                        <div class="d-flex flex-column">
                            <span>${frasesMotivacionais[i].autor}</span>
                            <div class="text-warning">
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                                <i class="bi bi-star-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p>${frasesMotivacionais[i].frase}</p>
                    </div>
                </div>
            </div>
        `
    }
}

dinamicIndex();