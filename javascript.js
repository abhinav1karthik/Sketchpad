let squaresPerRow = 16;

const container = document.querySelector(".container");

for (let i = 1; i <= squaresPerRow * squaresPerRow; i++) {
  const mydiv = document.createElement("div");
  mydiv.classList.add("sketchElement");
  container.appendChild(mydiv);
  let divWidth = 640 / squaresPerRow;
  mydiv.style.width = `${divWidth}px`;
  mydiv.style.height = `${divWidth}px`;
}

function updateGrid(newsquaresPerRow) {
  const toDelete = document.querySelectorAll(".sketchElement");
  toDelete.forEach((element) => {
    element.remove();
  });
  for (let i = 1; i <= newsquaresPerRow * newsquaresPerRow; i++) {
    const mydiv = document.createElement("div");
    mydiv.classList.add("sketchElement");
    container.appendChild(mydiv);
    let divWidth = 640 / newsquaresPerRow;
    mydiv.style.width = `${divWidth}px`;
    mydiv.style.height = `${divWidth}px`;
    mydiv.addEventListener("mouseenter", () => {
      mydiv.style.backgroundColor = getRandomColor();
    });
  }
}

const mydivList = document.querySelectorAll(".sketchElement");

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
mydivList.forEach((mydivi) => {
  mydivi.addEventListener("mouseenter", () => {
    mydivi.style.backgroundColor = getRandomColor();
  });
});

const myButton = document.querySelector(".submit");
const myInput = document.querySelector(".input");

myButton.addEventListener("click", (event) => {
  let newsquaresPerRow = myInput.value;
  if (
    !isNaN(newsquaresPerRow) &&
    newsquaresPerRow !== "" &&
    newsquaresPerRow >= 1 &&
    newsquaresPerRow <= 100
  ) {
    console.log(newsquaresPerRow);
    updateGrid(newsquaresPerRow);
  } else {
    alert("Input a Number(1-100) Only! ");
  }
});
