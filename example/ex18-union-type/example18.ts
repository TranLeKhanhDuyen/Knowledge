const addNumberOrString = (
  a: string | number | boolean,
  b: string | number | boolean
) => {
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  throw new Error("Param must be a string or number");
};

console.log("output: ", addNumberOrString(4, 5)); //9
// console.log("output: ", addNumberOrString(true,5)); //error compile
