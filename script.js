let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("input[type='text']");
let dados = [];

// Função para carregar os dados do JSON e renderizar todos os cards inicialmente
async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados);
}

// Função principal de busca, chamada pelo botão
function iniciarBusca() {
    const termoBusca = campoBusca.value.toLowerCase();
    const resultados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca)
    );
    renderizarCards(resultados);
}

function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa o container antes de renderizar os novos cards
    for (let dado of dados) {
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p>${dado.data_criacao}</p>
        <p>${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Saiba Mais</a>
        `;
        cardContainer.appendChild(article);
    }
}

// Carrega os dados assim que o script é executado
carregarDados();
