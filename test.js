// Spread Operator

let greeting = "Hello Everyone";
let charlist = [...greeting];
console.log(charlist);

// 2. Combining an array
let arr1 = ["amazon", "google"];
let arr12 = ["facebook", "instagram"];

let combineArr = [...arr1, ...arr12];
console.log(combineArr);

// Combining Objects
let obj1 = {
    name: "salesforce",
    age: 23
}

let obj2 = {
    name: "facebook",
    age: 55
}

// obj2 overrides the proprties of obj1
let obj3 = { ...obj1, ...obj2 }
console.log(obj3);

// Shallow Copy
var arr10 = ["x", "y", "z"];
arr10.push(20)
console.log(arr10);

var arr11 = arr10;
arr11.push("Nikhil")

console.log(arr10);
// It copies the reference of arr 10 in arr11. So the changes made in arr11 also reflects in arr10 
console.log(arr11);

var shallArr10 = ["x", "y", "z"];
// Creating a reference array. So that the shallow doesnt get copied
var shallArr11 = [...shallArr10]
console.log("shall"+shallArr11);
shallArr11.push("Joey");
console.log("shall10"+shallArr10);
console.log("shall11After"+shallArr11);

// 6. Nested Copy
var arrObj = [
    {
        name:"Chan"

    },
    {
        name:"Salesforce"
    }
]

// Shallow Copy only supports one level of datastructure

var arrObj1 = [...arrObj]
console.log(arrObj1);
arrObj1[0].name = "Superman";

// Here the shallow doesnt work because its two level i.e., array of objects
console.log("ArrObj1"+arrObj1)
console.log("ArrObj"+arrObj)

// Hack for nested copy

var arrObjStr = [
    {
        name:"Chan"

    },
    {
        name:"Salesforce"
    }
]

var arrObjStr1 = JSON.parse(JSON.stringify(arrObjStr))
arrObjStr1[0].name = "Joey";
console.log("arrObjStr --> "+arrObjStr);
console.log("arrObjStr1 --> "+arrObjStr1);


