function solve() {
  // Get references to relevant elements
  let boughtFurniture = document.getElementsByTagName('textarea')[1];
  let tableBody = document.getElementsByTagName('tbody')[0];
  let buttons = document.getElementsByTagName('button');
  let generateBtn = buttons[0];
  
  // Attach click event handler for generating table rows
  generateBtn.addEventListener('click', () => {
      // Parse input JSON
      let json = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      
      // Loop through JSON data and create table rows
      for (const furniture of json) {
          let row = document.createElement('tr');
          
          // Create and append cells to the row
          let image = document.createElement('td');
          image.innerHTML = `<img src ="${furniture.img}">`;
          row.appendChild(image);
          
          let nametable = document.createElement('td');
          let p = document.createElement('p');
          p.textContent = furniture.name;
          nametable.appendChild(p);
          row.appendChild(nametable);
          
          let priceTable = document.createElement('td');
          let p1 = document.createElement('p');
          p1.textContent = furniture.price;
          priceTable.appendChild(p1);
          row.appendChild(priceTable);
          
          let decFac = document.createElement('td');
          let p2 = document.createElement('p');
          p2.textContent = furniture.decFactor;
          decFac.appendChild(p2);
          row.appendChild(decFac);
          
          let checkBox = document.createElement('td');
          let chB = document.createElement('input');
          chB.setAttribute('type', 'checkbox');
          checkBox.appendChild(chB);
          row.appendChild(checkBox);
          
          // Append the row to the table body
          tableBody.appendChild(row);
      }
  });
  
  let buyBtn = buttons[1];
  
  let checkedFurniture = [];
  let totalPrice = 0;
  let decorationFactor = 0;
  let count = 0;
  
  // Attach click event handler for buying furniture
  buyBtn.addEventListener('click', () => {
      // Get all table rows
      let trElements = Array.from(document.getElementsByTagName('tr'));
      
      // Loop through rows to gather information about checked furniture
      for (let i = 2; i < trElements.length; i++) {
          if (trElements[i].children[4].children[0].checked) {
              checkedFurniture.push(trElements[i].children[1].textContent);
              totalPrice += Number(trElements[i].children[2].textContent);
              decorationFactor += Number(trElements[i].children[3].textContent);
              count++;
          }
      }
      
      // Update the boughtFurniture textarea with the results
      boughtFurniture.value += `Bought furniture: ${checkedFurniture.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decorationFactor / count}`;
  });
}
