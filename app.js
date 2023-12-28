import pianoKeys from "./data.js";

const piano = document.querySelector("#piano");

piano.innerHTML = pianoKeys
  .map((key) => {
    return `
  <a href="#" class="key " id="${key.id}">
    <path class="${key.pathClass}" d="${key.path}" />
  </a>
  `;
  })
  .join("");

const allKeys = document.querySelectorAll(".key");

// Prevent default behavior of all links
allKeys.forEach((key) => {
  key.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

for (let i = 0; i < allKeys.length; i++) {
  function playSound() {
    let audio = new Audio(`./audio/key-${i + 1}.mp3`);
    audio.play();
  }
  allKeys[i].addEventListener("click", () => {
    playSound();
  });
}
