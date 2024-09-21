window.onload = function() {
    // Select the body element where hearts will be appended
    const body = document.body;

    // Function to generate a random number between min and max
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Function to create a heart element
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('falling-heart');
        
        // Set random position for each heart
        heart.style.left = `${random(0, 100)}vw`;

        // Set random animation duration so hearts fall at different speeds
        heart.style.animationDuration = `${random(3, 6)}s`;

        body.appendChild(heart);

        // Remove the heart after it falls out of view
        setTimeout(() => {
            heart.remove();
        }, 6000); // Match the longest animation duration
    }

    // Create hearts at regular intervals
    setInterval(createHeart, 300); // Adjust this value to control the heart spawn rate
};
