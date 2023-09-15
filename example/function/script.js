const obj = {
  name: "Duyen",
  regularFunction: function () {
    console.log("Regular function:", this.name);
  },
  arrowFunction: () => {
    console.log("Arrow function:", anotherObj.name);
  },
};

const anotherObj = {
  name: "Duyen Tran",
};

obj.regularFunction();
obj.regularFunction.call(anotherObj);

obj.arrowFunction();
obj.arrowFunction.call(anotherObj);
