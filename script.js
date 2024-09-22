window.onload = function() {
    const firstImage = document.getElementById('firstImage');
    const secondImage = document.getElementById('secondImage');
    const envelope = document.getElementById('envelope');
    const message = document.getElementById('message');
    
    // Unblur images after 2 seconds
    setTimeout(() => {
        firstImage.classList.remove('blurred');
        secondImage.classList.remove('blurred');
    }, 2000);

    // Typing effect for "thank you for being in my life"
    const typingEffect = (text, element, delay) => {
        const textArray = text.split('');
        element.innerHTML = '';

        textArray.forEach((char, index) => {
            setTimeout(() => {
                element.innerHTML += char;
            }, delay * index);
        });
    };

    // Display main text with typing effect
    typingEffect("hey pussy!", document.getElementById('mainText'), 100);

    // Envelope click event
    envelope.onclick = function() {
        message.classList.remove('hidden-message');
        typingEffect("thank you for being in my life", message, 100);
    };
};
