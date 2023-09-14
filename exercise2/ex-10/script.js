const radiusInput = document.getElementById("radiusInput");
const volumeOutput = document.getElementById("volumeOutput");

function calculateVolume() {
  const radius = parseFloat(radiusInput.value);

  if (isNaN(radius)) {
    alert("Please enter a valid radius value.");
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3); // V = (4/3) * π * r^3

  volumeOutput.value = volume.toFixed(2); // limiting to two decimal places
}

const calculateButton = document.querySelector("button");
calculateButton.addEventListener("click", calculateVolume);
