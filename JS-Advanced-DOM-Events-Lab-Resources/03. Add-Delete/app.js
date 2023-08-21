function addItem() {
    let input = document.getElementById('newItemText');
    let value = input.value;

    if (value.length === 0) return;

    let ul = document.getElementById('items');
    let newLi = document.createElement('li');
    newLi.textContent = value;

    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = "#"; // Add a valid href or preventDefault

    deleteLink.addEventListener('click', deleteHandler);
    newLi.appendChild(deleteLink);
    ul.appendChild(newLi);

function deleteHandler(e) {
    e.preventDefault();
    let link = e.target;
    let li = link.parentElement;
    li.remove();
}
 }


