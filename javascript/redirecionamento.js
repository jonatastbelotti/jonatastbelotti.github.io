var SITE_OFICIAL = "jonatastbelotti.com";

redirecionarSiteOficial();

function redirecionarSiteOficial() {
    var url = location.href;

    if (url.indexOf(SITE_OFICIAL) < 0) {
        window.location.replace("http://www." + SITE_OFICIAL);
    }
}