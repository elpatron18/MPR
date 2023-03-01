const rows = 10;
const columns = 10;
const anzahlBomben = 10;

const meinGrid = document.getElementById('grid')

meinGrid.style.gridTemplateColumns = `repeat(${columns}, 20px`;
meinGrid.style.gridTemplateRows = `repeat(${rows}, 20px`;

document.body.appendChild(meinGrid);

const grid = [];

for (let row = 0; row < rows; row++) {
    grid[row] = [];
    for (let col = 0; col < columns; col++) {
        grid[row][col] = {
            row: row,
            col: col,
            bomb: false,

            getMyNumber: function () {

                let obenRand = this.row === 0;
                let untenRand = this.row === rows -1;
                let linksRand = this.col === 0;
                let rechtsRand = this.col === columns -1;

                let rOffStart = -1, rOffStop = 1, cOffStart = -1, cOffStop = 1;

                if (obenRand) rOffStart = 0;
                if (untenRand) rOffStop = 0;
                if (linksRand) cOffStart = 0;
                if (rechtsRand) cOffStop = 0;

                if (!this.bomb) {
                    let anzahlBomben = 0;

                    for (let rOff = rOffStart; rOff <= rOffStop; rOff++) {
                        for (let cOff = cOffStart; cOff <= cOffStop; cOff++) {
                            if (grid[this.row+rOff][this.col+cOff].bomb) {
                                //console.log("\t BOMBE")
                                anzahlBomben++;
                            }
                        }
                    }

                    return anzahlBomben;

                }
                else return null;
            },

        };
    }
}

const gridElement = document.getElementById('grid');

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
        const cell = document.createElement('div');
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.classList.add('cell');
        gridElement.appendChild(cell);
        grid[row][col].element = cell;
    }
}

for (let b = 0; b < anzahlBomben; b++) {
    let randRow = Math.floor(Math.random() * rows)
    let randCol = Math.floor(Math.random() * columns)
    //grid[randRow][randCol].element.style.backgroundColor = 'red';
    grid[randRow][randCol].bomb = true;
}

let arr = Array.prototype.slice.call(document.getElementsByClassName("cell"))
arr.forEach(element => {
    element.addEventListener("click", ()=> {
        element.innerHTML += grid[element.dataset.row][element.dataset.col].getMyNumber()
    })
})
