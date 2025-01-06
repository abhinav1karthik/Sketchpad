let squaresPerRow = 16;

const container = document.querySelector(".container");

for (let i = 1; i <= squaresPerRow * squaresPerRow; i++) {
  const mydiv = document.createElement("div");
  mydiv.classList.add("sketchElement");
  container.appendChild(mydiv);
  let divWidth = 640 / squaresPerRow;
  mydiv.style.width = `${divWidth}px`;
  mydiv.style.height = `${divWidth}px`;
  mydiv.textContent = `A`;
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
    mydiv.textContent = `A`;
  }
}

const myButton = document.querySelector(".submit");
const myInput = document.querySelector(".input");

myButton.addEventListener("click", (event) => {
  let newsquaresPerRow = myInput.value;
  if (!isNaN(newsquaresPerRow) && newsquaresPerRow !== "") {
    console.log(newsquaresPerRow);
    updateGrid(newsquaresPerRow);
  } else {
    alert("Input a Number Only!");
  }
});

const mydivList = document.querySelectorAll(".sketchElement");
