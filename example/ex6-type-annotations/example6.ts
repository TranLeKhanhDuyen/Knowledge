let names2: string[] = ["Duyen", "Tran", "Typescript"]; //annotations

// names2.push(25); //error Argument of type 'number' is not assignable to parameter of type 'string'.

names2.push("25"); ///["Duyen", "Tran", "Typescript", 25]

console.log(">>> check name 2: ", names2);

let count2: number = 1;  
count2 = 10;
console.log(">>> check count 2: ", count2);
