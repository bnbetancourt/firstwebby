window.onload = function() {
    const body = document.body;

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

    img1.classList.remove('blurred'); // Slowly unblur first image
    img2.classList.remove('blurred'); // Slowly unblur second image

    setTimeout(() => {
        img1.classList.remove('blurred');
        img2.classList.remove('blurred');
    }, 2000); // Adjust delay for unblur effect
};
