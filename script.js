// Surprise Button
const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const memories = document.getElementById("memories");
const letter = document.getElementById("letter");
const finalSurprise = document.getElementById("finalSurprise");

surpriseBtn.addEventListener("click", function () {

    message.classList.remove("hidden");
    memories.classList.remove("hidden");
    letter.classList.remove("hidden");
    finalSurprise.classList.remove("hidden");
    surpriseBtn.textContent = "❤️ Surprise Opened ❤️";

    if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "⏸️ Pause Music";
}

});


// Floating Hearts
const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 6000);
}


// Create hearts continuously
setInterval(createHeart, 500);

// Image Zoom
function openImage(imageSrc) {
    const modal = document.getElementById("imageModal");
    const zoomedImage = document.getElementById("zoomedImage");

    zoomedImage.src = imageSrc;
    modal.style.display = "flex";
}

function closeImage() {
    const modal = document.getElementById("imageModal");

    modal.style.display = "none";
}

const loveBtn = document.getElementById("loveBtn");
const loveMessage = document.getElementById("loveMessage");

loveBtn.addEventListener("click", function () {

    loveMessage.classList.remove("hidden");

    loveBtn.textContent = "❤️ I Love You ❤️";

    // Heart Burst
    for (let i = 0; i < 30; i++) {

        const heart = document.createElement("div");

        heart.classList.add("burst-heart");

        heart.innerHTML = "❤️";

        heart.style.left = "50%";
        heart.style.top = "50%";

        const x = (Math.random() - 0.5) * 700;
        const y = (Math.random() - 0.5) * 700;

        heart.style.setProperty("--x", x + "px");
        heart.style.setProperty("--y", y + "px");

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 2000);
    }

});

setTimeout(function () {

    const endingMessage =
        document.getElementById("endingMessage");

    endingMessage.classList.remove("hidden");

}, 1500);

// Replay Surprise
const replayBtn = document.getElementById("replayBtn");

replayBtn.addEventListener("click", function () {

    // Hide everything again
    message.classList.add("hidden");
    memories.classList.add("hidden");
    letter.classList.add("hidden");
    finalSurprise.classList.add("hidden");

    const endingMessage =
        document.getElementById("endingMessage");

    endingMessage.classList.add("hidden");

    // Reset buttons
    surpriseBtn.textContent = "Open Your Surprise ❤️";
    loveBtn.textContent = "Click Here ❤️";

    // Hide love message
    loveMessage.classList.add("hidden");

    // Scroll back to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Background Music
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", function () {

    if (bgMusic.paused) {

        bgMusic.play();

        musicBtn.textContent = "⏸️ Pause Music";

    } else {

        bgMusic.pause();

        musicBtn.textContent = "🎵 Play Music";

    }

});