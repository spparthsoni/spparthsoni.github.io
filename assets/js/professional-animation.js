// Professional Background Animation
// Creates a sophisticated, tech-focused animated background

class ProfessionalAnimation {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.container.appendChild(this.canvas);
    
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
    this.nodes = [];
    this.connections = [];
    
    // Create network nodes
    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
  }
  
  drawNode(node) {
    // Gradient for nodes
    const gradient = this.ctx.createRadialGradient(
      node.x, node.y, 0,
      node.x, node.y, node.radius * 3
    );
    gradient.addColorStop(0, 'rgba(187, 134, 252, 0.8)');
    gradient.addColorStop(1, 'rgba(187, 134, 252, 0)');
    
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Core node
    this.ctx.fillStyle = '#bb86fc';
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
  
  drawConnections() {
    const maxDistance = 150;
    
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.3;
          
          // Gradient line
          const gradient = this.ctx.createLinearGradient(
            this.nodes[i].x, this.nodes[i].y,
            this.nodes[j].x, this.nodes[j].y
          );
          gradient.addColorStop(0, `rgba(187, 134, 252, ${opacity})`);
          gradient.addColorStop(0.5, `rgba(106, 0, 187, ${opacity * 0.5})`);
          gradient.addColorStop(1, `rgba(187, 134, 252, ${opacity})`);
          
          this.ctx.strokeStyle = gradient;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.nodes[i].x, this.nodes[i].y);
          this.ctx.lineTo(this.nodes[j].x, this.nodes[j].y);
          this.ctx.stroke();
        }
      }
    }
  }
  
  update() {
    this.nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off edges
      if (node.x < 0 || node.x > this.canvas.width) node.vx *= -1;
      if (node.y < 0 || node.y > this.canvas.height) node.vy *= -1;
      
      // Keep within bounds
      node.x = Math.max(0, Math.min(this.canvas.width, node.x));
      node.y = Math.max(0, Math.min(this.canvas.height, node.y));
    });
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.drawConnections();
    this.nodes.forEach(node => this.drawNode(node));
    this.update();
    
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

