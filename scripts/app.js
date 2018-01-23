var images = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Basketball.png/170px-Basketball.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Tarom.b737-700.yr-bgg.arp.jpg/1200px-Tarom.b737-700.yr-bgg.arp.jpg"
];

function randomImage() {
  return Math.floor(Math.random() * 15) + 1;
}

document.querySelector(
  "body"
).style.backgroundImage = `url("./assets/AlertExcuses/EmergencyAlert${randomImage()}.png")`;

document.querySelector("body").addEventListener("click", () => {
  window.location.reload();
});
