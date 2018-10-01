var listaTraducoes = [
    {cod: "pt-br", nome: "Potuguês", arquivo: "pt-br.json"}
];

//Definindo Português como lingua padrão
var lingua = listaTraducoes[0].cod;


/**
 * Função que carrega o arquivo JSON com a tradução do site
 */
function carregarTextos() {
    $.getJSON("js/traducoes/" + getNomeArquivo(lingua))
    .done(function(json){
        traduzirSite(json);
    })
    .fail(function(jqxhr, textStatus, error){
        lingua = listaTraducoes[0].cod;
        carregarTextos();
    });
}

/**
 * Função que traduz todos os textos do site
 * @param {Objeto com todos os textos traduzidos} traducao 
 */
function traduzirSite(traducao) {
    var vetCampos;

    traducao.textos.forEach(element => {
        vetCampos = document.querySelectorAll("[texto=" + element.cod + "]");

        if (vetCampos) {
            vetCampos[0].innerHTML = element.texto;
        }                
    });
}


/**
 * Função que devolve o nome do arquivo JSON que contem a tradução do site em uma lingua
 * @param {Código da lingua} cod 
 */
function getNomeArquivo(cod) {
    for (i = 0; i < listaTraducoes.length; i++) {
        if (cod == listaTraducoes[i].cod) {
            return listaTraducoes[i].arquivo;
        }
    }

    return "vazio";
}