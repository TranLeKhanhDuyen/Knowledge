// function getOptions() {
//     const select = document.getElementById("mySelect");
//     const options = select.options;
//     const optionCount = options.length;

//     let message = "Các mục trong danh sách thả xuống:\n";
//     for (let i = 0; i < optionCount; i++) {
//       message += options[i].text + "\n";
//     }

//     alert("Số lượng mục: " + optionCount + "\n" + message);
//   }

// getOptions = () => {
//     const select = document.getElementById('mySelect');
//     const options = Array.from(select.options);
//     let items = "Dropdown list items:\n"

//     options.forEach((option) => {
//         items += option.textContent + "\n";
//     });
//     alert(items + "And length of list items is: " + options.length);
// }'

getOptions = () => {
  const select = document.getElementById("mySelect");
  const options = Array.from(select.options);
  let items = "Dropdown list itemd:\n";

  options.forEach((option) => {
    items += option.textContent + "\n";
  });
  alert(items + "And length of list items is: " + options.length);
};
