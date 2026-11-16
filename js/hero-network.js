/**
 * Russian Digital · Hero Network
 * Particles + rays from circle-3 to orbital cards
 * Bugfix: centerX (was undefined cardX)
 * Respects prefers-reduced-motion
 */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stage = document.querySelector('.hero-stage');
  const canvas = document.getElementById('hero-canvas');
  if (!stage || !canvas) return;

  const ctx = canvas.getContext('2d');
  let width = 0;
  let height = 0;
  let particles = [];
  let rafId = null;

  const PARTICLE_COUNT = reduceMotion ? 0 : 70;
  const CONNECT_DIST = 130;
  const MOUSE_DIST = 180;
  const mouse = { x: null, y: null };

  // --- Particles ---
  function resize() {
    width = canvas.width = Math.floor(stage.offsetWidth);
    height = canvas.height = Math.floor(stage.offsetHeight);
  }

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.35;
      this.size = Math.random() * 1.8 + 0.8;
      this.density = Math.random() * 25 + 1;
      this.color = Math.random() > 0.75 ? '#8B3DFF' : '#00E087';
      this.baseAlpha = Math.random() * 0.4 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      if (mouse.x != null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_DIST && dist > 0) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST;
          this.x -= (dx / dist) * force * this.density * 0.4;
          this.y -= (dy / dist) * force * this.density * 0.4;
        }
      }
    }

    draw() {
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.baseAlpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  function initParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECT_DIST) {
          const opacity = (1 - dist / CONNECT_DIST) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 224, 135, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function frame() {
    ctx.clearRect(0, 0, width, height);
    for (const p of particles) {
      p.update();
      p.draw();
    }
    connect();
    rafId = requestAnimationFrame(frame);
  }

  stage.addEventListener('mousemove', (e) => {
    const rect = stage.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });
  stage.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // --- Rays from circle-3 to cards ---
  const svg = document.getElementById('hero-rays');
  const radial = stage.querySelector('.hero-radial');

  function drawRays() {
    if (!svg || !radial || reduceMotion) return;
    svg.innerHTML = '';

    const stageRect = stage.getBoundingClientRect();
    const radialRect = radial.getBoundingClientRect();

    // Center of radial system relative to stage
    const centerX = radialRect.left - stageRect.left + radialRect.width / 2;
    const centerY = radialRect.top - stageRect.top + radialRect.height / 2;

    // circle-3 radius: half of 320px on desktop, scaled on smaller
    const circle3 = radial.querySelector('.circle-3');
    let radius = 160;
    if (circle3) {
      radius = circle3.offsetWidth / 2;
    }

    const cards = radial.querySelectorAll('.nav-card');
    cards.forEach((card, index) => {
      const r = card.getBoundingClientRect();
      const cardX = r.left + r.width / 2 - stageRect.left;
      const cardY = r.top + r.height / 2 - stageRect.top;

      const angle = Math.atan2(cardY - centerY, cardX - centerX);
      const dotX = centerX + Math.cos(angle) * radius;
      const dotY = centerY + Math.sin(angle) * radius;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', dotX);
      line.setAttribute('y1', dotY);
      line.setAttribute('x2', cardX);
      line.setAttribute('y2', cardY);
      line.setAttribute('class', 'ray-line');
      line.style.animationDelay = `${index * 0.3}s`;
      svg.appendChild(line);

      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', dotX);
      dot.setAttribute('cy', dotY);
      dot.setAttribute('r', '3.5');
      dot.setAttribute('class', 'ray-dot');
      dot.style.animationDelay = `${index * 0.4}s`;
      svg.appendChild(dot);
    });
  }

  function start() {
    resize();
    initParticles();
    if (!reduceMotion && PARTICLE_COUNT > 0) {
      cancelAnimationFrame(rafId);
      frame();
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(drawRays);
    });
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      resize();
      initParticles();
      drawRays();
    }, 100);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
