//word bank
var disney = ["The Little Mermaid", "Sleeping Beauty", "Snow White", "Cinderella",
    "Alice in Wonderland", "Frozen", "The Lion King", "Aladdin", "Pirates of the Carribean", "Moana"];
var games = ["Borderlands", "Kingdom Hearts", "Final Fantasy", "Call of Duty",
    "Beatsaber", "Smash Bros", "CS go", "League of Legends", "TFT", "World of Warcraft"];
var pixar = ["Cars", "Toy Story", "Coco", "Monsters Inc", "Incredibles",
    "Inside-Out", "Finding Nemo", "Brave", "Up", "Ratatoulli"];
var alphabet = ["a", "b", "c", "d"];

var box = document.querySelector('#body');
var choice = document.querySelector('#start');
var guess = document.querySelector('#wrong');
var show = document.querySelector('#cate');
var key;

function chooseRandom() {
    var rand = Math.floor(Math.random() * 10);
    if (rand >= 0 && rand < 3) {
        return disney;
    } else if (rand >= 3 && rand < 6) {
        return games;
    }
    return pixar;
}

function game() {
    var category = chooseRandom();
    var element, elementHolder = [];
    var done, key;
    if (category === disney) {
        choice.textContent = "I'm thinking of a Disney Movie";
    } else if (category === games) {
        choice.textContent = "I'm thinking of a popular Game";
    } else {
        choice.textContent = "I'm thinking of a Pixar Movie";
    }

    element = category[Math.floor(Math.random() * 10)];

    for (var i = 0; i < element.length; i++) {
        if (element[i] === " ") {
            elementHolder.push(element[i]);
        } else {
            elementHolder.push("_");
        }
    }

    box.onkeyup = function (event) {
        key = event.key;
        for (var j = 0; j < element.length; j++) {
            if (key === element[j]) {
                elementHolder[j] = element[j];
            }
        }
        show.textContent = elementHolder.join(" ");
    };

    console.log(key);

}

game();