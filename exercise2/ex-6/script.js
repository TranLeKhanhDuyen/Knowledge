changeContent = () => {
  const row = parseInt(prompt("Input the row number: ", 10));
  const col = parseInt(prompt("Input the column number: ", 10));
  const newContent = prompt("Input the new content: ");

  const table = document.getElementById("myTable");
  const cell = table.rows[row].cells[col];

  if(cell){
    cell.textContent = newContent;
  } else {
    alert("This cell does not exist")
  }
};
