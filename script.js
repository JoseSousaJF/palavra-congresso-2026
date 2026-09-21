const versiculos = [
    { texto: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.", ref: "Naum 1:7" },
    { texto: "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.", ref: "Jeremias 29:11" },
    { texto: "O Senhor é o meu pastor, nada me faltará.", ref: "Salmos 23:1" },
    { texto: "Posso todas as coisas naquele que me fortalece.", ref: "Filipenses 4:13" },
    { texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça.", ref: "Isaías 41:10" },
    { texto: "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho.", ref: "Salmos 119:105" },
    { texto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", ref: "Mateus 11:28" },
    { texto: "E sabemos que todas as coisas colaboram para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu decreto.", ref: "Romanos 8:28" },
    { texto: "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.", ref: "João 14:27" },
    { texto: "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e tenha misericórdia de ti.", ref: "Números 6:24-25" },
    { texto: "Busquei ao Senhor, e ele me respondeu; livrou-me de todos os meus temores.", ref: "Salmos 34:4" },
    { texto: "Mil cairão ao teu lado, e dez mil à tua direita, mas tu não serás atingido.", ref: "Salmos 91:7" },
    { texto: "Mas os que esperam no Senhor renovarão as forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão.", ref: "Isaías 40:31" },
    { texto: "O Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo.", ref: "Romanos 15:13" },
    { texto: "Deleita-te também no Senhor, e ele te concederá os desejos do teu coração.", ref: "Salmos 37:4" },
    { texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.", ref: "Salmos 37:5" },
    { texto: "O meu socorro vem do Senhor que fez o céu e a terra.", ref: "Salmos 121:2" },
    { texto: "Não se turbe o vosso coração; credes em Deus, crede também em mim.", ref: "João 14:1" },
    { texto: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", ref: "1 Pedro 5:7" },
    { texto: "Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.", ref: "2 Timóteo 1:7" },
    { texto: "Porque onde estiverem dois ou três reunidos em meu nome, aí estou eu no meio deles.", ref: "Mateus 18:20" },
    { texto: "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração.", ref: "Romanos 12:12" },
    { texto: "Confia no Senhor de todo o teu coração, e não te estribes no teu próprio entendimento.", ref: "Provérbios 3:5" },
    { texto: "Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.", ref: "Provérbios 3:6" },
    { texto: "Respondeu-lhe Jesus: Eu sou o caminho, e a verdade e a vida; ninguém vem ao Pai, senão por mim.", ref: "João 14:6" },
    { texto: "O amor é sofredor, é benigno; o amor não é invejoso; o amor não trata com levindade, não se ensoberbece.", ref: "1 Coríntios 13:4" },
    { texto: "Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores.", ref: "Romanos 5:8" },
    { texto: "Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados, e nos purificar de toda a injustiça.", ref: "1 João 1:9" },
    { texto: "O Senhor é a minha luz e a minha salvação; a quem temerei? O Senhor é a força da minha vida; de quem me recearei?", ref: "Salmos 27:1" },
    { texto: "Não mandei eu? Sê forte e corajoso; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares.", ref: "Josué 1:9" },
    { texto: "Graças a Deus pelo seu dom inefável.", ref: "2 Coríntios 9:15" },
    { texto: "Servi ao Senhor com alegria; e entrai diante dele com canto.", ref: "Salmos 100:2" },
    { texto: "Sabei que o Senhor é Deus; foi ele que nos fez, e não nós a nós mesmos; somos seu povo e ovelhas do seu pasto.", ref: "Salmos 100:3" },
    { texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", ref: "João 3:16" },
    { texto: "Pois que aproveita ao homem ganhar o mundo inteiro, se perder a sua alma?", ref: "Marcos 8:36" },
    { texto: "Buscai primeiro o reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.", ref: "Mateus 6:33" },
    { texto: "Portanto, não vos inquieteis pelo dia de amanhã, porque o dia de amanhã cuidará de si mesmo.", ref: "Mateus 6:34" },
    { texto: "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á.", ref: "Mateus 7:7" },
    { texto: "Porque todo o que pede, recebe; e o que busca, encontra; e, ao que bate, abrir-se-lhe-á.", ref: "Mateus 7:8" },
    { texto: "Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança.", ref: "Gálatas 5:22" },
    { texto: "Contra estas coisas não há lei.", ref: "Gálatas 5:23" },
    { texto: "Guardei a tua palavra no meu coração, para não pecar contra ti.", ref: "Salmos 119:11" },
    { texto: "Bendize, ó minha alma, ao Senhor, e tudo o que há em mim bendiga o seu santo nome.", ref: "Salmos 103:1" },
    { texto: "Bendize, ó minha alma, ao Senhor, e não te esqueças de nenhum dos seus benefícios.", ref: "Salmos 103:2" },
    { texto: "É ele quem perdoa todas as tuas iniqüidades, quem sara todas as tuas enfermidades.", ref: "Salmos 103:3" },
    { texto: "Quem redime a tua vida da cova, quem te coroa de benignidade e de misericórdia.", ref: "Salmos 103:4" },
    { texto: "A minha alma tem sede de Deus, do Deus vivo.", ref: "Salmos 42:2" },
    { texto: "Por que estás abatida, ó minha alma, e por que te perturbas em mim? Espera em Deus, pois ainda o louvarei pela salvação da sua face.", ref: "Salmos 42:5" },
    { texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", ref: "Salmos 46:1" },
    { texto: "Aquietai-vos, e sabei que eu sou Deus; serei exaltado entre os gentios; serei exaltado sobre a terra.", ref: "Salmos 46:10" },
    { texto: "O Senhor dos Exércitos está conosco; o Deus de Jacó é o nosso refúgio.", ref: "Salmos 46:11" },
    { texto: "Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.", ref: "Salmos 51:10" },
    { texto: "Não me lances fora da tua presença, e não retires de mim o teu Espírito Santo.", ref: "Salmos 51:11" },
    { texto: "Restitui-me a alegria da tua salvação, e sustenta-me com um espírito voluntário.", ref: "Salmos 51:12" },
    { texto: "Em Deus pus a minha confiança; não temerei o que me possa fazer o homem.", ref: "Salmos 56:11" },
    { texto: "Misericórdia, ó Deus, misericórdia, pois em ti a minha alma se refugia; à sombra das tuas asas me refugiarei.", ref: "Salmos 57:1" },
    { texto: "Só ele é a minha rocha e a minha salvação; é a minha defesa; não serei abalado.", ref: "Salmos 62:2" },
    { texto: "Em Deus está a minha salvação e a minha glória; a rocha do meu forte, e o meu refúgio estão em Deus.", ref: "Salmos 62:7" },
    { texto: "Porque a tua benignidade é melhor do que a vida, os meus lábios te louvarão.", ref: "Salmos 63:3" },
    { texto: "Deus seja misericordioso conosco e nos abençoe, e faça resplandecer o seu rosto sobre nós.", ref: "Salmos 67:1" },
    { texto: "Bendito seja o Senhor, que dia a dia leva as nossas cargas, o Deus que é a nossa salvação.", ref: "Salmos 68:19" },
    { texto: "Mas para mim, bom é aproximar-me de Deus; pus a minha confiança no Senhor Deus.", ref: "Salmos 73:28" },
    { texto: "Escuta, povo meu, a minha lei; inclinai os vossos ouvidos às palavras da minha boca.", ref: "Salmos 78:1" },
    { texto: "Quão amáveis são os teus tabernáculos, Senhor dos Exércitos!", ref: "Salmos 84:1" },
    { texto: "Porque vale mais um dia nos teus átrios do que mil em outra parte.", ref: "Salmos 84:10" },
    { texto: "Porque o Senhor Deus é um sol e escudo; o Senhor dará graça e glória.", ref: "Salmos 84:11" },
    { texto: "Senhor, tu tens sido o nosso refúgio, de geração em geração.", ref: "Salmos 90:1" },
    { texto: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.", ref: "Salmos 91:1" },
    { texto: "Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.", ref: "Salmos 91:2" },
    { texto: "Porque ele te livrará do laço do passarinheiro, e da peste perniciosa.", ref: "Salmos 91:3" },
    { texto: "Ele te cobrirá com as suas penas, e debaixo das suas asas te confiarás; a sua verdade será o teu escudo e broquel.", ref: "Salmos 91:4" },
    { texto: "Não terás medo do terror de noite nem da seta que voa de dia.", ref: "Salmos 91:5" },
    { texto: "Porque aos seus anjos dará ordem a teu respeito, para te guardarem em todos os teus caminhos.", ref: "Salmos 91:11" },
    { texto: "Eles te sustentarão nas suas mãos, para que não tropeces com o teu pé em pedra.", ref: "Salmos 91:12" },
    { texto: "Bom é louvar ao Senhor, e cantar louvores ao teu nome, ó Altíssimo.", ref: "Salmos 92:1" },
    { texto: "O Senhor reina; está vestido de majestade.", ref: "Salmos 93:1" },
    { texto: "Ó, vinde, adoremos e prostremo-nos; ajoelhemos diante do Senhor que nos fez.", ref: "Salmos 95:6" },
    { texto: "Cantai ao Senhor um canto novo, cantai ao Senhor toda a terra.", ref: "Salmos 96:1" },
    { texto: "O Senhor reina; regozije-se a terra; alegrem-se as muitas ilhas.", ref: "Salmos 97:1" },
    { texto: "Vós que amais ao Senhor, odiai o mal; ele guarda as almas dos seus santos.", ref: "Salmos 97:10" },
    { texto: "A luz semea-se para o justo, e a alegria para os retos de coração.", ref: "Salmos 97:11" },
    { texto: "Cantai ao Senhor um canto novo, porque ele fez maravilhas.", ref: "Salmos 98:1" },
    { texto: "Celebrai com júbilo ao Senhor, todas as terras.", ref: "Salmos 100:1" },
    { texto: "Entrai pelas portas dele com gratidão, e em seus átrios com louvor.", ref: "Salmos 100:4" },
    { texto: "Porque o Senhor é bom, e eterna a sua misericórdia; e a sua verdade dura de geração em geração.", ref: "Salmos 100:5" },
    { texto: "O Senhor cumpre os seus decretos; o seu reino domina sobre tudo.", ref: "Salmos 103:19" },
    { texto: "Louvai ao Senhor, porque ele é bom, porque a sua misericórdia dura para sempre.", ref: "Salmos 106:1" },
    { texto: "Rendei graças ao Senhor, porque ele é bom; porque a sua misericórdia dura para sempre.", ref: "Salmos 107:1" },
    { texto: "Preparado está o meu coração, ó Deus; cantarei e falarei louvores.", ref: "Salmos 108:1" },
    { texto: "Louvarei ao Senhor de todo o meu coração.", ref: "Salmos 111:1" },
    { texto: "Bem-aventurado o homem que teme ao Senhor, que em seus mandamentos tem grande prazer.", ref: "Salmos 112:1" },
    { texto: "Desde o nascimento do sol até ao seu ocaso, seja louvado o nome do Senhor.", ref: "Salmos 113:3" },
    { texto: "Amo ao Senhor, porque ele ouviu a minha voz e a minha súplica.", ref: "Salmos 116:1" },
    { texto: "Porque inclinou para mim o seu ouvido, portanto o invocarei enquanto viver.", ref: "Salmos 116:2" },
    { texto: "Que darei eu ao Senhor, por todos os benefícios que me tem feito?", ref: "Salmos 116:12" },
    { texto: "Tomarei o cálice da salvação, e invocarei o nome do Senhor.", ref: "Salmos 116:13" },
    { texto: "Louvai ao Senhor todas as nações, louvai-o todos os povos.", ref: "Salmos 117:1" },
    { texto: "Porque a sua benignidade é grande para conosco, e a verdade do Senhor dura para sempre.", ref: "Salmos 117:2" },
    { texto: "Este é o dia que fez o Senhor; regozijemo-nos, e alegremo-nos nele.", ref: "Salmos 118:24" },
    { texto: "Tu és o meu Deus, e eu te louvarei; tu és o meu Deus, e eu te exaltarei.", ref: "Salmos 118:28" }
];

let filaVersiculos = [];

function embaralhar(array) {
    let indiceAtual = array.length, valorTemporario, indiceAleatorio;
    while (0 !== indiceAtual) {
        indiceAleatorio = Math.floor(Math.random() * indiceAtual);
        indiceAtual -= 1;
        valorTemporario = array[indiceAtual];
        array[indiceAtual] = array[indiceAleatorio];
        array[indiceAleatorio] = valorTemporario;
    }
    return array;
}

function obterProximoVersiculo() {
    if (filaVersiculos.length === 0) {
        filaVersiculos = embaralhar([...versiculos]);
    }
    return filaVersiculos.pop();
}

function sortearVersiculo() {
    const card = document.querySelector('.card-versiculo');
    const elTexto = document.getElementById('texto-versiculo');
    const elRef = document.getElementById('ref-versiculo');

    if (card) card.classList.add('fade-out');

    setTimeout(() => {
        const versiculoSorteado = obterProximoVersiculo();
        elTexto.innerText = versiculoSorteado.texto;
        elRef.innerText = versiculoSorteado.ref;

        if (card) card.classList.remove('fade-out');
    }, 250);
}

function atualizarSaudacao() {
    const hora = new Date().getHours();
    const elSaudacao = document.getElementById('boas-vindas');
    if (!elSaudacao) return;

    if (hora >= 5 && hora < 12) {
        elSaudacao.textContent = "Bom dia! Seja bem-vindo ao nosso";
    } else if (hora >= 12 && hora < 18) {
        elSaudacao.textContent = "Boa tarde! Seja bem-vindo ao nosso";
    } else {
        elSaudacao.textContent = "Boa noite! Seja bem-vindo ao nosso";
    }
}

function configurarCopiaCard() {
    const card = document.getElementById('card-versiculo');
    const toast = document.getElementById('toast');

    if (card) {
        card.addEventListener('click', () => {
            const texto = document.getElementById('texto-versiculo').innerText;
            const ref = document.getElementById('ref-versiculo').innerText;
            const mensagem = `"${texto}" - ${ref}\n\nCongresso Unificado 2026`;

            navigator.clipboard.writeText(mensagem).then(() => {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Erro ao copiar: ', err);
            });
        });
    }
}

window.onload = function() {
    atualizarSaudacao();
    sortearVersiculo();
    configurarCopiaCard();
};
