// Utility function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // Add event listeners to all elements with the class 'name-letter'
  const nameLetters = document.querySelectorAll('.name-letter');
  nameLetters.forEach((letter) => {
    letter.addEventListener('mouseover', () => {
      letter.style.color = getRandomColor();
    });
  
    letter.addEventListener('mouseout', () => {
      letter.style.color = 'initial';
    });
  });
  