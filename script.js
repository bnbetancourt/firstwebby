window.onload = function() {
    const title = document.getElementById("title");
    const firstImage = document.getElementById("firstImage");
    const secondImage = document.getElementById("secondImage");
    const envelope = document.getElementById("envelope");
    const hiddenMessage = document.getElementById("hiddenMessage");

    // Typing effect for the title
    let i = 0;
    const titleText = title.innerText;
    title.innerText = '';
    function typeTitle() {
        if (i < titleText.length) {
            title.innerText += titleText.charAt(i);
            i++;
            setTimeout(typeTitle, 100); // Adjust typing speed here
        }
    }
    typeTitle();

    // Pulsing effect for images
    firstImage.classList.add('pulsing');
    secondImage.classList.add('pulsing');

    // Set images to unblur after 2 seconds
    setTimeout(() => {
        firstImage.classList.remove('pulsing');
        secondImage.classList.remove('pulsing');
    }, 2000);

    // Envelope click logic
    envelope.addEventListener('click', function() {
        hiddenMessage.style.display = 'block';
        hiddenMessage.classList.add('typing');
    });
};
