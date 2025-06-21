let viagemNac = document.getElementById("viagensNacionais");

function dinamicViagemNac() {
    for (let i = 0; i < 10; i++) {
        const article = document.createElement("article");
        if (i % 2 === 0) {
            article.innerHTML += `
                    <div class="container">
                        <div class="row justify-content-evenly py-5">
                            <figure class="col-12 col-lg-4">
                                <img src="${galeriaFotos[i].imagem}" class="img-fluid rounded mb-3" alt="Destino 1">
                            </figure>
                            <section class="col-12 col-lg-7 d-flex flex-column justify-content-center text-start">
                                <h3 class="mb-3">${galeriaFotos[i].titulo}</h3>
                                <h4>${galeriaFotos[i].localizacao}</h4>
                                <p class="mt-4">${artigos[i].paragrafo01}</p>
                            </section>
                        </div>
                    </div>
            `;
        } else if (i % 2) {
            article.innerHTML += `
                    <div class="container">
                        <div class="row justify-content-evenly py-5">
                            <section class="col-12 col-lg-7 d-flex flex-column justify-content-center text-end">
                                <h3 class="mb-3">${galeriaFotos[i].titulo}</h3>
                                <h4>${galeriaFotos[i].localizacao}</h4>
                                <p class="mt-4">${artigos[i].paragrafo01}</p>
                            </section>
                            <figure class="col-12 col-lg-4">
                                <img src="${galeriaFotos[i].imagem}" class="img-fluid rounded mb-3" alt="Destino 1">
                            </figure>
                        </div>
                    </div>
            `;
            if (i === 9) {
                article.style.borderBottom = "none";
            }
        } 

        if (Math.floor(i / 2) % 3 === 0) {
            article.classList.add("bg-1");
        } else if (Math.floor(i / 3) % 3 === 1) {
            article.classList.add("bg-2");
        } else {
            article.classList.add("bg-3");
        }

        viagemNac.appendChild(article);
    }
}

dinamicViagemNac();