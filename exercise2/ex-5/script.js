insert_Row = () => {
  const table = document.getElementById("sampleTable");
  const newRow = table.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  cell1.innerHTML = "Row Cell";
  cell2.innerHTML = "Row Cell";
};
