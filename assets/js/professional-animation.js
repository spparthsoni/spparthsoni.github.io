// Professional Gradient Wave Animation
// Creates elegant, flowing gradient waves

class ProfessionalAnimation {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    
    this.time = 0;
    this.waves = [];
    
    this.resize();
    this.init();
    this.animate();
    
    window.addEventListener('resize', () => this.resize());
  }
  
  resize() {
    this.canvas.width = this.container.offsetWidth;
    this.canvas.height = this.container.offsetHeight;
  }
  
  init() {
    // Create multiple wave layers
    this.waves = [
      { amplitude: 30, frequency: 0.01, speed: 0.02, offset: 0, color: 'rgba(187, 134, 252, 0.1)' },
      { amplitude: 40, frequency: 0.015, speed: 0.015, offset: 50, color: 'rgba(106, 0, 187, 0.08)' },
      { amplitude: 25, frequency: 0.012, speed: 0.025, offset: 100, color: 'rgba(187, 134, 252, 0.12)' }
    ];
  }
  
  drawWave(wave, time) {
    this.ctx.beginPath();
    this.ctx.moveTo(0, this.canvas.height / 2);
    
    // Draw smooth wave
    for (let x = 0; x < this.canvas.width; x++) {
      const y = this.canvas.height / 2 + 
                Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude +
                Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude / 2);
      
      if (x === 0) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    
    // Complete the shape
    this.ctx.lineTo(this.canvas.width, this.canvas.height);
    this.ctx.lineTo(0, this.canvas.height);
    this.ctx.closePath();
    
    // Create gradient fill
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);
    gradient.addColorStop(0, wave.color);
    gradient.addColorStop(1, 'rgba(187, 134, 252, 0)');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fill();
  }
  
  drawGeometricShapes() {
    // Add subtle floating geometric shapes
    const shapes = 5;
    for (let i = 0; i < shapes; i++) {
      const x = (this.canvas.width / shapes) * i + Math.sin(this.time * 0.001 + i) * 50;
      const y = this.canvas.height / 3 + Math.cos(this.time * 0.0015 + i) * 30;
      const size = 20 + Math.sin(this.time * 0.002 + i) * 5;
      const rotation = this.time * 0.001 + i;
      
      this.ctx.save();
      this.ctx.translate(x, y);
      this.ctx.rotate(rotation);
      
      // Draw hexagon
      this.ctx.beginPath();
      for (let j = 0; j < 6; j++) {
        const angle = (Math.PI / 3) * j;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (j === 0) {
          this.ctx.moveTo(px, py);
        } else {
          this.ctx.lineTo(px, py);
        }
      }
      this.ctx.closePath();
      
      this.ctx.strokeStyle = 'rgba(187, 134, 252, 0.15)';
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
      
      this.ctx.restore();
    }
  }
  
  animate() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw waves
    this.waves.forEach(wave => this.drawWave(wave, this.time));
    
    // Draw geometric shapes
    this.drawGeometricShapes();
    
    this.time++;
    requestAnimationFrame(() => this.animate());
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const homeSection = document.querySelector('#home section');
  if (homeSection) {
    // Remove old particles div if exists
    const oldParticles = document.getElementById('particles-js');
    if (oldParticles) {
      oldParticles.id = 'professional-animation';
    }
    
    new ProfessionalAnimation('professional-animation');
  }
});

