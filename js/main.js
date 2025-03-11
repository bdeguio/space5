document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.getElementById("rollButton");

    rollButton.addEventListener("click", () => {
        const rollTotal = rollTwoDice();
        document.getElementById("diceResult").textContent = `You rolled a ${rollTotal}`;
        movePlayer(rollTotal);
    });

    updatePlayerUI();
});
