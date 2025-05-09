const brawlStarsPlayers = ["Shelly", "Colt", "Bull", "Jessie", "Nita", "Brock", "Dynamike", "Bo", "Tick", "8-Bit"];

function checkPlayer() {
    const playerName = document.getElementById("player-name").value.trim();

    if (!playerName) {
        alert("Lūdzu, ievadiet spēlētāja vārdu!");
        return;
    }

    let isPlayerFound = false;

    for (let i = 0; i < brawlStarsPlayers.length; i++) {
        if (brawlStarsPlayers[i].toLowerCase() === playerName.toLowerCase()) {
            isPlayerFound = true;
            break;
        }
    }

    if (isPlayerFound) {
        alert(`${playerName} ir Brawl Stars spēlētājs!`);
    } else {
        alert(`${playerName} nav Brawl Stars spēlētājs.`);
    }
}



