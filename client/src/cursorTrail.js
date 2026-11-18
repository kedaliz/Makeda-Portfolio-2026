/**
 * Cursor Trail Effect
 * Creates colorful particles that follow the mouse cursor
 */

class CursorTrail {
  constructor() {
    this.particles = [];
    this.maxParticles = 15;
    this.colors = [
      '#FF6B6B',  // Coral red
      '#FFA94D',  // Warm orange
      '#FFD93D',  // Golden yellow
      '#FF922B',  // Deep orange
      '#FFB84D',  // Light orange
    ];
    this.emojis = ['✨', '🌟', '💫', '⭐', '🎨'];
    
    this.init();
  }

  init() {
    // Listen for mouse move events
    document.addEventListener('mousemove', (e) => this.createParticle(e));
    
    // Animation loop
    this.animate();
  }

  createParticle(event) {
    if (this.particles.length >= this.maxParticles) {
      this.particles.shift();
    }

    const particle = document.createElement('div');
    particle.classList.add('cursor-trail');
    
    // Random emoji and color
    const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)];
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    
    particle.textContent = emoji;
    particle.style.color = color;
    particle.style.left = event.clientX + 'px';
    particle.style.top = event.clientY + 'px';
    
    // Random offset for trail effect
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 50 + 20;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    particle.style.setProperty('--tx', tx + 'px');
    particle.style.setProperty('--ty', ty + 'px');
    
    document.body.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => particle.remove(), 1000);
  }

  animate() {
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize cursor trail when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new CursorTrail();
});

export default CursorTrail;
