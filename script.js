document.querySelectorAll('.glitch-text').forEach(link => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=-{}[]|:;<>,.?/~';
    const realText = link.getAttribute('data-text');
    let glitchInterval;
    
    link.addEventListener('mouseenter', () => {
        let revealedText = ""; // Final text to gradually be revealed
        let i = 0;
        
        glitchInterval = setInterval(() => {
            let glitchText = "";
            
            for (let j = 0; j < realText.length; j++) {
                if (j < i) {
                    glitchText += `<span>${realText[j]}</span>`; // Show the actual character
                
                } else {
                    glitchText += `<span>${characters[Math.floor(Math.random() * characters.length)]}</span>`; // Random characters
                }
            }
            
            link.innerHTML = glitchText;
            
            // Gradually reveal the real text one character at a time
            if (i < realText.length) {
                i++;
            } else {
                clearInterval(glitchInterval); // Stop once all characters are revealed
            }
        }, 100); // Faster update frequency for smoothness
    });
    
    link.addEventListener('mouseleave', () => {
        clearInterval(glitchInterval);
        link.innerText = realText; // Show the real text immediately when the mouse leaves
    });
});
