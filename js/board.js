document.addEventListener("DOMContentLoaded", () => {
    const board = document.querySelector(".grid");

    for (let i = 0; i < 121; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", i);
        board.appendChild(cell);
    }
});
