function updatePlayerUI() {
    document.getElementById("position").textContent = `Position: ${properties[positionIndex].name}`;
    document.getElementById("balance").textContent = `Balance: $${balance}`;
    document.getElementById("properties").textContent = `Current Property: ${properties[positionIndex].name} - Price: $${properties[positionIndex].price}, Rent: $${properties[positionIndex].rent}`;
}
