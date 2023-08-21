function sumTable() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tbody tr');
    let sum = 0;

    for (let i = 0; i < rows.length - 1; i++) {
        const cells = rows[i].querySelectorAll('td');
        if (cells.length > 1) { // Make sure the row has more than one cell
            const cost = parseFloat(cells[cells.length - 1].textContent);
            if (!isNaN(cost)) {
                sum += cost;
            }
        }
    }

    const sumElement = document.getElementById('sum');
    sumElement.textContent = sum.toFixed(2);
}