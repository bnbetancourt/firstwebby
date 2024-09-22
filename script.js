window.onload = function() {
    const body = document.body;

    // Typing effect for text
    const dynamicText = document.getElementById("dynamicText");
    const envelopeText = document.getElementById("envelopeText");
    const surpriseMessage = document.getElementById("surpriseMessage");
    const text1 = "Hey Pussy!";
    const text2 = "Click the envelope to reveal a surprise message!";
    const thankYouMessage = "Thank you for being in my life!";
    let index1 = 0, index2 = 0, index3 = 0;

    function typeText(text, element, index) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => typeText(text, element, index), 100); // Typing speed
        }
    }

    typeText(text1, dynamicText, index1); // Start typing effect for the main text
    setTimeout(() => typeText(text2, envelopeText, index2), text1.length * 100 + 500); // Delay for the envelope text

    // Delay the unblur effect for 2 seconds after the page loads
    const img1 = document.getElementById('firstImage');
    const img2 = document.getElementById('triggerImage');

    setTimeout(() => {
        img1.classList.remove('blurred');
        img2.classList.remove('blurred');
        setTimeout(() => {
            img1.classList.add('fade');
            img2.classList.add('fade');
        }, 2000);
    }, 2000);

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
    let index = 0;
    function typeSurpriseMessage() {
        if (index < thankYouMessage.length) {
            message.innerHTML += thankYouMessage.charAt(index);
            index++;
            setTimeout(typeSurpriseMessage, 100); // Typing speed
        }
    }
    typeSurpriseMessage();
}
