let termos = document.querySelector('#termos');

function dinamicTermos() {
    termos.innerHTML = ''
    for (let i = 0; i < 8; i++) {
        termos.innerHTML += `
                <h2 class="tw-semibold mt-5 cor1">${i + 1}. ${artigos[i].titulo}</h2>
                <p>${artigos[i].paragrafo01}</p>
                <p>${artigos[i].paragrafo02}</p>
                <p>${artigos[i].paragrafo03}</p>
        `;
    }

    
}

dinamicTermos();