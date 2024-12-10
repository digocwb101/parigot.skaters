function pesquisar() {

    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value 

    if (!campoPesquisa) {
        section.innerHTML = "<p> digite algo para pesquisa</p>"
        return
    };
    
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo ="";
    let descricao = "";
    let tags = ";"


    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p>
                <a href=${dado.instagram} target="_blank">Instagram</a></p>
                <p>
                <a href=${dado.youtube} target="_blank">Youtube</a> </p>
            </div>
        `;

        }

        // Cria um novo elemento HTML para cada resultado
     
    }
if (!resultados) {
    resultados = "<p> Nada encontrado </p>";
}
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}