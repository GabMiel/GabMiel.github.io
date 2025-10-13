const shapes = document.querySelectorAll('.shape');
const wrongSound = document.getElementById('wrongSound');
const correctSound = document.getElementById('correctSound');

const effects = [
  'hover-glow',
  'hover-bright',
  'hover-hue',
  'hover-shadow',
  'hover-outline'
];

// Assign random hover effect to each shape
shapes.forEach(shape => {
  const randomEffect = effects[Math.floor(Math.random() * effects.length)];
  shape.classList.add(randomEffect);

  shape.addEventListener('click', () => {
    const isCorrect = shape.dataset.correct === "true";

    if (isCorrect) {
      correctSound.play();
      shape.classList.add('correct-clicked');
      setTimeout(() => {
        window.location.href = "../level2/index.html";
      }, 700);
    } else {
      wrongSound.play();
    }
  });
});