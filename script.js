/* =================================
   PASSWORD
================================= */

const PASSWORD = "My Love";

const passwordScreen =
    document.getElementById("passwordScreen");

const mainContent =
    document.getElementById("mainContent");

const passwordInput =
    document.getElementById("passwordInput");

const unlockBtn =
    document.getElementById("unlockBtn");

const passwordError =
    document.getElementById("passwordError");


function unlockWebsite() {

    const enteredPassword =
        passwordInput.value.trim();

    if (enteredPassword === PASSWORD) {

        passwordScreen.classList.add(
            "hidden"
        );

        mainContent.classList.remove(
            "hidden"
        );

        createHeartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            35
        );

        startHearts();

        createLoveHeart();

    } else {

        passwordError.textContent =
            "Wrong password ❤️ Try again...";

        passwordInput.value = "";

        passwordInput.focus();

    }
}


unlockBtn.addEventListener(
    "click",
    unlockWebsite
);


passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            unlockWebsite();

        }

    }
);


/* =================================
   MAIN ELEMENTS
================================= */

const surpriseBtn =
    document.getElementById(
        "surpriseBtn"
    );

const message =
    document.getElementById(
        "message"
    );

const memories =
    document.getElementById(
        "memories"
    );

const letter =
    document.getElementById(
        "letter"
    );

const finalSurprise =
    document.getElementById(
        "finalSurprise"
    );

const loveBtn =
    document.getElementById(
        "loveBtn"
    );

const loveMessage =
    document.getElementById(
        "loveMessage"
    );

const endingMessage =
    document.getElementById(
        "endingMessage"
    );

const replayBtn =
    document.getElementById(
        "replayBtn"
    );


/* =================================
   LOVE HEART TEXT ANIMATION
================================= */

function createLoveHeart() {

    const container =
        document.getElementById(
            "loveHeart"
        );

    container.innerHTML = "";


    /*
       Heart mathematical equation:

       x = 16 sin³(t)

       y =
       13cos(t)
       - 5cos(2t)
       - 2cos(3t)
       - cos(4t)
    */


    const words = [];

    const totalWords = 170;


    for (
        let i = 0;
        i < totalWords;
        i++
    ) {

        const t =
            (Math.PI * 2 * i)
            / totalWords;


        const x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );


        const y =
            13 *
                Math.cos(t)
            -
            5 *
                Math.cos(2 * t)
            -
            2 *
                Math.cos(3 * t)
            -
            Math.cos(4 * t);


        words.push({
            x: x,
            y: y
        });

    }


    /*
       Create several layers
       so the heart looks thick.
    */

    const layers = 4;


    for (
        let layer = 0;
        layer < layers;
        layer++
    ) {

        words.forEach(
            function(point, index) {

                const word =
                    document.createElement(
                        "span"
                    );

                word.classList.add(
                    "love-word"
                );

                word.textContent =
                    "I love you";


                /*
                   Convert mathematical
                   heart into screen position.
                */

                const scale = 10;

                const centerX = 195;

                const centerY = 175;


                const layerOffset =
                    (layer - 1.5) * 2;


                const left =
                    centerX +
                    point.x * scale +
                    layerOffset;


                const top =
                    centerY -
                    point.y * scale +
                    layerOffset;


                word.style.left =
                    left + "px";

                word.style.top =
                    top + "px";


                /*
                   Small random animation
                   delay creates a living effect.
                */

                word.style.animationDelay =
                    (
                        Math.random() * 2
                    ) + "s";


                container.appendChild(
                    word
                );

            }
        );

    }
}


/* =================================
   FALLING HEARTS
================================= */

const heartsContainer =
    document.getElementById(
        "hearts-container"
    );

let heartsStarted = false;


function createHeart() {

    if (!heartsStarted) return;


    const heart =
        document.createElement(
            "div"
        );


    heart.classList.add(
        "heart"
    );


    heart.innerHTML =
        Math.random() > 0.5
            ? "❤️"
            : "💕";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        Math.random() * 18 +
        14 +
        "px";


    heart.style.animationDuration =
        Math.random() * 3 +
        5 +
        "s";


    heartsContainer.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        9000
    );
}


function startHearts() {

    if (heartsStarted) return;

    heartsStarted = true;

    setInterval(
        createHeart,
        700
    );
}


/* =================================
   SURPRISE BUTTON
================================= */

surpriseBtn.addEventListener(
    "click",
    function() {

        message.classList.remove(
            "hidden"
        );

        letter.classList.remove(
            "hidden"
        );

        memories.classList.remove(
            "hidden"
        );

        finalSurprise.classList.remove(
            "hidden"
        );


        surpriseBtn.textContent =
            "❤️ Surprise Opened ❤️";


        startMusic();


        createHeartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            45
        );


        setTimeout(
            function() {

                letter.scrollIntoView({
                    behavior: "smooth"
                });

            },
            500
        );

    }
);


/* =================================
   ENVELOPE
================================= */

const envelope =
    document.getElementById(
        "envelope"
    );


envelope.addEventListener(
    "click",
    function() {

        envelope.classList.toggle(
            "open"
        );


        if (
            envelope.classList.contains(
                "open"
            )
        ) {

            createHeartBurst(
                window.innerWidth / 2,
                window.innerHeight / 2,
                30
            );

        }

    }
);


/* =================================
   HEART BURST
================================= */

function createHeartBurst(
    centerX,
    centerY,
    amount = 40
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const heart =
            document.createElement(
                "div"
            );


        heart.classList.add(
            "burst-heart"
        );


        heart.innerHTML =
            Math.random() > 0.3
                ? "❤️"
                : "💕";


        heart.style.left =
            centerX + "px";


        heart.style.top =
            centerY + "px";


        const angle =
            Math.random() *
            Math.PI *
            2;


        const distance =
            Math.random() *
            500 +
            180;


        const x =
            Math.cos(angle) *
            distance;


        const y =
            Math.sin(angle) *
            distance;


        heart.style.setProperty(
            "--x",
            x + "px"
        );


        heart.style.setProperty(
            "--y",
            y + "px"
        );


        document.body.appendChild(
            heart
        );


        setTimeout(
            function() {

                heart.remove();

            },
            2200
        );

    }
}


/* =================================
   MEMORY DATA
================================= */

const memoriesData = {

    1: {

        title:
            "Memory 1 ❤️",

        text:
            "This is one of those beautiful moments that I will always keep close to my heart. Your smile makes this memory even more special."

    },

    2: {

        title:
            "Memory 2 💕",

        text:
            "Some moments may look simple, but when they are with you, they become unforgettable memories that I will always treasure."

    },

    3: {

        title:
            "Memory 3 🌸",

        text:
            "Every picture has a story, and this one reminds me how lucky I am to have you in my life."

    }

};


/* =================================
   IMAGE OPEN
================================= */

const imageModal =
    document.getElementById(
        "imageModal"
    );

const zoomedImage =
    document.getElementById(
        "zoomedImage"
    );

const memoryNumber =
    document.getElementById(
        "memoryNumber"
    );

const memoryText =
    document.getElementById(
        "memoryText"
    );


function openImage(
    imageSrc,
    memoryId
) {

    zoomedImage.src =
        imageSrc;


    zoomedImage.classList.remove(
        "zoomed"
    );


    memoryNumber.textContent =
        memoriesData[
            memoryId
        ].title;


    memoryText.textContent =
        memoriesData[
            memoryId
        ].text;


    imageModal.style.display =
        "flex";


    createHeartBurst(
        window.innerWidth / 2,
        window.innerHeight / 2,
        20
    );
}


/* =================================
   DOUBLE CLICK ZOOM
================================= */

zoomedImage.addEventListener(
    "dblclick",
    function() {

        zoomedImage.classList.toggle(
            "zoomed"
        );

    }
);


/* =================================
   MOBILE DOUBLE TAP
================================= */

let lastTap = 0;


zoomedImage.addEventListener(
    "touchend",
    function() {

        const currentTime =
            new Date().getTime();


        const tapLength =
            currentTime -
            lastTap;


        if (
            tapLength < 350 &&
            tapLength > 0
        ) {

            zoomedImage.classList.toggle(
                "zoomed"
            );

        }


        lastTap =
            currentTime;

    }
);


/* =================================
   CLOSE IMAGE
================================= */

function closeImage() {

    imageModal.style.display =
        "none";


    zoomedImage.classList.remove(
        "zoomed"
    );

}


imageModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            imageModal
        ) {

            closeImage();

        }

    }
);


/* =================================
   FINAL LOVE BUTTON
================================= */

loveBtn.addEventListener(
    "click",
    function() {

        loveMessage.classList.remove(
            "hidden"
        );


        loveBtn.textContent =
            "❤️ I Love You ❤️";


        createHeartBurst(
            window.innerWidth / 2,
            window.innerHeight / 2,
            80
        );


        setTimeout(
            function() {

                endingMessage.classList.remove(
                    "hidden"
                );


                endingMessage.scrollIntoView({
                    behavior: "smooth"
                });


            },
            1900
        );

    }
);


/* =================================
   REPLAY
================================= */

replayBtn.addEventListener(
    "click",
    function() {

        message.classList.add(
            "hidden"
        );

        letter.classList.add(
            "hidden"
        );

        memories.classList.add(
            "hidden"
        );

        finalSurprise.classList.add(
            "hidden"
        );

        loveMessage.classList.add(
            "hidden"
        );

        endingMessage.classList.add(
            "hidden"
        );


        surpriseBtn.textContent =
            "Open Your Surprise 🎁";


        loveBtn.textContent =
            "Click Here ❤️";


        envelope.classList.remove(
            "open"
        );


        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =================================
   MUSIC
================================= */

const musicBtn =
    document.getElementById(
        "musicBtn"
    );

const bgMusic =
    document.getElementById(
        "bgMusic"
    );


function startMusic() {

    bgMusic.play()
        .then(
            function() {

                musicBtn.textContent =
                    "⏸️ Pause Music";

            }
        )
        .catch(
            function() {

                musicBtn.textContent =
                    "🎵 Play Music";

            }
        );

}


musicBtn.addEventListener(
    "click",
    function() {

        if (bgMusic.paused) {

            bgMusic.play();

            musicBtn.textContent =
                "⏸️ Pause Music";

        } else {

            bgMusic.pause();

            musicBtn.textContent =
                "🎵 Play Music";

        }

    }
);
