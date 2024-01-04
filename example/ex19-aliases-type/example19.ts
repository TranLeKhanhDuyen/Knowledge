type x = number | string | object | boolean;
type y = number | string | object | boolean;

const addNumberOrString = (a: x, b: y) => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (typeof a === "string" && typeof b === "string") {
    return a.concat(b);
  }
  throw new Error("Parameters must be numbers or strings");
};

console.log(">>> check: ", addNumberOrString("duyen ", "tran"));
