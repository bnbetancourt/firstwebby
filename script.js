window.onload = function() {
    // Canvas setup
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Helper function to create a random number in a range
    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Firework class
    class Firework {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.radius = random(3, 6);
            this.color = `hsl(${random(0, 360)}, 100%, 50%)`;
            this.alpha = 1;
            this.velocityX = random(-3, 3);
            this.velocityY = random(-3, 3);
        }

        update() {
            this.x += this.velocityX;
            this.y += this.velocityY;
            this.alpha -= 0.01;
        }

        draw() {
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Create an array to hold fireworks
    const fireworks = [];

    // Fireworks animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (Math.random() < 0.05) {
            for (let i = 0; i < random(10, 20); i++) {
                fireworks.push(new Firework(random(0, canvas.width), random(0, canvas.height)));
            }
        }

        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            if (firework.alpha <= 0) {
                fireworks.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    animate();
};
