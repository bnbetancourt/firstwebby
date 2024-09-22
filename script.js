window.onload = function() {
    const body = document.body;

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');

        // Set random position for each heart
        heart.style.left = `${random(0, 100)}vw`;
        heart.style.animationDuration = `${random(3, 6)}s`; // Random fall speed

        body.appendChild(heart);

        // Remove the heart after it falls out of view
        setTimeout(() => {
            heart.remove();
        }, 6000); // Match the longest animation duration
    }

    // Create hearts at regular intervals
    setInterval(createHeart, 300); // Adjust this value to control the heart spawn rate

    // Image click to remove blur
    const img1 = document.getElementById('firstImage');
    const img2 = document.getElementById('triggerImage');

    img1.addEventListener('click', function() {
        img1.classList.remove('blurred'); // Remove blur for first image
    });

    img2.addEventListener('click', function() {
        img2.classList.remove('blurred'); // Remove blur for second image
    });
};
