window.onload = function() {
    const body = document.body;

    // Typing effect for text
    const text = "Hey Jov's!";
    const dynamicText = document.getElementById("dynamicText");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            dynamicText.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, 100); // Typing speed
        }
    }

    typeText(); // Start typing effect

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

    // Delay the unblur effect for 2 seconds after the page loads
    setTimeout(() => {
        img1.classList.remove('blurred');
        img2.classList.remove('blurred');
    }, 2000);

    // Play audio
    const audio = document.createElement('audio');
    audio.src = 'https://p.scdn.co/mp3-preview/5d7f006f8c3c3cdb56579cb43a81e8c1c5471f89?cid=6744dbb98d0e49b6a2e37766d7d4ab6e';
    audio.autoplay = true;
    audio.loop = true;
    document.body.appendChild(audio);
};
