function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollTwoDice() {
    return rollDice() + rollDice();
}
