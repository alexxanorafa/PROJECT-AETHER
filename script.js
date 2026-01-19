/**
 * PROJECT AETHER | MOTOR DE EXPERIÊNCIA ABSOLUTO
 */

const codex = {
    grego: [
        { nome: "ZEUS", arq: "Governante", dom: "Soberania", msg: "A sua energia exige uma tomada de decisão firme. A soberania pessoal requer que harmonize os seus impulsos com a justiça universal. O trovão anuncia a mudança; a clareza é a sua única proteção contra o caos.", sombra: "Tirania, excesso de controlo e a incapacidade de aceitar limites ou críticas." },
        { nome: "HADES", arq: "Mago das Sombras", dom: "Invisível", msg: "Hades convoca-o a descer ao submundo da psique para resgatar tesouros enterrados no subconsciente. Enfrentar o que teme é o único caminho para recuperar o seu poder real e a sua integridade.", sombra: "Isolamento extremo, depressão e recusa em participar na vida mundana." },
        { nome: "ATENA", arq: "Sábia", dom: "Estratégia", msg: "A inteligência estratégica é a sua maior arma. Observe os padrões antes de agir e escolha o gesto certo no momento certo. A verdadeira vitória nasce da lucidez e da preparação.", sombra: "Frieza emocional e negação da sensibilidade em favor do cálculo puro." },
        { nome: "APOLO", arq: "Luz", dom: "Verdade", msg: "A luz da consciência revela o que estava oculto. Procure a harmonia, a beleza e a verdade em todas as coisas. A clareza mental é o seu guia nesta fase.", sombra: "Arrogância intelectual e negação da própria sombra e vulnerabilidade." },
        { nome: "ARTEMIS", arq: "Exploradora", dom: "Autonomia", msg: "Proteja o seu espaço sagrado e a sua independência. A intuição selvagem sabe o caminho; não permita que as expectativas alheias desviem o seu foco.", sombra: "Hostilidade defensiva e rejeição absoluta a qualquer forma de compromisso." },
        { nome: "AFRODITE", arq: "Amante", dom: "Magnetismo", msg: "O amor é a força alquímica que transforma o chumbo em ouro. Honre a sua beleza interior e deixe que o seu magnetismo atraia o que é verdadeiro para si.", sombra: "Vaidade excessiva e utilização do afeto como ferramenta de manipulação." },
        { nome: "ARES", arq: "Guerreiro", dom: "Ação", msg: "O movimento rompe a estagnação. Tenha coragem para lutar pelo que acredita, mas não permita que a raiva cegue a sua estratégia. A força deve ter um propósito.", sombra: "Impulsividade destrutiva e agressividade sem causa justa." },
        { nome: "HERMES", arq: "Mensageiro", dom: "Conexão", msg: "A comunicação flui entre os mundos. Seja ágil, adaptável e procure as conexões invisíveis. Uma mensagem importante está a caminho ou deve ser entregue.", sombra: "Engano sistemático, dispersão mental e falta de compromisso com a verdade." },
        { nome: "POSEIDON", arq: "Inconsciente", dom: "Emoção", msg: "As correntes emocionais são profundas e poderosas. Aprenda a navegar nas águas do seu sentimento sem ser arrastado pelas tempestades do passado.", sombra: "Instabilidade emocional e explosões de fúria irracional." }
    ],
    egipcio: [
        { nome: "RÁ", arq: "Criador", dom: "Manifestação", msg: "A consciência desperta é a fonte de toda a vida. Ilumine o seu dia com intenção clara e permita que o seu brilho interior sustente os que o rodeiam.", sombra: "Ego inflado e necessidade de ser o centro de todas as atenções." },
        { nome: "ÍSIS", arq: "Mãe Maga", dom: "Restauração", msg: "A cura ocorre através da integração. Use a sua intuição e sabedoria para unir o que foi quebrado e restaurar a harmonia na sua vida.", sombra: "Obsessão pelo controlo e uso da magia/influência para prender os outros." },
        { nome: "OSÍRIS", arq: "Juiz", dom: "Regeneração", msg: "Para que o novo floresça, o velho deve morrer. Aceite os ciclos de transformação e confie que a vida se renova em planos mais elevados.", sombra: "Rigidez extrema e incapacidade de perdoar ou esquecer o passado." },
        { nome: "ANÚBIS", arq: "Guia", dom: "Transição", msg: "O limiar entre o que foi e o que será exige discernimento. Pese o seu coração na balança da verdade e atravesse a passagem com confiança.", sombra: "Paralisia perante a mudança e fixação no que já terminou." },
        { nome: "HÓRUS", arq: "Herói", dom: "Visão", msg: "Eleve o seu olhar para além do horizonte imediato. A visão espiritual permite-lhe ver a justiça divina a operar em todas as circunstâncias.", sombra: "Vingança cega e perda de foco nos detalhes terrenos." },
        { nome: "SETH", arq: "Caos", dom: "Disrupção", msg: "O caos é o útero da ordem futura. Não tema a tempestade, pois ela vem para destruir as estruturas que já não servem a sua evolução.", sombra: "Inveja corrosiva e destruição gratuita por prazer ou frustração." },
        { nome: "THOTH", arq: "Escriba", dom: "Sabedoria", msg: "A palavra escrita e o pensamento organizado têm poder criador. Registe as suas ideias e use a lógica para estruturar o seu destino.", sombra: "Pedantismo intelectual e uso do conhecimento para humilhar os outros." }
    ],
    nordico: [
        { nome: "ODIN", arq: "Sábio Errante", dom: "Busca", msg: "A sabedoria exige o sacrifício do ego. Procure o conhecimento profundo, mesmo que isso signifique caminhar sozinho por algum tempo.", sombra: "Manipulação de terceiros e obsessão pelo poder e segredos alheios." },
        { nome: "THOR", arq: "Defensor", dom: "Proteção", msg: "A sua força é o escudo dos mais fracos. Use o seu poder com honra para defender os seus valores e romper os obstáculos no seu caminho.", sombra: "Brutalidade e uso da força sem ponderação ou piedade." },
        { nome: "FREYA", arq: "Deusa", dom: "Soberania", msg: "O desejo é uma bússola sagrada. Reivindique o seu direito à beleza, ao prazer e à soberania sobre o seu próprio destino e corpo.", sombra: "Possessividade emocional e uso da sedução como arma de guerra." },
        { nome: "LOKI", arq: "Trickster", dom: "Mutação", msg: "A mudança é a única constante. Seja flexível, encontre o humor nas contradições e use a criatividade para contornar as regras rígidas.", sombra: "Traição deliberada e caos semeado apenas para evitar a responsabilidade." },
        { nome: "TYR", arq: "Justo", dom: "Honra", msg: "O compromisso exige coragem. Cumpra a sua palavra, mesmo que o custo seja elevado. A integridade é a base da verdadeira autoridade.", sombra: "Fanatismo e tendência ao martírio desnecessário para provar um ponto." },
        { nome: "FRIGG", arq: "Tecelã", dom: "Presciência", msg: "O silêncio guarda os fios do destino. Observe em quietude, pois nem todas as verdades precisam de ser ditas para terem efeito.", sombra: "Controlo subtil através do segredo e da manipulação doméstica." },
        { nome: "HEIMDALL", arq: "Sentinela", dom: "Vigilância", msg: "Esteja atento aos sinais subtis. O perigo ou a oportunidade anunciam-se muito antes de chegarem à porta. A percepção é o seu escudo.", sombra: "Paranoia constante e incapacidade de relaxar a guarda." }
    ]
};

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playPulse(f, type = 'sine', vol = 0.1, dur = 1.5) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(f, audioCtx.currentTime);
    g.gain.setValueAtTime(0, audioCtx.currentTime);
    g.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + 0.1);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    osc.connect(g); g.connect(audioCtx.destination);
    osc.start(); osc.stop(audioCtx.currentTime + dur);
}

const canvas = document.getElementById('quantum-field');
const ctx = canvas.getContext('2d');
let pts = [], entropy = 0, active = true, px = -100, py = -100;

function init() {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight;
    pts = Array.from({length: 120}, () => ({
        x: Math.random()*canvas.width, y: Math.random()*canvas.height,
        vx: 0, vy: 0, c: Math.random() > 0.5 ? '#05d9e8' : '#ff2a6d'
    }));
}

function draw() {
    if (!active) return;
    ctx.fillStyle = 'rgba(3,3,5,0.15)'; ctx.fillRect(0,0,canvas.width,canvas.height);
    entropy *= 0.992; // Entropia desce mais devagar para permitir continuidade
    document.getElementById('entropy-val').innerText = Math.min(entropy, 100).toFixed(2) + '%';
    pts.forEach(p => {
        let dx = px - p.x, dy = py - p.y, d = Math.sqrt(dx*dx+dy*dy);
        if (d < 150) { 
            p.vx += dx*0.002; p.vy += dy*0.002; entropy += 0.08;
            if(Math.random() > 0.985) playPulse(200 + entropy, 'sine', 0.02, 0.4);
        }
        p.x += p.vx; p.y += p.vy; p.vx *= 0.95; p.vy *= 0.95;
        ctx.fillStyle = p.c; ctx.fillRect(p.x, p.y, 2, 2);
    });
    if (entropy > 100) reveal(); else requestAnimationFrame(draw);
}

function reveal() {
    active = false;
    playPulse(55, 'sawtooth', 0.15, 3);
    const p = document.getElementById('panteao-selector').value;
    const choice = codex[p][Math.floor(Math.random()*codex[p].length)];
    
    document.getElementById('main-ui').classList.add('hidden');
    const container = document.getElementById('artifact-container');
    container.classList.remove('hidden');
    setTimeout(() => container.classList.add('visible'), 50);

    document.getElementById('god-header').innerText = `${choice.arq} | ${choice.dom}`;
    document.getElementById('god-name').innerText = choice.nome;
    document.getElementById('god-msg').innerText = choice.msg;
    document.getElementById('god-shadow').innerHTML = `<strong>SOMBRA:</strong> ${choice.sombra}`;
    drawSacred(document.getElementById('artifact-canvas'));
}

function continueExploration() {
    const container = document.getElementById('artifact-container');
    container.classList.remove('visible');
    setTimeout(() => {
        container.classList.add('hidden');
        document.getElementById('main-ui').classList.remove('hidden');
        entropy = 50; // Começa a meio caminho da próxima revelação
        active = true;
        draw();
    }, 500);
}

function drawSacred(cvs) {
    const c = cvs.getContext('2d');
    c.clearRect(0,0,200,200); c.strokeStyle = '#05d9e8'; c.translate(100,100);
    for(let i=0; i<10; i++) { c.rotate(Math.PI/5); c.strokeRect(-40,-40,80,80); }
}

function resetAether() { location.reload(); }

window.onmousemove = e => { px = e.clientX; py = e.clientY; };
window.ontouchmove = e => { px = e.touches[0].clientX; py = e.touches[0].clientY; };
document.getElementById('menu-btn').onclick = () => document.getElementById('side-menu').classList.toggle('active');

init(); draw();