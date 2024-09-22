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

    typeText(text1, dynamicText, index1); // Start typing effect for the main text
    setTimeout(() => typeText(text2, envelopeText, index2), text1.length * 100 + 500); // Delay for the envelope text

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
    envelope.innerHTML = "💌"; // Optionally add an icon

    // Typing effect for the surprise message
    const thankYouMessage = "Being with you feels like a drive back home from the beach, down PCH, all windows down. I can never fully explain just how I feel about you because words will never be enough. You entering my life has been the best thing to ever happen to me and I enjoy every second of my days spent with you. You mean more than the world to me pussyboy, I hope I can even get close to giving to as much as you deserve, because you honestly deserve more than what this world has to offer";
    let index = 0;
    message.innerHTML = ""; // Clear previous content

    function typeSurpriseMessage() {
        if (index < thankYouMessage.length) {
            message.innerHTML += thankYouMessage.charAt(index);
            index++;
            setTimeout(typeSurpriseMessage, 100); // Typing speed
        } else {
            // Trigger fireworks and refresh after last message is printed
            setTimeout(() => {
                launchFirework();
                setTimeout(() => location.reload(), 3000); // Refresh after 3 seconds
            }, 1000);
        }
    }

    typeSurpriseMessage();
}

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
    
    let radius = 0;
    
    const animateFirework = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 0, 0, 1)";
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.scale(radius, radius);
        ctx.fill(heartShape);
        ctx.restore();
        radius += 0.02;
        if (radius < 5) {
            requestAnimationFrame(animateFirework);
        }
    };
    
    animateFirework();
}
