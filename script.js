window.onload = function() {
    const body = document.body;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');

        // Set random position and speed
        heart.style.left = `${random(0, 100)}vw`;
        heart.style.animationDuration = `${random(3, 6)}s`;

        body.appendChild(heart);

        // Remove the heart after it falls out of view
        setTimeout(() => {
            heart.remove();
        }, 6000); // Match longest animation duration
    }

    setInterval(createHeart, 300); // Spawn hearts

    const image = document.querySelector('img');
    image.addEventListener('click', function() {
        image.classList.add('clicked'); // Remove blur when clicked
    });
};
