const container = document.getElementById("container");
const resetButton = document.querySelector("#resetbutton");
const eraseButton = document.querySelector("#erasebutton");
const rainbowButton = document.querySelector("#rainbowbutton");
const blackButton = document.querySelector("#BWbutton");
const gridInput = document.getElementById("gridInput");
const submitButton = document.querySelector("#submitbutton");
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
let blackFlag = true;

function makeRows(grid_size) {
    container.style.setProperty('--grid-rows', grid_size);
    container.style.setProperty('--grid-cols', grid_size);
    for (c = 0; c < (grid_size**2); c++) {
        let cell = document.createElement("div");
        cell.id = (c);
        container.appendChild(cell).className = "grid-item";
    };
};

//Button functions
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
    getUserInput(document.getElementById("gridInput").value);
    if (newGridArray[0] > 100 || newGridArray[1] > 100) {
        alert("Use a smaller grid size!")
        return;
    } else {
        container.innerHTML = "";
        makeRows(newGridArray[0], newGridArray[1]);
    };
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

// user inputs for new grids
let gridUserNum = "";
let gridArray = [];

function getUserInput(num) {
    newGrid = stringtoArray(num);
    gridArray = newGridArray;
};

function stringtoArray(num) {
    newGridArray = [];
    newGridArray = num.split("x");
    return newGridArray
};

// new grid using create button
submitButton.addEventListener("click", (e) => {
    getUserInput(document.getElementById("gridInput").value);
    rows = newGridArray[0];
    cols = newGridArray[1];
    if (rows > 100 || cols > 100 || rows < 1 || cols < 1) {
        alert("Please enter numbers between 1 and 99");
        return;
    } else if (isNaN(rows) || isNaN(cols)) {
        alert("Please type in a '10x10' format");
        return;
    } else { container.innerHTML = "";
        makeRows(rows);
    };

});

//new grid using Enter button
const input = document.getElementById("gridInput");

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        getUserInput(input.value)
        rows = newGridArray[0];
        cols = newGridArray[1];
        if (rows > 100 || cols > 100 || rows < 1 || cols < 1) {
            alert("Please enter numbers between 1 and 99");
            return;
        } else if (isNaN(rows) || isNaN(cols)) {
            alert("Please type in a '10x10' format");
            return;
        } else {
        container.innerHTML = "";
            makeRows(rows);
        };
    }
})

let grid_size = 16;
makeRows(grid_size);


