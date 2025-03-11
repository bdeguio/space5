let positionIndex = 0;
let balance = 1500;

function movePlayer(rollTotal) {
    let previousIndex = positionIndex;
    positionIndex = (positionIndex + rollTotal) % properties.length;

    if (positionIndex < previousIndex) {
        balance += 200;
        console.log("Passed GO! +$200 added.");
    }

    updatePlayerUI();
}
