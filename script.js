const heartContainer = document.getElementById("heart-container");
const music = document.getElementById("bgMusic");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Continuous hearts
setInterval(createHeart, 500);

function sayYes() {
  document.getElementById("response").innerText =
    "Congratulations you made my heart the happiest ❤️❤️🥹";

  music.play();
}
