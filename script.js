// ============ DADOS DO ORÁCULO (Preservados) ============
const db = {
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

// ============ ENGINE DE ÁUDIO PROCEDURAL (Web Audio API) ============
// Em 2026, não carregamos MP3s. Criamos som em tempo real.
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let oscillator, gainNode;

function playTone(freq, type = 'sine') {
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime); // Hz
    
    // Envelope de volume (Fade in/out suave)
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioCtx.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 2);
}

// ============ SIMULAÇÃO DE FLUIDOS QUÂNTICOS (Canvas) ============
const canvas = document.getElementById('quantum-field');
const ctx = canvas.getContext('2d');
let width, height;
let particles = [];
let entropyLevel = 0;
let simulationActive = true;

// Configurar tamanho
function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Classe Partícula com Física
class QuantumBit {
    constructor() {
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = Math.random() * 100;
        this.color = Math.random() > 0.5 ? '#05d9e8' : '#ff2a6d';
    }

    update(mouseX, mouseY) {
        // Interação com o "Observador" (Mouse)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        
        // Se o mouse estiver perto, a partícula agita-se (Efeito Observador)
        if (dist < 200) {
            this.vx += dx * 0.001;
            this.vy += dy * 0.001;
            entropyLevel += 0.05; // Aumenta a entropia global
        }

        this.x += this.vx;
        this.y += this.vy;
        
        // Atrito
        this.vx *= 0.96;
        this.vy *= 0.96;

        // Limites (Wrap around)
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.random() * 2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Inicializar Partículas
for(let i=0; i<150; i++) particles.push(new QuantumBit());

// Loop de Animação
let mouseX = -1000, mouseY = -1000;
document.addEventListener('mousemove', e => { 
    mouseX = e.clientX; 
    mouseY = e.clientY; 
    // Som dinâmico baseado no movimento (Sintetizador Theremin-like)
    if(Math.random() > 0.9) playTone(200 + (e.clientX/width)*400, 'triangle');
});

function animate() {
    if(!simulationActive) return;

    // Rastro (Trail Effect) para sensação de líquido
    ctx.fillStyle = 'rgba(3, 3, 5, 0.1)';
    ctx.fillRect(0, 0, width, height);

    entropyLevel *= 0.95; // Decaimento da entropia
    document.getElementById('entropy-val').innerText = entropyLevel.toFixed(2) + '%';

    particles.forEach(p => {
        p.update(mouseX, mouseY);
        p.draw();
    });

    // COLAPSO DA FUNÇÃO DE ONDA (Trigger do Resultado)
    if (entropyLevel > 100) {
        colapsarUniverso();
    } else {
        requestAnimationFrame(animate);
    }
}
animate();

// ============ LÓGICA DE COLAPSO E ARTE GENERATIVA ============
function colapsarUniverso() {
    simulationActive = false;
    playTone(80, 'sawtooth'); // Som grave de impacto
    
    // Selecionar Deus
    const panteao = document.getElementById('panteao-selector').value;
    const pool = db[panteao] || db.grego;
    const deus = pool[Math.floor(Math.random() * pool.length)];

    // Mostrar Interface
    const ui = document.getElementById('artifact-container');
    ui.classList.remove('hidden');
    setTimeout(() => ui.classList.add('visible'), 100);

    document.getElementById('god-name').innerText = deus.nome;
    document.getElementById('god-msg').innerText = deus.msg;

    // GERAR ARTE ÚNICA (Geometria Sagrada)
    desenharArtefato(document.getElementById('artifact-canvas'));
}

function desenharArtefato(cvs) {
    const c = cvs.getContext('2d');
    const w = cvs.width;
    const h = cvs.height;
    const cx = w/2, cy = h/2;
    
    c.clearRect(0,0,w,h);
    c.strokeStyle = '#05d9e8';
    c.lineWidth = 1;

    c.beginPath();
    // Desenha Lissajous ou Espirais baseadas no tempo atual
    const seed = Date.now();
    for(let i=0; i<100; i++) {
        const angle = 0.1 * i;
        const x = cx + (Math.sin(angle * (seed%5)) * i * 0.6);
        const y = cy + (Math.cos(angle * (seed%4)) * i * 0.6);
        c.lineTo(x, y);
    }
    c.stroke();
}

function resetAether() {
    document.getElementById('artifact-container').classList.remove('visible');
    setTimeout(() => {
        document.getElementById('artifact-container').classList.add('hidden');
        entropyLevel = 0;
        simulationActive = true;
        animate();
    }, 500);
}

function switchFrequency() {
    // Muda a cor e tom base dependendo do panteão
    playTone(400, 'sine');
    // Aqui podes adicionar lógica para mudar as cores das partículas
}