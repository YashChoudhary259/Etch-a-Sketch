function createGrid(size) {
  const container = document.getElementById("grid-container");
  container.innerHTML = ""; // clear old grid

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");

    // Change color when hovered
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);
  }
}

// Default grid 16x16
createGrid(16);

// Resize button
document.getElementById("resize-btn").addEventListener("click", () => {
  let newSize = prompt("Enter new grid size (1–100):");
  newSize = parseInt(newSize);

  if (newSize >= 1 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert("Invalid size! Please enter a number between 1 and 100.");
  }
});
