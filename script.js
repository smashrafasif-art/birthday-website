const welcome = document.getElementById("welcome");
const main = document.getElementById("main");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");
const typing = document.getElementById("typing");
const hearts = document.getElementById("hearts");
const confettiBtn = document.getElementById("confettiBtn");

const message = `Happy 18th Birthday, Mahi ❤️

On this special day, I pray that Allah fills your life with happiness, peace, and endless success.

May every dream you carry in your heart come true.

Keep smiling, keep shining, and never stop believing in yourself.

The world needs kind people like you.

Have a wonderful birthday and a beautiful future ahead.`;

let i = 0;

startBtn.onclick = () => {
    welcome.style.display = "none";
    main.style.display = "block";

    music.play().catch(() => {});

    typeWriter();
};

function typeWriter() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

/* Floating Hearts */

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (16 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);

/* Gallery */

const slides = document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

    slides[current].style.opacity = "0.4";
    slides[current].style.transform = "scale(.92)";

    current++;

    if (current >= slides.length) current = 0;

    slides[current].style.opacity = "1";
    slides[current].style.transform = "scale(1)";

}, 3000);

/* Confetti */

confettiBtn.onclick = () => {

    for (let j = 0; j < 120; j++) {

        let piece = document.createElement("div");

        piece.innerHTML = "🎊";

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-30px";
        piece.style.fontSize = (18 + Math.random() * 18) + "px";
        piece.style.transition = "4s linear";
        piece.style.zIndex = "9999";

        document.body.appendChild(piece);

        setTimeout(() => {

            piece.style.top = "110vh";
            piece.style.transform = "rotate(720deg)";

        }, 20);

        setTimeout(() => {

            piece.remove();

        }, 4200);

    }

};