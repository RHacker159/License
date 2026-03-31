/* MATRIX EFFECT */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01".split("");
let fontSize = 14;
let columns = canvas.width / fontSize;
let drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        let text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);

/* SEARCH */
document.getElementById("search").addEventListener("keyup", function () {
    let value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {
        let name = card.dataset.name.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
});

/* FILTER */
function filterCategory(category) {
    document.querySelectorAll(".card").forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
















document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    alert("Message sent successfully!");

    // Clear form after submit
    this.reset();
});