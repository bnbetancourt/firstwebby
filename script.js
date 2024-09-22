window.onload = function() {
    const body = document.body;

    // Typing effect for text
    const dynamicText = document.getElementById("dynamicText");
    const envelopeText = document.getElementById("envelopeText");
    const surpriseMessage = document.getElementById("surpriseMessage");
    const text1 = "Hey Jov's! miss you - Play the song first";
    const text2 = "Put your finger on the envelope, HURRY";
    let index1 = 0, index2 = 0;

    function typeText(text, element, index, callback) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => typeText(text, element, index, callback), 100); // Typing speed
        } else if (callback) {
            callback();
        }
    }

    typeText(text1, dynamicText, index1);
    setTimeout(() => typeText(text2, envelopeText, index2), text1.length * 100 + 500);

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
    envelope.innerHTML = "💌";

    const thankYouMessage = "Being with you feels like a drive back home from the beach, down PCH, all windows down. I can never fully explain just how I feel about you because words will never be enough. You entering my life has been the best thing to ever happen to me and I enjoy every second of my days spent with you. You mean more than the world to me pussyboy, I hope I can even get close to giving to as much as you deserve, because you honestly deserve more than what this world has to offer";
    let index = 0;
    message.innerHTML = ""; 

    function typeSurpriseMessage() {
        if (index < thankYouMessage.length) {
            message.innerHTML += thankYouMessage.charAt(index);
            index++;
            setTimeout(typeSurpriseMessage, 100);
        } else {
            setTimeout(() => {
                clearContent();
                setTimeout(launchHeartBomb, 2000); // Start bomb after 2 seconds
            }, 1000);
        }
    }

    typeSurpriseMessage();
}

function clearContent() {
    const dynamicText = document.getElementById("dynamicText");
    const envelopeText = document.getElementById("envelopeText");
    const surpriseMessage = document.getElementById("surpriseMessage");
    const images = document.querySelectorAll('.image-container img');

    dynamicText.innerHTML = "";
    envelopeText.innerHTML = "";
    surpriseMessage.innerHTML = "";
    images.forEach(img => img.style.display = 'none'); // Hide images
}

function launchHeartBomb() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let countdown = 3;
    const countdownElement = document.createElement('div');
    countdownElement.style.position = 'absolute';
    countdownElement.style.top = '50%';
    countdownElement.style.left = '50%';
    countdownElement.style.transform = 'translate(-50%, -50%)';
    countdownElement.style.fontSize = '48px';
    countdownElement.style.color = 'white';
    document.body.appendChild(countdownElement);

    const countdownInterval = setInterval(() => {
        countdownElement.innerHTML = countdown;
        countdown--;
        if (countdown < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "";
            explodeHeart();
        }
    }, 1000);
}

function explodeHeart() {
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    const heartShape = new Path2D();
    heartShape.moveTo(75, 40);
    heartShape.bezierCurveTo(75, 37, 70, 25, 50, 25);
    heartShape.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    heartShape.bezierCurveTo(20, 80, 40, 102, 75, 120);
    heartShape.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    heartShape.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    heartShape.bezierCurveTo(85, 25, 75, 37, 75, 40);
    
    let scale = 1;
    const explode = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(scale, scale);
        ctx.fill(heartShape);
        ctx.restore();
        scale += 0.05; // Increase the scale more slowly
        if (scale < 5) {
            requestAnimationFrame(explode);
        } else {
            createLittleHearts();
        }
    };

    explode();
}

function createLittleHearts() {
    const littleHeartsCount = 50; // Number of hearts to create
    const hearts = [];

    for (let i = 0; i < littleHeartsCount; i++) {
        const heart = {
            x: canvas.width / 2,
            y: canvas.height / 2,
            size: Math.random() * 10 + 5, // Size of the heart
            angle: Math.random() * 2 * Math.PI, // Random angle
            speed: Math.random() * 2 + 1 // Speed of the heart
        };
        hearts.push(heart);
    }

    let animationFrame;

    const animateHearts = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        hearts.forEach(heart => {
            heart.x += Math.cos(heart.angle) * heart.speed;
            heart.y += Math.sin(heart.angle) * heart.speed;
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
            ctx.fill();
        });

        if (hearts.length > 0) {
            animationFrame = requestAnimationFrame(animateHearts);
        } else {
            setTimeout(() => location.reload(), 2000); // Refresh after 2 seconds
        }
    };

    animateHearts();
}
