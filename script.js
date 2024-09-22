function explodeHearts() {
    const heartCount = 50; // Number of hearts to explode
    const heartElements = [];
    
    const heartBomb = document.createElement("div");
    heartBomb.className = "heart-bomb";
    heartBomb.style.position = "fixed";
    heartBomb.style.left = "50%";
    heartBomb.style.top = "50%";
    heartBomb.style.transform = "translate(-50%, -50%)";
    heartBomb.style.fontSize = "100px";
    heartBomb.innerHTML = "💣"; // Heart bomb emoji
    document.body.appendChild(heartBomb);

    setTimeout(() => {
        heartBomb.style.fontSize = "0px"; // Shrink heart bomb
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement("div");
            heart.className = "falling-heart";
            heart.style.position = "fixed";
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.animationDuration = `${Math.random() * 1 + 2}s`; // Longer duration for falling effect
            heart.innerHTML = "❤️"; // Use heart emoji
            heart.style.opacity = Math.random();
            heartElements.push(heart);
            document.body.appendChild(heart);
        }

        setTimeout(() => {
            heartElements.forEach(heart => {
                heart.remove();
            });
            location.reload(); // Refresh after hearts explode
        }, 3000); // Keep hearts for 3 seconds
    }, 1000); // Delay before explosion
}
