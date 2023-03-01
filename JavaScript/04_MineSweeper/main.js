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

                if (!this.bomb) {
                    let anzahlBomben = 0;
                    //wenns in der Mitte ist

                    for (let rOff = -1; rOff <= 1; rOff++) {
                        for (let cOff = -1; cOff <= 1; cOff++) {
                            if (grid[this.row+rOff][this.col+cOff].bomb) {
                                console.log("\t BOMBE")
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
    grid[randRow][randCol].element.style.backgroundColor = 'red';
    grid[randRow][randCol].bomb = true;
}

grid[5][5].element.style.backgroundColor = 'blue';

console.log(grid[5][5].getMyNumber())


