function solve() {
    // Get references to input elements and buttons
    let inputs = document.querySelectorAll('input');
    const checkBtn = document.querySelectorAll('button')[0];
    const clear = document.querySelectorAll('button')[1];

    // Get references to table and check paragraph
    const table = document.querySelector('table');
    const checkPar = document.querySelectorAll('#check p')[0];

    // Set cursor style for buttons
    checkBtn.style.cursor = 'pointer';
    clear.style.cursor = 'pointer';

    // Attach event listeners to buttons
    clear.addEventListener('click', reset);
    checkBtn.addEventListener('click', checkResult);

    // Function to reset the form and result
    function reset() {
        // Clear input values
        [...inputs].forEach(input => (input.value = ''));

        // Reset table border and check paragraph content
        table.style.border = 'none';
        checkPar.textContent = '';
    }

    // Function to check the result of the Sudoku
    function checkResult() {
        // Create a 2D matrix to store the input values
        let matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ];

        // Initialize a flag to track if it's a valid Sudoku
        let isSudoku = true;

        // Check each row and column for uniqueness of values
        for (let i = 0; i < matrix.length; i++) {
            let row = matrix[i];
            let col = matrix.map(row => row[i]);

            // If the length of the Set is different, values are not unique
            if (col.length !== [...new Set(col)].length || row.length !== [...new Set(row)].length) {
                isSudoku = false;
                break; // Exit the loop early if a violation is found
            }
        }

        // Update UI based on the result
        if (isSudoku) {
            table.style.border = '2px solid green';
            checkPar.style.color = 'green';
            checkPar.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            checkPar.style.color = 'red';
            checkPar.textContent = 'NOP! You are not done yet...';
        }
    }
}
