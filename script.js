/**
 * PROJECT AETHER | MOTOR DE EXPERIÊNCIA 2026
 */

// 1. CODEX EXPANDIDO (Estrutura detalhada)
const codex = {
    grego: [
        { nome: "ZEUS", dom: "Soberania", arq: "O Governante", msg: "A autoridade real nasce do equilíbrio, não da força. O raio que empunha agora exige clareza antes do impacto.", sombra: "Evite a tirania e a incapacidade de ouvir os outros.", freq: "432Hz" },
        { nome: "HADES", dom: "Ocultismo", arq: "O Mago das Sombras", msg: "O que está abaixo da superfície governa a sua realidade. Desça às profundezas para resgatar o seu ouro interior.", sombra: "Cuidado com o isolamento excessivo e o rancor.", freq: "110Hz" },
        { nome: "ATENA", dom: "Estratégia", arq: "A Sábia", msg: "Uma mente clara é mais afiada que qualquer lâmina. Observe os padrões invisíveis antes de agir.", sombra: "Não se perca na frieza do intelecto puro.", freq: "741Hz" },
        // ... Adicione aqui mais 15-20 deuses conforme desejar
    ],
    egipcio: [
        { nome: "RÁ", dom: "Criação", arq: "O Sol Central", msg: "A sua consciência é a fonte de calor de todo o seu sistema. Brilhe sem pedir permissão.", sombra: "O orgulho cego pode queimar o que mais ama.", freq: "528Hz" },
        { nome: "ANÚBIS", dom: "Transição", arq: "O Guardião", msg: "Pese o seu coração contra a pena da verdade. O que carrega hoje ajuda ou dificulta o seu caminho?", sombra: "O medo da mudança paralisa a evolução.", freq: "174Hz" }
    ],
    nordico: [
        { nome: "ODIN", dom: "Conhecimento", arq: "O Visionário", msg: "Sacrifique o que é temporário pelo que é eterno. A sabedoria é uma conquista paga com atenção.", sombra: "A obsessão pelo controlo pode cegar o outro olho.", freq: "639Hz" }
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