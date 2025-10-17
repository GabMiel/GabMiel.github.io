const button = document.getElementById('sparkleButton');

button.addEventListener('click', () => {
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  // Generate sparkles randomly anywhere
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    const hue = Math.random() * 360;
    const size = 30 + Math.random() * 50;

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = `radial-gradient(circle, hsl(${hue} 100% 75%) 0%, transparent 70%)`;

    // Random position anywhere on screen
    const x = Math.random() * screenW;
    const y = Math.random() * screenH;
    particle.style.left = `${x - size / 2}px`;
    particle.style.top = `${y - size / 2}px`;

    document.body.appendChild(particle);

    particle.addEventListener('animationend', () => particle.remove());
  }

  // Delay navigation slightly so sparkles show first
  setTimeout(() => {
    window.open(
      'https://www.figma.com/design/ycRRk8i4bmXqlBExN7GgFT/GITHUB-WEBSITE?node-id=0-1&t=lj3Tz19RK5boMy8K-1',
      '_blank'
    );
  }, 1000);
});
