const parent__container = document.querySelector(".box__container");
const button__1 = document.querySelector(".button__1");
const button__2 = document.querySelector(".button__2");
const button__3 = document.querySelector(".button__3");
const button__4 = document.querySelector(".button__4");
const button__5 = document.querySelector(".button__5");
const button__6 = document.querySelector(".button__6");
const button__7 = document.querySelector(".button__7");
const button__8 = document.querySelector(".button__8");

let signal = 1;

function createBoxes(num, className) {
  if (signal===1) {
    // let allCards = parent__container.children;
    // for(let card of allCards){
    //     card.style.display="block";
    //     card.classList.add("box")
    //     card.classList.add(className)
    //     console.log(card.classList);
    // }

    customBoxes(num, className);
    signal--;
    return;
  } else {
    // let errMessage = document.createElement("h1");
    // errMessage.textContent = `You are Clicking Same button again`;
    // let allCards = parent__container.children;
    // for(let card of allCards){
    //     card.classList.remove(className);
    //     card.classList.remove("box");
    //     card.style.display="none";
    //     console.log(card.classList);
    // }
    signal++
    window.location.reload();
    return;
  }
}
function colorGenerator() {
  const characters = "abcdef0123456789";
  const colorNumber = 6;
  let myColor = "#";
  for (let i = 0; i < colorNumber; i++) {
    let colorIndexNumber = Math.floor(Math.random() * characters.length);
    myColor += characters[colorIndexNumber];
  }
  return myColor;
}

function customBoxes(num, className) {
  for (let i = 0; i < num; i++) {
    const virtualBox = document.createElement("div");
    virtualBox.textContent = `${i + 1} `;
    virtualBox.classList.add("box");
    virtualBox.classList.add(className);
    virtualBox.style.background = `${colorGenerator()}`;
    parent__container.appendChild(virtualBox);
  }
  console.log(signal);
}

button__1.addEventListener("click", () => {
  createBoxes(8, "box__1");
});
button__2.addEventListener("click", () => {
  createBoxes(7, "box__2");
});
button__3.addEventListener("click", () => {
  createBoxes(8, "box__3");
});
button__4.addEventListener("click", () => {
  createBoxes(8, "box__4");
});

button__5.addEventListener("click", () => {
  createBoxes(9, "box__5");
});
button__6.addEventListener("click", () => {
  createBoxes(9, "box__6");
});
button__7.addEventListener("click", () => {
  createBoxes(10, "box__7");
});
button__8.addEventListener("click", () => {
  createBoxes(10, "box__8");
});
