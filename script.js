const versiculos = [
    { texto: "Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração.", referencia: "Jeremias 29:13" },
    { texto: "Clama a mim, e responder-te-ei e anunciar-te-ei coisas grandes e firmes, que não sabes.", referencia: "Jeremias 33:3" },
    { texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.", referencia: "Salmos 46:1" },
    { texto: "Tudo posso naquele que me fortalece.", referencia: "Filipenses 4:13" },
    { texto: "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus.", referencia: "Isaías 41:10" },
    { texto: "O Senhor é o meu pastor; nada me faltará.", referencia: "Salmos 23:1" },
    { texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.", referencia: "João 3:16" },
    { texto: "Pedi, e dar-se-vos-á; buscai e encontrareis; batei, e abrir-se-vos-á.", referencia: "Mateus 7:7" },
    { texto: "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.", referencia: "Romanos 8:28" },
    { texto: "Elevo os olhos para os montes: de onde me virá o socorro? O meu socorro vem do Senhor, que fez o céu e a terra.", referencia: "Salmos 121:1-2" },
    { texto: "Confie no Senhor de todo o seu coração e não se apoie em seu próprio entendimento.", referencia: "Provérbios 3:5" },
    { texto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.", referencia: "Mateus 11:28" },
    { texto: "Os que esperam no Senhor renovarão as suas forças e voarão alto como águias.", referencia: "Isaías 40:31" },
    { texto: "O Senhor é a minha luz e a minha salvação; de quem terei medo?", referencia: "Salmos 27:1" },
    { texto: "Sê forte e corajoso; não temas, nem te espantes, porque o Senhor teu Deus é contigo por onde quer que andares.", referencia: "Josué 1:9" },
    { texto: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.", referencia: "2 Coríntios 12:9" },
    { texto: "Eu sou o caminho, a verdade e a vida; ninguém vem ao Pai senão por mim.", referencia: "João 14:6" },
    { texto: "Entrega o teu caminho ao Senhor; confia nele, e ele o fará.", referencia: "Salmos 37:5" },
    { texto: "Não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento.", referencia: "Romanos 12:2" },
    { texto: "Aquele que habita no esconderijo do Altíssimo, à sombra do Onipotente descansará.", referencia: "Salmos 91:1" },
    { texto: "No mundo tereis aflições, mas tende bom ânimo; eu venci o mundo.", referencia: "João 16:33" },
    { texto: "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.", referencia: "1 Pedro 5:7" },
    { texto: "Lâmpada para os meus pés é tua palavra e luz, para o meu caminho.", referencia: "Salmos 119:105" },
    { texto: "Já não sou eu quem vive, mas Cristo vive em mim.", referencia: "Gálatas 2:20" },
    { texto: "Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que não se vêem.", referencia: "Hebreus 11:1" },
    { texto: "Porque pela graça sois salvos, por meio da fé; e isso não vem de vós, é dom de Deus.", referencia: "Efésios 2:8" },
    { texto: "Se o meu povo, que se chama pelo meu nome, se humilhar, e orar, e buscar a minha face, eu ouvirei dos céus.", referencia: "2 Crônicas 7:14" },
    { texto: "As misericórdias do Senhor são a causa de não sermos consumidos; renovam-se cada manhã.", referencia: "Lamentações 3:22-23" },
    { texto: "Não estejais inquietos por coisa alguma; antes, as vossas petições sejam conhecidas diante de Deus pela oração.", referencia: "Filipenses 4:6" },
    { texto: "Provai e vede que o Senhor é bom; bem-aventurado o homem que nele confia.", referencia: "Salmos 34:8" },
    { texto: "Tu conservarás em paz aquele cuja mente está firme em ti; porque ele confia em ti.", referencia: "Isaías 26:3" },
    { texto: "Bendize, ó minha alma, ao Senhor, e não te esquecasa de nenhum de seus benefícios.", referencia: "Salmos 103:2" },
    { texto: "O Deus da esperança vos encha de todo o gozo e paz no vosso crer.", referencia: "Romanos 15:13" },
    { texto: "Graças te dou, visto que por modo assombrosamente maravilhoso me formaste.", referencia: "Salmos 139:14" },
    { texto: "Se algum de vós tem falta de sabedoria, peça-a a Deus, que a todos dá livremente.", referencia: "Tiago 1:5" },
    { texto: "Esperei com paciência no Senhor, e ele se inclinou para mim e ouviu o meu clamor.", referencia: "Salmos 40:1" },
    { texto: "Confia ao Senhor as tuas obras, e os teus pensamentos serão estabelecidos.", referencia: "Provérbios 16:3" },
    { texto: "Nós amamos porque ele nos amou primeiro.", referencia: "1 João 4:19" },
    { texto: "Tu me farás ver a vereda da vida; na tua presença há plenitude de alegria.", referencia: "Salmos 16:11" },
    { texto: "Tudo o que fizerem, façam de todo o coração, como para o Senhor e não para homens.", referencia: "Colossenses 3:23" },
    { texto: "Este é o dia que fez o Senhor; regozijemo-nos e alegremo-nos nele.", referencia: "Salmos 118:24" },
    { texto: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.", referencia: "Isaías 55:6" },
    { texto: "Cria em mim, ó Deus, um coração puro e renova dentro de mim um espírito inabalável.", referencia: "Salmos 51:10" },
    { texto: "Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.", referencia: "João 8:12" },
    { texto: "Pois um dia nos teus átrios vale mais que mil em outra parte.", referencia: "Salmos 84:10" },
    { texto: "Buscai primeiro o Reino de Deus e a sua justiça, e todas estas coisas vos serão acrescentadas.", referencia: "Mateus 6:33" },
    { texto: "O choro pode durar uma noite, mas a alegria vem pela manhã.", referencia: "Salmos 30:5" },
    { texto: "O Senhor teu Deus está no meio de ti, poderoso para te salvar; ele se deleitará em ti com alegria.", referencia: "Sofonias 3:17" },
    { texto: "Agora, pois, permanecem a fé, a esperança e o amor; mas o maior destes é o amor.", referencia: "1 Coríntios 13:13" },
    { texto: "Sede fortes e corajosos; não temais, pois o Senhor vosso Deus é quem vai convosco; não vos deixará.", referencia: "Deuteronômio 31:6" },
    { texto: "O Senhor está perto de todos os que o invocam, de todos os que o invocam em verdade.", referencia: "Salmos 145:18" },
    { texto: "Bendito o homem que confia no Senhor, e cuja esperança é o Senhor.", referencia: "Jeremias 17:7" },
    { texto: "O Senhor é bom, uma fortaleza no dia da angústia, e conhece os que confiam nele.", referencia: "Naum 1:7" },
    { texto: "As palavras da minha boca e a meditação do meu coração sejam agradáveis na tua presença, Senhor.", referencia: "Salmos 19:14" },
    { texto: "Eu sou a videira, vós, as varas; quem está em mim, e eu nele, esse dá muito fruto.", referencia: "João 15:5" },
    { texto: "Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo.", referencia: "2 Coríntios 5:17" },
    { texto: "Esforçai-vos, e ele fortalecerá o vosso coração, vós todos que esperais no Senhor.", referencia: "Salmos 31:24" },
    { texto: "Torre forte é o nome do Senhor; para ela corre o justo e está seguro.", referencia: "Provérbios 18:10" },
    { texto: "Quando passares pelas águas, estarei contigo; quando pelos rios, eles não te submergirão.", referencia: "Isaías 43:2" },
    { texto: "Confiai nele, ó povo, em todo o tempo; derramai perante ele o vosso coração. Deus é o nosso refúgio.", referencia: "Salmos 62:8" },
    { texto: "Àquele que é poderoso para fazer tudo muito mais abundantemente além do que pedimos ou pensamos.", referencia: "Efésios 3:20" },
    { texto: "Porque o Senhor é bom, e eterna a sua misericórdia; e a sua verdade dura de geração em geração.", referencia: "Salmos 100:5" },
    { texto: "Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?", referencia: "Romanos 8:31" },
    { texto: "Escondi a tua palavra no meu coração, para não pecar contra ti.", referencia: "Salmos 119:11" },
    { texto: "O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória.", referencia: "Filipenses 4:19" },
    { texto: "Uns confiam em carros e outros em cavalos, mas nós faremos menção do nome do Senhor nosso Deus.", referencia: "Salmos 20:7" },
    { texto: "Eu sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz e não de mal.", referencia: "Jeremias 29:11" },
    { texto: "Perto está o Senhor dos que têm o coração quebrantado e salva os contritos de espírito.", referencia: "Salmos 34:18" },
    { texto: "E eis que estou convosco todos os dias, até à consumação do século.", referencia: "Mateus 28:20" },
    { texto: "Olhando para Jesus, autor e consumador da fé.", referencia: "Hebreus 12:2" },
    { texto: "O caminho de Deus é perfeito; a palavra do Senhor é provada; é um escudo para todos os que nele confiam.", referencia: "Salmos 18:30" },
    { texto: "Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças.", referencia: "1 Tessalonicenses 5:16-18" },
    { texto: "Ó Deus, tu és o meu Deus; de madrugada te buscarei; a minha alma tem sede de ti.", referencia: "Salmos 63:1" },
    { texto: "Confiai no Senhor para sempre; porque o Senhor Deus é uma rocha eterna.", referencia: "Isaías 26:4" },
    { texto: "O Senhor te guardará de todo o mal; ele guardará a tua alma.", referencia: "Salmos 121:7" },
    { texto: "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.", referencia: "Provérbios 4:23" },
    { texto: "Faze-me saber os teus caminhos, Senhor; ensina-me as tuas veredas.", referencia: "Salmos 25:4" },
    { texto: "Na tranquilidade e na confiança estará a vossa força.", referencia: "Isaías 30:15" },
    { texto: "Amo ao Senhor, porque ele ouviu a minha voz e a minha súplica.", referencia: "Salmos 116:1" },
    { texto: "E não nos cansemos de fazer o bem, porque a seu tempo ceifaremos, se não houvermos desfalecido.", referencia: "Gálatas 6:9" },
    { texto: "Mas tu, Senhor, és um escudo para mim, a minha glória e o que exalta a minha cabeça.", referencia: "Salmos 3:3" },
    { texto: "Eis que estou à porta e bato; se alguém ouvir a minha voz e abrir a porta, entrarei em sua casa.", referencia: "Apocalipse 3:20" },
    { texto: "A exposição das tuas palavras dá luz; dá entendimento aos simples.", referencia: "Salmos 119:130" },
    { texto: "Não vos entristeçais, porque a alegria do Senhor é a vossa força.", referencia: "Neemias 8:10" },
    { texto: "Desde os fins da terra clamarei a ti, quando o meu coração estiver abatido; leva-me para a rocha mais alta.", referencia: "Salmos 61:2" },
    { texto: "Tenho por certo que as aflições do tempo presente não são para comparar com a glória que em nós há de ser revelada.", referencia: "Romanos 8:18" },
    { texto: "O Senhor aperfeiçoará o que me concerne; a tua misericórdia, ó Senhor, dura para sempre.", referencia: "Salmos 138:8" },
    { texto: "Porque todo o que é nascido de Deus vence o mundo; e esta é a vitória que vence o mundo, a nossa fé.", referencia: "1 João 5:4" },
    { texto: "Em paz também me deitarei e dormirei, porque só tu, Senhor, me fazes habitar em segurança.", referencia: "Salmos 4:8" },
    { texto: "Porque os montes se retirarão, mas a minha benignidade não se apartará de ti.", referencia: "Isaías 54:10" },
    { texto: "Louvai ao Senhor, porque ele é bom, porque a sua benignidade dura para sempre.", referencia: "Salmos 107:1" },
    { texto: "E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações.", referencia: "Colossenses 3:15" },
    { texto: "Em ti confiarão os que conhecem o teu nome; porque tu, Senhor, nunca desamparaste os que te buscam.", referencia: "Salmos 9:10" },
    { texto: "Porque Deus não nos deu o espírito de temor, mas de fortaleza, e de amor, e de moderação.", referencia: "2 Timóteo 1:7" },
    { texto: "Deleita-te também no Senhor, e ele te concederá os desejos do teu coração.", referencia: "Salmos 37:4" },
    { texto: "Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai.", referencia: "Mateus 5:16" },
    { texto: "Pois tu, Senhor, és bom, e pronto a perdoar, e abundante em benignidade para com todos os que te invocam.", referencia: "Salmos 86:5" },
    { texto: "Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido.", referencia: "1 Pedro 2:9" },
    { texto: "Tu és o meu refúgio e o meu escudo; espero na tua palavra.", referencia: "Salmos 119:114" },
    { texto: "Dá força ao cansado e multiplica as forças ao que não tem nenhum vigor.", referencia: "Isaías 40:29" }
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
