/* =========================
   Elements
========================= */

const surpriseBtn = document.getElementById("surpriseBtn");
const message = document.getElementById("message");
const memories = document.getElementById("memories");
const letter = document.getElementById("letter");
const finalSurprise = document.getElementById("finalSurprise");

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

const loveBtn = document.getElementById("loveBtn");
const loveMessage = document.getElementById("loveMessage");

const replayBtn = document.getElementById("replayBtn");

const heartsContainer =
    document.getElementById("hearts-container");

const endingMessage =
    document.getElementById("endingMessage");


/* =========================
   Mobile Detection
========================= */

const isMobile =
    window.matchMedia("(max-width: 600px)").matches;


/* =========================
   Surprise Button
========================= */

surpriseBtn.addEventListener("click", function () {

    message.classList.remove("hidden");
    memories.classList.remove("hidden");
    letter.classList.remove("hidden");
    finalSurprise.classList.remove("hidden");

    surpriseBtn.textContent =
        "❤️ Surprise Opened ❤️";

    // Start music after user interaction
    if (bgMusic.paused) {

        bgMusic.play()
            .then(function () {

                musicBtn.textContent =
                    "⏸️ Pause Music";

            })
            .catch(function () {

                musicBtn.textContent =
                    "🎵 Play Music";

            });

    }

});


/* =========================
   Floating Hearts
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.textContent = "❤️";

    heart.style.left =
        Math.random() * 100 + "%";

    // Smaller hearts on mobile
    if (isMobile) {

        heart.style.fontSize =
            Math.random() * 10 + 12 + "px";

    } else {

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

    }

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {

        if (heart.parentNode) {
            heart.remove();
        }

    }, 6500);

}


/*
    Desktop:
    1 heart every 500ms

    Mobile:
    1 heart every 1200ms
*/

const heartInterval =
    isMobile ? 1200 : 500;

setInterval(createHeart, heartInterval);


/* =========================
   Image Zoom
========================= */

function openImage(imageSrc) {

    const modal =
        document.getElementById("imageModal");

    const zoomedImage =
        document.getElementById("zoomedImage");

    zoomedImage.src = imageSrc;

    modal.style.display = "flex";
}


function closeImage() {

    const modal =
        document.getElementById("imageModal");

    const zoomedImage =
        document.getElementById("zoomedImage");

    modal.style.display = "none";

    // Release image memory after closing
    zoomedImage.src = "";
}


/* Close modal by clicking outside image */

document
    .getElementById("imageModal")
    .addEventListener("click", function (event) {

        if (event.target === this) {
            closeImage();
        }

    });


/* =========================
   Love Button
========================= */

loveBtn.addEventListener("click", function () {

    loveMessage.classList.remove("hidden");

    loveBtn.textContent =
        "❤️ I Love You ❤️";


    /*
        Desktop = 30 hearts
        Mobile = 15 hearts
    */

    const burstCount =
        isMobile ? 15 : 30;


    for (let i = 0; i < burstCount; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("burst-heart");

        heart.textContent = "❤️";

        heart.style.left = "50%";
        heart.style.top = "50%";

        const spread =
            isMobile ? 400 : 700;

        const x =
            (Math.random() - 0.5) * spread;

        const y =
            (Math.random() - 0.5) * spread;

        heart.style.setProperty(
            "--x",
            x + "px"
        );

        heart.style.setProperty(
            "--y",
            y + "px"
        );

        document.body.appendChild(heart);

        setTimeout(function () {

            if (heart.parentNode) {
                heart.remove();
            }

        }, 1800);

    }


    /* Show ending message after 1.5 seconds */

    setTimeout(function () {

        endingMessage.classList.remove("hidden");

        endingMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 1500);

});


/* =========================
   Replay Surprise
========================= */

replayBtn.addEventListener("click", function () {

    message.classList.add("hidden");
    memories.classList.add("hidden");
    letter.classList.add("hidden");
    finalSurprise.classList.add("hidden");

    endingMessage.classList.add("hidden");

    loveMessage.classList.add("hidden");

    surpriseBtn.textContent =
        "Open Your Surprise 🎁";

    loveBtn.textContent =
        "Click Here ❤️";


    /* Stop and reset music */

    bgMusic.pause();

    bgMusic.currentTime = 0;

    musicBtn.textContent =
        "🎵 Play Music";


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   Background Music
========================= */

musicBtn.addEventListener("click", function () {

    if (bgMusic.paused) {

        bgMusic.play()
            .then(function () {

                musicBtn.textContent =
                    "⏸️ Pause Music";

            })
            .catch(function () {

                musicBtn.textContent =
                    "🎵 Play Music";

            });

    } else {

        bgMusic.pause();

        musicBtn.textContent =
            "🎵 Play Music";

    }

});
