const versiculos = [
    { texto: "Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração.", referencia: "Jeremias 29:13" },
    { texto: "Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e firmes, que não sabes.", referencia: "Jeremias 33:3" },
    { texto: "Pedis e recebereis, para que a vossa alegria seja completa.", referencia: "João 16:24" },
    { texto: "O Senhor está perto de todos os que o invocam, de todos os que o invocam em verdade.", referencia: "Salmos 145:18" },
    { texto: "Pedi, e dar-se-vos-á; buscai e encontrareis; batei, e abrir-se-vos-á.", referencia: "Mateus 7:7" },
    { texto: "Porque o Senhor vosso Deus é o Deus dos deuses e o Senhor dos senhores.", referencia: "Deuteronômio 10:17" },
    { texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", referencia: "Salmos 46:1" }
];

let filaVersiculos = [];

function embaralhar(array) {
    let atual = array.length, valorTemporario, indiceAleatorio;
    let copia = [...array];

    while (0 !== atual) {
        indiceAleatorio = Math.floor(Math.random() * atual);
        atual -= 1;
        valorTemporario = copia[atual];
        copia[atual] = copia[indiceAleatorio];
        copia[indiceAleatorio] = valorTemporario;
    }
    return copia;
}

function sortearVersiculo() {
    const card = document.querySelector('.card-versiculo');
    card.classList.add('fade-out');

    setTimeout(() => {
        if (filaVersiculos.length === 0) {
            filaVersiculos = embaralhar(versiculos);
        }

        const versiculoSorteado = filaVersiculos.pop();

        document.getElementById('texto-versiculo').innerText = versiculoSorteado.texto;
        document.getElementById('ref-versiculo').innerText = versiculoSorteado.referencia;

        card.classList.remove('fade-out');
    }, 300);
}

window.onload = sortearVersiculo;
