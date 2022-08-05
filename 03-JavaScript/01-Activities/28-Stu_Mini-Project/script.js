function random(min,max) {
    const num = Math.floor(Math.random() * (max-min + 1)) + min;
    return num;
};

var wins = 0;
var losses = 0;
var draws = 0;

while (true) {
    if (window.confirm("Do you want to play again?")) {
        var player = window.prompt("For Rock type R, For Paper type P, for Scissors type S")
        var opponent = random (1, 3);
    
if (player.toLowerCase() === "r") {
    if (opponent === 1) {
        window.alert ("Your opponent chose Rock, its a draw!");
        draws++;

    } else if (opponent === 2) {
        window.alert("Your opponent chose Paper, you've lost!");
        losses++;

    }else if (opponent === 3) {
        window.alert("Your opponent chose Scissors, you've won!");
        wins++;

    };

} else if (player.toLowerCase() === "p") {
    if (opponent === 1) {
        window.alert("Your opponent chose Rock, you've won!");
        wins++;

} else if (opponent === 2) {
    window.alert("Your opponent chose Paper, its a draw@!");
    draws++;

} else if (opponent === 3) {
    window.alert("Your opponent chose Scissors, you've lost!");
    losses++;
};

} else if (player.toLowerCase() === "s") {
    if (opponent === 1) {
        window.alert("Your opponent chose Rock, you've lost!");
        losses++;

    } else if (opponent === 2) {
        window.alert("Your opponent chose Paper, you've won!");
        wins++;

    } else if (opponent === 3) {
        window.alert("Your opponent chose Scissors, its a draw!");
        draws++;
    };

} else {
    window.alert("Please pick Rock, Paper, or Scissors.")
}
window.alert("Here is the score: \nwins:" + wins + "\nlosses" + losses + "\ndraws" + draws);

} else {
    window.alert("Thanks for playing!");
    break;
};

};
