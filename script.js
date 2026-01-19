/**
 * PROJECT AETHER | MOTOR DE EXPERIÊNCIA 2026
 */

// 1. CODEX EXPANDIDO (Estrutura detalhada)
const codex = {
    grego: [
    { 
        nome: "ZEUS", 
        msg: "Zeus representa a soberania, a ordem que se impõe sobre o caos primordial. Ele é o princípio da autoridade justa, da visão ampla e da capacidade de tomar decisões que estruturam o mundo. A sua energia lembra que liderança não é domínio, mas responsabilidade: assumir o centro, organizar o campo e proteger aquilo que está sob o seu raio de influência." 
    },
    { 
        nome: "HADES", 
        msg: "Hades simboliza o invisível, o subterrâneo, o que está para além da aparência. Ele rege o reino interior, o inconsciente, os processos de morte e renascimento. A sua presença ensina que tudo o que é sólido nasce do que não se vê, e que enfrentar a própria sombra é o caminho para recuperar poder real. Ele é o guardião do essencial." 
    },
    { 
        nome: "ATENA", 
        msg: "Atena encarna a inteligência estratégica, a sabedoria prática e a capacidade de agir com precisão. Ela é a mente clara que observa padrões, antecipa movimentos e escolhe o gesto certo no momento certo. A sua energia lembra que força sem direção é desperdício, e que a verdadeira vitória nasce da lucidez e da preparação." 
    },
    { 
        nome: "APOLO", 
        msg: "Apolo é a luz da consciência, a clareza mental, a harmonia e a busca pela verdade. Ele governa a razão, a arte, a medicina e tudo o que exige proporção e equilíbrio. A sua mensagem é que a vida se organiza quando a mente se ilumina, e que a beleza é um reflexo da ordem interior." 
    },
    { 
        nome: "ARTEMIS", 
        msg: "Ártemis representa a autonomia, a proteção do espaço interno e a capacidade de viver em sintonia com a própria natureza. Ela é a guardiã dos limites, da liberdade e da intuição selvagem. Ensina que independência não é isolamento, mas a coragem de permanecer fiel ao próprio ritmo e território." 
    },
    { 
        nome: "AFRODITE", 
        msg: "Afrodite simboliza o magnetismo, a beleza que nasce da autenticidade e a força criadora do desejo. Ela lembra que o amor é uma energia transformadora, capaz de revelar o que é verdadeiro e dissolver o que é falso. A sua presença convida à expressão plena da sensibilidade e da verdade emocional." 
    },
    { 
        nome: "ARES", 
        msg: "Ares é o impulso da ação, a coragem bruta, o movimento que rompe a estagnação. Ele representa o fogo que avança sem hesitar, mas também o risco da impulsividade. A sua energia ensina que há momentos em que pensar demais é perder o timing, e que a decisão firme abre caminhos que a dúvida nunca abriria." 
    },
    { 
        nome: "HERMES", 
        msg: "Hermes é o mensageiro, o mediador entre mundos, o deus da comunicação, do comércio e da inteligência adaptativa. Ele simboliza o movimento fluido, a criatividade e a capacidade de encontrar soluções inesperadas. A sua mensagem é que flexibilidade é poder, e que quem sabe circular entre diferentes realidades encontra oportunidades invisíveis para os outros." 
    },
    { 
        nome: "POSEIDON", 
        msg: "Poseidon representa o oceano emocional, a profundidade instintiva e a força das correntes internas que moldam a superfície da vida. Ele ensina que ignorar as emoções é ser arrastado por elas, mas reconhecê‑las é aprender a navegar com poder. A sua energia é a do inconsciente em movimento." 
    }
],
    egipcio: [
    { 
        nome: "RÁ", 
        msg: "Rá é o sol primordial, a fonte da vida, o princípio criador que ilumina e sustenta tudo. Ele representa a consciência desperta, a vitalidade e o poder de manifestar. A sua mensagem é que cada ser é o centro do seu próprio universo, e que a luz interior precisa ser alimentada diariamente para irradiar força e direção." 
    },
    { 
        nome: "ÍSIS", 
        msg: "Ísis é a grande maga, a mãe divina, a senhora da cura e da restauração. Ela simboliza o poder do amor que reconstrói, da intuição que revela e da sabedoria que integra. A sua energia lembra que a verdadeira magia é a capacidade de unir o que foi separado e devolver vida ao que parecia perdido." 
    },
    { 
        nome: "OSÍRIS", 
        msg: "Osíris representa o ciclo da morte e renascimento, a transformação profunda e a capacidade de ressurgir mais íntegro após a destruição. Ele é o arquétipo da regeneração e da justiça interior. A sua mensagem é que nada realmente morre: tudo se transforma, e o que renasce vem mais alinhado com a verdade." 
    },
    { 
        nome: "ANÚBIS", 
        msg: "Anúbis é o guardião das passagens, o guia das transições e o mestre da precisão emocional. Ele simboliza o discernimento necessário para atravessar limiares — sejam eles internos ou externos. A sua energia ensina que toda mudança exige coragem, clareza e respeito pelo processo." 
    },
    { 
        nome: "HÓRUS", 
        msg: "Hórus é a visão elevada, a consciência que observa de cima e enxerga o todo. Ele representa a vitória da luz sobre a escuridão, a capacidade de ver além do imediato e agir com propósito. A sua mensagem é que quem sobe a montanha vê o caminho inteiro, e não apenas o próximo passo." 
    },
    { 
        nome: "SETH", 
        msg: "Seth é o caos criativo, a força disruptiva que destrói estruturas rígidas para permitir renovação. Ele representa o conflito necessário, a quebra de padrões e a energia bruta da transformação. A sua presença lembra que sem tempestade não há clareza, e que o caos é matéria-prima para evolução." 
    },
    { 
        nome: "THOTH", 
        msg: "Thoth é o deus da escrita, da sabedoria, da matemática e da ordem intelectual. Ele simboliza o conhecimento organizado, a lógica que estrutura o mundo e a capacidade de traduzir o invisível em linguagem. A sua mensagem é que compreender é criar, e que quem domina o símbolo domina a realidade." 
    }
],
    nordico: [
    { 
        nome: "ODIN", 
        msg: "Odin é o buscador incansável da sabedoria, o deus que sacrifica o próprio olho para ver mais longe. Ele representa o conhecimento profundo, a visão estratégica e a coragem de renunciar ao superficial para alcançar o essencial. A sua energia lembra que toda grande conquista exige entrega e disciplina." 
    },
    { 
        nome: "THOR", 
        msg: "Thor é a força vital, o trovão que rompe bloqueios e a ação direta que protege e avança. Ele simboliza a coragem, a determinação e a capacidade de enfrentar desafios de frente. A sua mensagem é que movimento gera clareza, e que a força bem direcionada é uma forma de amor." 
    },
    { 
        nome: "FREYA", 
        msg: "Freya é a deusa do amor, da magia e da soberania feminina. Ela representa o desejo consciente, a beleza que nasce da força interior e a capacidade de escolher com o coração sem perder o poder. A sua energia ensina que vulnerabilidade e poder não são opostos, mas aliados." 
    },
    { 
        nome: "LOKI", 
        msg: "Loki é o trickster, o agente da mudança, o deus que quebra padrões e expõe contradições. Ele simboliza a inteligência caótica, a criatividade radical e a capacidade de revelar verdades através da desconstrução. A sua mensagem é que a rigidez é inimiga da evolução, e que o inesperado abre portas que a lógica não vê." 
    },
    { 
        nome: "TYR", 
        msg: "Tyr é o deus da justiça, da honra e do compromisso. Ele representa a coragem de fazer o que é certo mesmo quando custa caro. A sua energia lembra que integridade é força, e que pactos verdadeiros exigem sacrifício consciente." 
    },
    { 
        nome: "FRIGG", 
        msg: "Frigg é a sabedoria silenciosa, a visão profunda que não precisa de palavras. Ela simboliza a intuição madura, o cuidado estratégico e a capacidade de sustentar grandes decisões com serenidade. A sua mensagem é que o silêncio certo vale mais do que mil argumentos." 
    },
    { 
        nome: "HEIMDALL", 
        msg: "Heimdall é o guardião da ponte entre mundos, o sentinela que tudo vê e tudo escuta. Ele representa a vigilância interior, a percepção refinada e a capacidade de antecipar movimentos antes que se manifestem. A sua energia ensina que atenção é proteção." 
    }
]
};

// 2. MEMÓRIA DE SESSÃO
let sessionHistory = { grego: [], egipcio: [], nordico: [] };

// 3. MOTOR DE SOM PROCEDURAL (Pilar da App)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playProceduralSound(freq, type = 'sine', vol = 0.1, dur = 1) {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(vol, audioCtx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
}

// 4. MOTOR QUÂNTICO (Canvas Interativo)
const canvas = document.getElementById('quantum-field');
const ctx = canvas.getContext('2d');
let particles = [], entropy = 0, active = true, px = -100, py = -100;

function initCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = Array.from({length: 120}, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0, vy: 0,
        size: Math.random() * 2 + 1,
        color: Math.random() > 0.5 ? '#05d9e8' : '#ff2a6d'
    }));
}

function updatePointer(e) {
    if (e.touches) {
        px = e.touches[0].clientX; py = e.touches[0].clientY;
        if (active) e.preventDefault();
    } else {
        px = e.clientX; py = e.clientY;
    }
    if (active && Math.random() > 0.9) playProceduralSound(100 + (px/canvas.width)*400, 'triangle', 0.05, 0.5);
}

document.addEventListener('mousemove', updatePointer);
document.addEventListener('touchstart', updatePointer, {passive: false});
document.addEventListener('touchmove', updatePointer, {passive: false});

function loop() {
    if (!active) return;
    ctx.fillStyle = 'rgba(3, 3, 5, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    entropy *= 0.98;
    document.getElementById('entropy-val').innerText = Math.min(entropy, 100).toFixed(2) + '%';

    particles.forEach(p => {
        const dx = px - p.x, dy = py - p.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < 150) { p.vx += dx*0.001; p.vy += dy*0.001; entropy += 0.08; }
        p.x += p.vx; p.y += p.vy;
        p.vx *= 0.95; p.vy *= 0.95;
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI*2); ctx.fill();
    });

    if (entropy > 100) colapse();
    else requestAnimationFrame(loop);
}

// 5. COLAPSO E REVELAÇÃO
function colapse() {
    active = false;
    playProceduralSound(60, 'sawtooth', 0.2, 3);
    
    const pan = document.getElementById('panteao-selector').value;
    const pool = codex[pan];
    
    // Lógica anti-repetição
    let available = pool.filter((_, i) => !sessionHistory[pan].includes(i));
    if (available.length === 0) { sessionHistory[pan] = []; available = pool; }
    
    const choice = available[Math.floor(Math.random() * available.length)];
    const index = pool.indexOf(choice);
    sessionHistory[pan].push(index);

    // UI Update
    document.getElementById('main-ui').style.display = 'none';
    const container = document.getElementById('artifact-container');
    container.classList.remove('hidden');
    setTimeout(() => container.classList.add('visible'), 50);

    document.getElementById('god-name').innerText = choice.nome;
    document.getElementById('god-header').innerText = `${choice.arq} | ${choice.dom} | ${choice.freq}`;
    document.getElementById('god-msg-long').innerText = choice.msg;
    document.getElementById('god-shadow').innerHTML = `<strong>SOMBRA:</strong> ${choice.sombra}`;
}

function resetAether() {
    location.reload(); // Forma mais limpa de resetar o estado quântico e áudio
}

// 6. MENU TOGGLE
document.getElementById('menu-btn').onclick = (e) => {
    e.stopPropagation();
    document.getElementById('side-menu').classList.toggle('active');
};

initCanvas();
loop();