var SITE_OFICIAL = "https://www.jonatastbelotti.com";

redirecionarSiteOficial();

function redirecionarSiteOficial() {
    var url = location.href;

    if (url.startsWith("file")) {
        return;
    }

    if (url.indexOf(SITE_OFICIAL) < 0) {
        window.location.replace(SITE_OFICIAL);
    }
}