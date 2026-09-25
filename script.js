const versiculos = [
    // --- Versículos 1 a 100 ---
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
    { texto: "Tu és o meu Deus, e eu te louvarei; tu és o meu Deus, e eu te exaltarei.", ref: "Salmos 118:28" },

    // --- Versículos 101 a 200 ---
    { texto: "Quando passares pelas águas estarei contigo, e quando pelos rios, eles não te submergirão.", ref: "Isaías 43:2" },
    { texto: "Ainda antes que houvesse dia, eu sou; e ninguém há que possa escapar das minhas mãos; operando eu, quem impedirá?", ref: "Isaías 43:13" },
    { texto: "Toda a ferramenta preparada contra ti não prosperará, e toda a língua que se levantar contra ti em juízo tu a condenarás.", ref: "Isaías 54:17" },
    { texto: "Buscai ao Senhor enquanto se pode achar, invocai-o enquanto está perto.", ref: "Isaías 55:6" },
    { texto: "Assim será a minha palavra, que sair da minha boca; ela não voltará para mim vazia, antes fará o que me apraz.", ref: "Isaías 55:11" },
    { texto: "Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores.", ref: "Salmos 1:1" },
    { texto: "Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite.", ref: "Salmos 1:2" },
    { texto: "Pois será como a árvore plantada junto a ribeiros de águas, a qual dá o seu fruto no seu tempo.", ref: "Salmos 1:3" },
    { texto: "Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos.", ref: "Salmos 19:1" },
    { texto: "Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, Senhor, Rocha minha e Redentor meu!", ref: "Salmos 19:14" },
    { texto: "Uns confiam em carros e outros em cavalos, mas nós faremos menção do nome do Senhor nosso Deus.", ref: "Salmos 20:7" },
    { texto: "Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.", ref: "Salmos 23:4" },
    { texto: "Certamente que a bondade e a misericórdia me seguirão todos os dias da minha vida; e habitarei na casa do Senhor por longos dias.", ref: "Salmos 23:6" },
    { texto: "O choro pode durar uma noite, mas a alegria vem pela manhã.", ref: "Salmos 30:5" },
    { texto: "Bem-aventurada é a nação cujo Deus é o Senhor, e o povo ao qual escolheu para sua herança.", ref: "Salmos 33:12" },
    { texto: "Louvarei ao Senhor em todo o tempo; o seu louvor estará continuamente na minha boca.", ref: "Salmos 34:1" },
    { texto: "O anjo do Senhor acampa-se ao redor dos que o temem, e os livra.", ref: "Salmos 34:7" },
    { texto: "Provai, e vede que o Senhor é bom; bem-aventurado o homem que nele confia.", ref: "Salmos 34:8" },
    { texto: "Perto está o Senhor dos que têm o coração quebrantado, e salva os contritos de espírito.", ref: "Salmos 34:18" },
    { texto: "Confia no Senhor e faze o bem; habitarás na terra, e verdadeiramente serás alimentado.", ref: "Salmos 37:3" },
    { texto: "Os passos de um homem bom são confirmados pelo Senhor, e ele deleita-se no seu caminho.", ref: "Salmos 37:23" },
    { texto: "Fui moço, e agora sou velho; mas nunca vi desamparado o justo, nem a sua semente a mendigar o pão.", ref: "Salmos 37:25" },
    { texto: "Esperei com paciência no Senhor, e ele se inclinou para mim, e ouviu o meu clamor.", ref: "Salmos 40:1" },
    { texto: "Ó Deus, tu és tremendo desde os teus santuários; o Deus de Israel é o que dá força e poder ao seu povo.", ref: "Salmos 68:35" },
    { texto: "Misericórdia e piedade é o Senhor; longo em benignidade, e grande em misericórdia.", ref: "Salmos 103:8" },
    { texto: "Pois quanto o céu está elevado acima da terra, assim é grande a sua misericórdia para com os que o temem.", ref: "Salmos 103:11" },
    { texto: "Não a nós, Senhor, não a nós, mas ao teu nome dá glória, por amor da tua misericórdia e da tua verdade.", ref: "Salmos 115:1" },
    { texto: "Louvai ao Senhor, porque ele é bom, porque a sua misericórdia dura para sempre.", ref: "Salmos 118:1" },
    { texto: "O Senhor está comigo; não temerei o que me possa fazer o homem.", ref: "Salmos 118:6" },
    { texto: "O Senhor é a minha força e o meu cántico; e se fez a minha salvação.", ref: "Salmos 118:14" },
    { texto: "De todo o meu coração te busquei; não me deixes desviar dos teus mandamentos.", ref: "Salmos 119:10" },
    { texto: "Elevo os meus olhos para os montes: de onde me virá o socorro?", ref: "Salmos 121:1" },
    { texto: "Não deixará vacilar o teu pé; aquele que te guarda não tosquejará.", ref: "Salmos 121:3" },
    { texto: "O Senhor te guardará de todo o mal; ele guardará a tua alma.", ref: "Salmos 121:7" },
    { texto: "O Senhor guardará a tua saída e a tua entrada, desde agora e para sempre.", ref: "Salmos 121:8" },
    { texto: "Alegrei-me quando me disseram: Vamos à casa do Senhor.", ref: "Salmos 122:1" },
    { texto: "Os que confiam no Senhor serão como o monte de Sião, que não se abala, mas permanece para sempre.", ref: "Salmos 125:1" },
    { texto: "Grandes coisas fez o Senhor por nós, pelas quais estamos alegres.", ref: "Salmos 126:3" },
    { texto: "Os que semearam com lágrimas com júbilo ceifarão.", ref: "Salmos 126:5" },
    { texto: "Se o Senhor não edificar a casa, em vão trabalham os que a edificam.", ref: "Salmos 127:1" },
    { texto: "Oh! quão bom e quão suave é que os irmãos vivam em união.", ref: "Salmos 133:1" },
    { texto: "O Senhor aperfeiçoará o que me toca; a tua misericórdia, ó Senhor, dura para sempre.", ref: "Salmos 138:8" },
    { texto: "Eu te louvarei, porque de um modo assombroso, e tão maravilhoso fui feito.", ref: "Salmos 139:14" },
    { texto: "Sonda-me, ó Deus, e conhece o meu coração; prova-me, e conhece os meus pensamentos.", ref: "Salmos 139:23" },
    { texto: "Faze-me ouvir a tua benignidade pela manhã, pois em ti confio; faze-me saber o caminho que devo seguir.", ref: "Salmos 143:8" },
    { texto: "Perto está o Senhor de todos os que o invocam, de todos os que o invocam em verdade.", ref: "Salmos 145:18" },
    { texto: "Sobre tudo o que se deve guardar, guarda o teu coração, porque dele procedem as fontes da vida.", ref: "Provérbios 4:23" },
    { texto: "Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.", ref: "Provérbios 16:3" },
    { texto: "O coração do homem planeja o seu caminho, mas o Senhor lhe dirige os passos.", ref: "Provérbios 16:9" },
    { texto: "Torre forte é o nome do Senhor; para ela correrá o justo, e estará em alto refúgio.", ref: "Provérbios 18:10" },
    { texto: "As misericórdias do Senhor são a causa de não sermos consumidos, porque as suas misericórdias não têm fim.", ref: "Lamentações 3:22" },
    { texto: "Novas são cada manhã; grande é a tua fidelidade.", ref: "Lamentações 3:23" },
    { texto: "Ele revela o profundo e o escondido; conhece o que está em trevas, e com ele mora a luz.", ref: "Daniel 2:22" },
    { texto: "Conheçamos, e prossecamos em conhecer ao Senhor; a sua saída, como a alva, é certa.", ref: "Oséias 6:3" },
    { texto: "E há de ser que, depois derramarei o meu Espírito sobre toda a carne.", ref: "Joel 2:28" },
    { texto: "O Senhor teu Deus está no meio de ti, poderoso para te salvar; ele se deleitará em ti com alegria.", ref: "Sofonias 3:17" },
    { texto: "Não por força nem por violência, mas pelo meu Espírito, diz o Senhor dos Exércitos.", ref: "Zacarias 4:6" },
    { texto: "Trazei todos os dízimos à casa do tesouro... e provai-me nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu.", ref: "Malaquias 3:10" },
    { texto: "Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte.", ref: "Mateus 5:14" },
    { texto: "Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem a vosso Pai.", ref: "Mateus 5:16" },
    { texto: "Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas.", ref: "Mateus 11:29" },
    { texto: "E eis que eu estou convosco todos os dias, até à consumação do século. Amém.", ref: "Mateus 28:20" },
    { texto: "Se tu podes crer, tudo é possível ao que crê.", ref: "Marcos 9:23" },
    { texto: "Por isso vos digo que todas as coisas que pedirdes, orando, crede receber, e tê-las-eis.", ref: "Marcos 11:24" },
    { texto: "Porque para Deus nada é impossível.", ref: "Lucas 1:37" },
    { texto: "Mas, a todos quantos o receberam, deu-lhes o poder de serem feitos filhos de Deus.", ref: "João 1:12" },
    { texto: "Eu sou a luz do mundo; quem me segue não andará em trevas, mas terá a luz da vida.", ref: "João 8:12" },
    { texto: "E conhecereis a verdade, e a verdade vos libertará.", ref: "João 8:32" },
    { texto: "Se, pois, o Filho vos libertar, verdadeiramente sereis livres.", ref: "João 8:36" },
    { texto: "Eu vim para que tenham vida, e a tenham com abundância.", ref: "João 10:10" },
    { texto: "Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá.", ref: "João 11:25" },
    { texto: "Eu sou a videira, vós as varas; quem está em mim, e eu nele, esse dá muito fruto; porque sem mim nada podeis fazer.", ref: "João 15:5" },
    { texto: "Tenho-vos dito isto, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo, eu venci o mundo.", ref: "João 16:33" },
    { texto: "Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas.", ref: "Atos 1:8" },
    { texto: "Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa.", ref: "Atos 16:31" },
    { texto: "Porque não me envergonho do evangelho de Cristo, pois é o poder de Deus para salvação de todo aquele que crê.", ref: "Romanos 1:16" },
    { texto: "Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus.", ref: "Romanos 8:1" },
    { texto: "Porque para mim tenho por certo que as aflições do tempo presente não são para comparar com a glória que em nós há de ser revelada.", ref: "Romanos 8:18" },
    { texto: "Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?", ref: "Romanos 8:31" },
    { texto: "Mas em todas estas coisas somos mais do que vencedores, por aquele que nos amou.", ref: "Romanos 8:37" },
    { texto: "Porque estou certo de que nem a morte, nem a vida, nem coisas presentes, nem futuras, nos poderá separar do amor de Deus.", ref: "Romanos 8:38-39" },
    { texto: "Se com a tua boca confessares ao Senhor Jesus, e em teu coração creres que Deus o ressuscitou dentre os mortos, serás salvo.", ref: "Romanos 10:9" },
    { texto: "De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.", ref: "Romanos 10:17" },
    { texto: "As coisas que o olho não viu, e o ouvido não ouviu, são as que Deus preparou para os que o amam.", ref: "1 Coríntios 2:9" },
    { texto: "Não vos sobreveio tentação, senão humana; mas fiel é Deus, que não vos deixará tentar acima do que podeis.", ref: "1 Coríntios 10:13" },
    { texto: "Mas graças a Deus que nos dá a vitória por nosso Senhor Jesus Cristo.", ref: "1 Coríntios 15:57" },
    { texto: "Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor.", ref: "1 Coríntios 15:58" },
    { texto: "Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.", ref: "2 Coríntios 5:17" },
    { texto: "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.", ref: "2 Coríntios 12:9" },
    { texto: "Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim.", ref: "Gálatas 2:20" },
    { texto: "Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus.", ref: "Efésios 2:8" },
    { texto: "Ora, àquele que é poderoso para fazer tudo muito mais abundantemente além daquilo que pedimos ou pensamos.", ref: "Efésios 3:20" },
    { texto: "No demais, irmãos meus, fortalecei-vos no Senhor e na força do seu poder.", ref: "Efésios 6:10" },
    { texto: "Tendo por certo isto mesmo, que aquele que em vós começou a boa obra a aperfeiçoará até ao dia de Jesus Cristo.", ref: "Filipenses 1:6" },
    { texto: "Não estejais inquietos por coisa alguma; antes as vossas petições sejam em tudo conhecidas diante de Deus pela oração.", ref: "Filipenses 4:6" },
    { texto: "E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus.", ref: "Filipenses 4:7" },
    { texto: "E, tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens.", ref: "Colossenses 3:23" },
    { texto: "Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças.", ref: "1 Tessalonicenses 5:16-18" },
    { texto: "Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não vêem.", ref: "Hebreus 11:1" },
    { texto: "Olhando para Jesus, autor e consumador da fé.", ref: "Hebreus 12:2" }
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
        if (elTexto && elRef) {
            elTexto.innerText = versiculoSorteado.texto;
            elRef.innerText = versiculoSorteado.ref;
        }

        if (card) card.classList.remove('fade-out');
    }, 250);
}

function atualizarSaudacao() {
    const hora = new Date().getHours();
    let saudacaoHora = "";

    if (hora >= 5 && hora < 12) {
        saudacaoHora = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        saudacaoHora = "Boa tarde!";
    } else {
        saudacaoHora = "Boa noite!";
    }

    const elBoasVindas = document.getElementById("boas-vindas");
    if (elBoasVindas) {
        elBoasVindas.innerHTML = `A paz do Senhor! ${saudacaoHora}<br>Seja bem-vindo ao nosso`;
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
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 2000);
                }
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
