//word bank
var disney = ["The Little Mermaid", "Sleeping Beauty", "Snow White", "Cinderella",
    "Alice in Wonderland", "Frozen", "The Lion King", "Aladdin", "Pirates of the Carribean", "Moana"];
var games = ["Borderlands", "Kingdom Hearts", "Final Fantasy", "Call of Duty",
    "Beatsaber", "Smash Bros", "CS go", "League of Legends", "TFT", "World of Warcraft"];
var pixar = ["Cars", "Toy Story", "Coco", "Monsters Inc", "Incredibles",
    "Inside-Out", "Finding Nemo", "Brave", "Up", "Ratatoulli"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n",
    "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var box = document.querySelector('#body');
var choice = document.querySelector('#start');
var guess = document.querySelector('#wrong');
var show = document.querySelector('#cate');
var arrGuess = document.querySelector('#guess');
var key, lowerCaseElement, win, lose, again;

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
    var element, elementHolder = [], lettersGuessed = [];
    var done, key;


    element = category[Math.floor(Math.random() * 10)];

    for (var i = 0; i < element.length; i++) {
        if (element[i] === " ") {
            elementHolder.push(element[i]);
        } else {
            elementHolder.push("_");
        }
    }

    lowerCaseElement = element.toLowerCase();
    box.onkeyup = function (event) {
        key = event.key;
        if (category === disney) {
            choice.textContent = "I'm thinking of a Disney Movie";
        } else if (category === games) {
            choice.textContent = "I'm thinking of a popular Game";
        } else {
            choice.textContent = "I'm thinking of a Pixar Movie";
        }
        if (lowerCaseElement.includes(key)) {
            for (var j = 0; j < element.length; j++) {
                if (key === lowerCaseElement[j]) {
                    elementHolder[j] = element[j];
                }
            }
        } else {
            if (!lettersGuessed.includes(key) && alphabet.includes(key) && elementHolder.includes("_")) {
                lettersGuessed.push(key);
            }
        }

        if (!elementHolder.includes("_")) {
            done = check(element, elementHolder);
            if (done) {
                choice.textContent = "Congrats!! you Win!! ^^ ";
            } else {
                choice.textContent = "Sorry! try again";
            }
        }

        show.textContent = elementHolder.join(' ');
        arrGuess.textContent = lettersGuessed.join(' ');
    };

}

function check(string, holder) {
    var match = false;
    for (var i = 0; i < string.length; i++) {
        if (holder[i] != string[i]) {
            match = false;
            break;
        }
        match = true;
    }
    return match;
}



game();