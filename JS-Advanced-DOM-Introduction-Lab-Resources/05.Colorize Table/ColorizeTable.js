function colorize() {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');

    for (let i = 1; i < rows.length; i += 2) {
        rows[i].style.backgroundColor = 'Teal';
    }
}