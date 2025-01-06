let squaresPerRow = 16;

const container = document.querySelector(".container");

for (let i = 1; i <= squaresPerRow * squaresPerRow; i++) {
  const mydiv = document.createElement("div");
  mydiv.classList.add("sketchElement");
  container.appendChild(mydiv);
  let divWidth = 640 / squaresPerRow;
  mydiv.style.width = `${divWidth}px`;
  mydiv.style.height = `${divWidth}px`;
  mydiv.style.backgroundColor = "red";
  mydiv.style.textAlign = "center";
  mydiv.textContent = `A`;
}
