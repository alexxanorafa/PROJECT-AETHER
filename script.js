// ============ DADOS DO ORÁCULO (Preservados) ============
const db = {
    grego: [
        { nome: "ZEUS", msg: "A ordem emerge do caos. Assuma a liderança." },
        { nome: "HADES", msg: "O invisível governa o visível. Olhe para dentro." },
        { nome: "ATENA", msg: "A estratégia supera a força bruta." }
        // ... Adiciona os teus restantes aqui
    ],
    egipcio: [
        { nome: "RÁ", msg: "Você é o sol do seu próprio universo." },
        { nome: "ÍSIS", msg: "A magia reside na cura e na restauração." }
    ],
    nordico: [
        { nome: "ODIN", msg: "Sacrifique o trivial para ganhar o essencial." },
        { nome: "THOR", msg: "Ação direta rompe a estagnação." }
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