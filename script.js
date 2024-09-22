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
            // Start heart bomb countdown after last message is printed
            startHeartBomb();
        }
    }

    typeSurpriseMessage();
}

function startHeartBomb() {
    const heartBomb = document.getElementById("heartBomb");
    heartBomb.style.display = "block";
    heartBomb.innerHTML = "3"; // Start with 3

    let count = 3;
    const countdown = setInterval(() => {
        count--;
        if (count > 0) {
            heartBomb.innerHTML = count;
        } else {
            heartBomb.innerHTML = ""; // Clear countdown
            clearInterval(countdown);
            explodeHearts();
        }
    }, 1000);
}

function explodeHearts() {
    const heartCount = 50; // Number of hearts to explode
    const heartElements = [];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("div");
        heart.className = "falling-heart";
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 1 + 1}s`;
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
}
