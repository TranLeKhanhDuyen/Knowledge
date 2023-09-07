function fetchData(source, delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(`Data from ${source}`);
    }, delay);
  });
}

async function fetchAllData() {
  try {
    const data1 = await fetchData("source 1", 2000);
    console.log(data1);

    const data2 = await fetchData("source 2", 1500);
    console.log(data2);

    const data3 = await fetchData("source 3", 1000);
    console.log(data3);

    return "All data fetched";
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAllData().then((result) => {
  console.log(result); // All data fetched
});
