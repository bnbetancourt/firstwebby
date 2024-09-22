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

    // Select the image and add the click event to remove the blur
    const image = document.querySelector('img');
    image.addEventListener('click', function() {
        image.classList.add('clicked'); // Remove blur when clicked
    });
};
// JavaScript to add multiple falling hearts and randomize their motion
const numHearts = 20; // Number of hearts to fall
const container = document.body;

for (let i = 0; i < numHearts; i++) {
    let heart = document.createElement("div");
    heart.classList.add("falling-heart");

    // Randomize the position and animation speed for each heart
    heart.style.left = `${Math.random() * 100}vw`; // Random horizontal starting point
    heart.style.animationDuration = `${Math.random() * 3 + 5}s`; // Random fall speed between 5 and 8 seconds
    heart.style.animationDelay = `${Math.random() * 5}s`; // Stagger the starting time for each heart

    container.appendChild(heart);
}
