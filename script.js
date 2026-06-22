const container = document.querySelector(".container");

function getSize() {
  const userAmount = prompt("Please enter a number between 1 and 100");
  if (
    userAmount === null ||
    userAmount === "" ||
    isNaN(userAmount) ||
    userAmount <= 0 ||
    userAmount > 100
  ) {
    prompt("Not a valid value, defaulting to 16 x 16 grid.");
  } else {
    return userAmount;
  }
  return 16;
}
function createGrid(size) {
  container.innerHTML = "";

  container.style.setProperty("--grid-size", size);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("grid-box");
      container.appendChild(newDiv);
    }
  }
  function getRandRGB() {
    return Math.floor(Math.random() * 255);
  }
  function handleHover(e) {
    const box = e.target;

    let currentOpac = parseFloat(box.dataset.opacity) || 0;
    if (currentOpac < 1) {
      currentOpac += 0.1;
      box.dataset.opacity = currentOpac;
    }
    let r = getRandRGB();
    let g = getRandRGB();
    let b = getRandRGB();

    box.style.backgroundColor = `rgba(${r},${g},${b}, ${currentOpac})`;
  }

  const getGridBoxes = document.querySelectorAll(".grid-box");
  getGridBoxes.forEach((box) => {
    box.addEventListener("mouseover", handleHover);
  });

  const sizeDesc = document.querySelector(".gridSize");
  sizeDesc.textContent = "Size: " + size + " x " + size;
}

const sizeBtn = document.querySelector(".setGrid");
sizeBtn.addEventListener("click", () => {
  const chosenSize = getSize();
  createGrid(chosenSize);
});

createGrid(16);
