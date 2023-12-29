let skills: (string | number)[] = ["Duyen", 21];

skills.push("hi");

console.log(skills);

// tuple: dataType/size/order
let skills3: [string, number, boolean];

skills3 = ["hi", 78, true]; //ok
// skills3 = [2, 78, true]; //error

//optional
let skills4: [string, number, boolean?];

skills4 = ["hi", 78]; //ok
// skills4 = ["hi", 78, "hi"]; //error
