createTable = () => {
  const rows = parseInt(prompt("Enter the rows number"));
  const cols = parseInt(prompt("Enter the colums number"));

  const table = document.getElementById("myTable");
  table.innerHTML = "";

  for (let i = 0; i < rows; i++) {
    const row = table.insertRow();
    for (let j = 0; j < cols; j++) {
      const cell = row.insertCell();
      cell.textContent = `Row-${i} Colum-${j}`;
    }
  }
};
