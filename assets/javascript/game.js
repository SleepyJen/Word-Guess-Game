//word bank
var disney = ["The Little Mermaid", "Sleeping Beauty", "Snow White", "Cinderella",
    "Alice in Wonderland", "Frozen", "The Lion King", "Aladdin", "Pirates of the Carribean"];
var games = ["Borderlands", "Kingdom Hearts", "Final Fantasy", "Call of Duty",
    "Beatsaber", "Smash", "CS go", "League of Legends", "TFT"];
var pixar = ["Cars", "Toy Story", "Coco", "Mosters Inc", "Incredibles",
    "Inside Out", "Finding Nemo", "Brave", "Up", "Ratatouille"];

var box = document.querySelector('#body');
var choice = document.querySelector('#start');

function chooseRandom() {
    var rand = Math.floor(Math.random() * 10);
    if (rand >= 0 && rand < 3) {
        return disney;
    } else if (rand >= 3 && rand < 6) {
        return games;
    }
    return pixar;
}

box.onkeyup = function () {
    var category = chooseRandom();
    if (category === disney) {
        choice.textContent = "I'm thinking of a Disney Movie";
    } else if (category === games) {
        choice.textContent = "I'm thinking of a popular Game";
    } else {
        choice.textContent = "I'm thinking of a Pixar Movie";
    }
};
