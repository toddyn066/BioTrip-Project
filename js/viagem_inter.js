let nav_list = document.getElementById('nav-list');
let intro_text = document.getElementById('intro-text');
let inter_list = document.getElementById('viagem_inter-list');
let final_text = document.querySelector('.final-text');

function dinamicViagemInter() {
    nav_list.innerHTML = '<a class="nav-link" href="#carouselExampleSlidesOnly">Início</a>'
    intro_text.innerHTML = '<h2 class="fw-semibold text-center py-3">Conheça o Ecoturismo ao Redor do Mundo!</h2>';
    inter_list.innerHTML = ""
    final_text.innerHTML = `<p class="fs-6">&emsp;${artigos[artigos.length - 1].paragrafo01 + " " + artigos[artigos.length - 2].paragrafo01}</p><ul></ul>`

    for (let i = 0; i < 2; i++) {
        intro_text.innerHTML += `<p class="fs-6">&emsp;${noticias[i].resumo}</p>`;
    }
    for (let i = 0; i < 6; i++) {
        nav_list.innerHTML += `<a class="nav-link" href="#item${i}">${galeriaFotos[i].localizacao}</a>`;
        inter_list.innerHTML += `
            <section class="row justify-content-evenly my-5" >
                <h4 class="col-12" id="item${i}">- ${galeriaFotos[i].localizacao} - R$${Math.floor(Math.random() * 10001)},00</h4>
                <div class="text col-12">
                    <p class="fs-6">
                        &emsp;${artigos[i].paragrafo02}
                    </p>    
                    <p class="fs-6">
                        &emsp;${artigos[i].paragrafo03}
                    </p>    
                </div>
                <figure class="col-12 col-md-5 rounded-3 my-5">
                    <img src="${galeriaFotos[i].imagem}" alt="${galeriaFotos[i].descricao}" class="rounded-3 img-inter">
                    <figcaption class="figure-caption text-center">${galeriaFotos[i].data}</figcaption>
                </figure>
                <figure class="col-12 col-md-5 rounded-3 my-5">
                    <img src="${noticias[i].imagem}" alt="${galeriaFotos[i].descricao}" class="rounded-3 img-inter">
                    <figcaption class="figure-caption text-center">${noticias[i].dataPublicacao}</figcaption>
                </figure>
            </section>
            <hr class="py-5" />
        `
    }
    nav_list.innerHTML += `<a class="nav-link" href="#final">ALguns outros lugares</a>`;
   
    for (let i = 6; i < 13; i++) {
        final_text.lastChild.innerHTML += `
            <li class="fs-6 ps-4 mt-1">${galeriaFotos[i].localizacao}</li>
        `;
    }

}

dinamicViagemInter();