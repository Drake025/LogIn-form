const sudokuGrid = document.getElementById('sudoku-grid');
const levelSelector = document.getElementById('sudoku-level');

// Define Sudoku puzzles for different levels
const puzzles = {
    easy: [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ],
    medium: [
        [5, 3, 4, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ],
    hard: [
        [2, 0, 0, 0, 0, 0, 0, 0, 5],
        [8, 0, 0, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 5, 7, 0, 0, 0, 3],
        [4, 5, 0, 0, 0, 0, 2, 0, 0],
        [0, 9, 0, 0, 6, 0, 0, 8, 0],
        [0, 0, 7, 0, 0, 0, 0, 9, 1],
        [6, 0, 0, 0, 1, 9, 0, 0, 0],
        [0, 0, 0, 7, 0, 0, 0, 0, 4],
        [3, 0, 0, 0, 0, 0, 0, 0, 9]
    ],
    expert: [
        [1, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 4, 0, 0, 0, 6, 7],
        [0, 0, 0, 0, 8, 5, 0, 3, 0],
        [0, 8, 7, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 6, 0, 0, 1, 0, 0],
        [9, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 5, 0, 7, 0, 0, 3],
        [0, 0, 0, 0, 6, 0, 0, 9, 0],
        [3, 0, 0, 0, 0, 0, 0, 0, 1]
    ]
};


function createSudokuBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const cell = document.createElement('div');
            cell.className = 'sudoku-cell';

            if (board[i][j] !== 0) {
                const input = document.createElement('input');
                input.setAttribute('type', 'number');
                input.setAttribute('readonly', 'true');
                input.value = board[i][j];
                cell.appendChild(input);
            } else {
                const input = document.createElement('input');
                input.setAttribute('type', 'number');
                input.setAttribute('min', '1');
                input.setAttribute('max', '9');
                cell.appendChild(input);
            }

            sudokuGrid.appendChild(cell);
        }
    }
}

// Function to handle level change
function handleLevelChange() {
    const selectedLevel = levelSelector.value;
    const selectedPuzzle = puzzles[selectedLevel];

    // Clear the existing Sudoku grid
    sudokuGrid.innerHTML = '';

    // Create the new Sudoku board based on the selected level
    createSudokuBoard(selectedPuzzle);
}

// Add an event listener to the level selector
levelSelector.addEventListener('change', handleLevelChange);

// Initial creation of the Sudoku board (default: easy level)
createSudokuBoard(puzzles.easy);

// Function to check if the Sudoku puzzle is solved correctly
function checkSudoku() {
    console.log('Checking Sudoku...');
    
    const userBoard = getUserInputBoard();
    console.log('User Board:', userBoard);

    // Check rows, columns, and 3x3 grids
    if (isValidBoard(userBoard)) {
        console.log("Sudoku is valid!");
        alert("Congratulations! You solved the Sudoku puzzle correctly!");
    } else {
        console.log("Sudoku is NOT valid!");
        alert("Oops! Some numbers are incorrect. Please double-check your answers.");
    }
}



// Function to get the user's input board
function getUserInputBoard() {
    const userInputBoard = [];
    const cells = document.querySelectorAll('.sudoku-cell input');

    let row = [];
    for (let i = 0; i < cells.length; i++) {
        row.push(Number(cells[i].value));
        if (row.length === 9) {
            userInputBoard.push([...row]);
            row = [];
        }
    }

    return userInputBoard;
}

// Function to validate the Sudoku puzzle
// Function to validate the Sudoku puzzle
function isValidBoard(board) {
    // Check each row
    for (let i = 0; i < 9; i++) {
        const row = board[i];
        const uniqueRow = new Set(row);

        // If the row contains duplicates or zeros, it's invalid
        if (row.includes(0) || uniqueRow.size !== 9) {
            return false;
        }
    }

    // Check each column
    for (let j = 0; j < 9; j++) {
        const column = board.map(row => row[j]);
        const uniqueColumn = new Set(column);

        // If the column contains duplicates, it's invalid
        if (uniqueColumn.size !== 9) {
            return false;
        }
    }

    // Check each 3x3 grid
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            const grid = [];
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    grid.push(board[i + x][j + y]);
                }
            }
            const uniqueGrid = new Set(grid);

            // If the grid contains duplicates, it's invalid
            if (uniqueGrid.size !== 9) {
                return false;
            }
        }
    }

    // If all checks pass, the board is valid
    return true;
}


try {
    document.addEventListener('DOMContentLoaded', function() {
        // Add an event listener to the Check button
        document.getElementById('checkButton').addEventListener('click', checkSudoku);
    });
} catch (error) {
    console.error('An error occurred:', error);
}
// Function to clear local storage and redirect to the sign-up page
function clearLocalStorageAndRedirect() {
    localStorage.clear();
    // Redirect the user to the sign-up page
    window.location.href = 'index.html';
}

// Function to toggle the dropdown
function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdown = document.getElementById("myDropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
};
