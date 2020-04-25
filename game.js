const container = document.getElementById("container");
const resetButton = document.querySelector("#resetbutton");
const eraseButton = document.querySelector("#erasebutton");
const rainbowButton = document.querySelector("#rainbowbutton");
const blackButton = document.querySelector("#BWbutton");
const gridInput = document.getElementById("gridInput");
const submitButton = document.querySelector("#submitbutton");
const newButton = document.querySelector('#newbutton');
const rainbowColors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet"
];
let eraseFlag = false;
let rainbowFlag = false;


function makeRows(num) {
    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);
    for (c = 0; c < (num**2); c++) {
        let cell = document.createElement("div");
        cell.id = (c);
        container.appendChild(cell).className = "grid-item";
    };
};

let defaultRows = 20;
makeRows(defaultRows);

// button functions
function blackTile(e) {
    const tile = document.querySelector(`.grid-item[id="${e.target.id}"]`);
    tile.style.backgroundColor = "black";
}

function rainbowTile(e) {
    const tile = document.querySelector(`.grid-item[id="${e.target.id}"]`);
    tile.style.backgroundColor = rainbowColors[Math.floor(Math.random() * Math.floor(rainbowColors.length))];
    cell.style.opacity = 1;
}

function eraser(e) {
    const tile = document.querySelector(`.grid-item[id="${e.target.id}"]`);
    tile.style.backgroundColor = "white";
}

const tiles = document.addEventListener("mouseover", (e) => {
    if (eraseFlag == true) {
        eraser(e);
    } else if (rainbowFlag == true) {
        rainbowTile(e);
    } else blackTile(e);
});

function cellReset() {
    document.querySelectorAll('.cell').forEach(el => el.remove());
}

// buttons
resetButton.addEventListener('click', (e) => {
    container.innerHTML = "";
    cellReset();
    makeRows(defaultRows);
});

rainbowButton.addEventListener("click", (e) => {
    rainbowFlag = !rainbowFlag;
    if (rainbowFlag == true) {
        rainbowButton.style.backgroundColor = "green";
        rainbowButton.style.color = "white";
        eraseButton.style.backgroundColor = "white";
        eraseFlag = false;
    } else {
        rainbowButton.style.backgroundColor = "white";
    };
});

eraseButton.addEventListener("click", (e) => {
    eraseFlag = !eraseFlag;
    if (eraseFlag == true) {
        eraseButton.style.backgroundColor = "pink";
        rainbowButton.style.backgroundColor = "white";
        rainbowButton.style.color = "rgb(95, 99, 104)";
        rainbowFlag = false;
    } else {
        eraseButton.style.backgroundColor = "white";
    };
});

blackButton.addEventListener("click", (e) => {
    eraseFlag = false;
    rainbowFlag = false;
    eraseButton.style.backgroundColor = "white";
    rainbowButton.style.backgroundColor = "white";
    rainbowButton.style.color = "rgb(95, 99, 104)";

});

newButton.addEventListener("click", (e) => {
    new_Grid();
});

function new_Grid() {
    container.innerHTML = "";
    cellReset();
    let userInput = prompt("Enter a grid size between 1-100");
    newGridNum = parseInt(userInput);
    defaultRows = newGridNum;
    if (newGridNum > 100 || newGridNum < 1) {
        alert("Number must be between 1 and 100!")
        return;
    } else if (Number.isNaN(newGridNum)) {
        alert("Needs to be a number!")
    } else {
        container.innerHTML = "";
        makeRows(newGridNum);
    }
}

document.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        new_Grid();
    }
});



