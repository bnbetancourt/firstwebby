function launchFirework() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const heartShape = new Path2D();
    heartShape.moveTo(75, 40);
    heartShape.bezierCurveTo(75, 37, 70, 25, 50, 25);
    heartShape.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    heartShape.bezierCurveTo(20, 80, 40, 102, 75, 120);
    heartShape.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    heartShape.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    heartShape.bezierCurveTo(85, 25, 75, 37, 75, 40);
    
    let positionY = canvas.height; // Start from the bottom
    const centerX = canvas.width / 2; // Center horizontally
    let radius = 1;

    const animateFirework = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.save();
        ctx.translate(centerX, positionY); // Center the heart
        ctx.scale(radius, radius);
        ctx.fill(heartShape);
        ctx.restore();

        // Update position and radius for animation
        if (positionY > canvas.height / 2) {
            positionY -= 5; // Move up
            radius += 0.05; // Grow the heart
            requestAnimationFrame(animateFirework);
        } else {
            explodeHearts(); // Trigger the explosion when the heart reaches the top
        }
    };

    const explodeHearts = () => {
        const smallHearts = [];
        const numHearts = 20; // Number of small hearts

        // Create small hearts
        for (let i = 0; i < numHearts; i++) {
            smallHearts.push({
                x: centerX,
                y: positionY,
                radius: 5,
                angle: Math.random() * 2 * Math.PI,
                speed: Math.random() * 3 + 2, // Random speed
            });
        }

        const animateExplosion = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            smallHearts.forEach((heart, index) => {
                ctx.fillStyle = "rgba(255, 0, 0, 1)";
                ctx.save();
                ctx.translate(heart.x, heart.y);
                ctx.scale(heart.radius, heart.radius);
                ctx.fill(heartShape);
                ctx.restore();

                // Update position for explosion effect
                heart.x += heart.speed * Math.cos(heart.angle);
                heart.y += heart.speed * Math.sin(heart.angle);
                heart.radius *= 0.95; // Shrink the heart

                // Remove heart if it's too small
                if (heart.radius < 0.1) {
                    smallHearts.splice(index, 1);
                }
            });

            if (smallHearts.length > 0) {
                requestAnimationFrame(animateExplosion);
            } else {
                setTimeout(() => location.reload(), 1000); // Refresh the page after explosion
            }
        };

        animateExplosion();
    };

    animateFirework();
}
