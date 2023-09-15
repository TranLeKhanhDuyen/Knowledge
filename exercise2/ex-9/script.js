//solution  1
function getOptions() {
    const select = document.getElementById("mySelect");
    const options = select.options;
    const optionCount = options.length;

    let message = "Dropdown list itemd: \n";
    for (let i = 0; i < optionCount; i++) {
      message += options[i].text + "\n";
    }

    alert("Length of list items:  " + optionCount + "\n" + message);
  }

//solution 2
getOptions = () => {
  const select = document.getElementById("mySelect");
  const options = Array.from(select.options);
  let items = "Dropdown list itemd:\n";

  options.forEach((option) => {
    items += option.textContent + "\n";
  });
  alert(items + "And length of list items is: " + options.length);
};
