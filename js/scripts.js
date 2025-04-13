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
  
document.addEventListener("DOMContentLoaded", function() {
    // Typing animation for name
    const name = "Abdullah Mobeen";
    const nameElement = document.getElementById("name");
    
    if (nameElement) {
        let i = 0;
        function typeLetter() {
            if (i < name.length) {
                nameElement.innerHTML += name.charAt(i);
                i++;
                setTimeout(typeLetter, 150);
            }
        }
        typeLetter();
    }
    
    // Set current year in footer
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Blog tag filtering
    const tagButtons = document.querySelectorAll('.tag-filter');
    if (tagButtons.length > 0) {
        tagButtons.forEach(button => {
            button.addEventListener('click', function() {
                const tag = this.getAttribute('data-tag');
                const blogPosts = document.querySelectorAll('.blog-post');
                
                if (tag === 'all') {
                    blogPosts.forEach(post => {
                        post.style.display = 'block';
                    });
                } else {
                    blogPosts.forEach(post => {
                        if (post.getAttribute('data-tags').includes(tag)) {
                            post.style.display = 'block';
                        } else {
                            post.style.display = 'none';
                        }
                    });
                }
                
                // Update active tag button
                tagButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
});
  