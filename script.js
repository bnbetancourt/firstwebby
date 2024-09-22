window.onload = function() {
    const body = document.body;

    // Typing effect for text
    const dynamicText = document.getElementById("dynamicText");
    const envelopeText = document.getElementById("envelopeText");
    const text1 = "Hey Pussy!";
    const text2 = "Click the envelope to reveal a surprise message!";
    let index1 = 0, index2 = 0;

    function typeText(text, element, index) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => typeText(text, element, index), 100); // Typing speed
        }
    }

    typeText(text1, dynamicText, index1); // Start typing effect for the main text
    setTimeout(() => typeText(text2, envelopeText, index2), text1.length * 100 + 500); // Delay for the envelope text

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');

        heart.style.left = `${random(0, 100)}vw`;
        heart.style.animationDuration = `${random(3, 6)}s`;

        body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    setInterval(createHeart, 300);

    const img1 = document.getElementById('firstImage');
    const img2 = document.getElementById('triggerImage');

    // Play audio
    const audio = document.createElement('audio');
    audio.src = 'https://p.scdn.co/mp3-preview/5d7f006f8c3c3cdb56579cb43a81e8c1c5471f89?cid=6744dbb98d0e49b6a2e37766d7d4ab6e';
    audio.autoplay = true;
    audio.loop = true;
    document.body.appendChild(audio);
};

// Show surprise message when envelope is clicked
function showMessage() {
    const message = document.getElementById("surpriseMessage");
    message.classList.remove("hidden");
    const envelope = document.getElementById("envelope");
    envelope.innerHTML = "💌"; // Optionally add an icon
}
