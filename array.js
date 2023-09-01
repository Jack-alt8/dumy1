// Whole-script strict mode syntax
"use strict";

//function with a nested array (for array)
function vegetables() {
    const vegetableList = ["carrots", "celery", "cucumbers", "lettuce", "arugala", "spinach", "raddishes"];
    const carrots = 6;
    const celery = 10;
    const cucumbers = 3;
    const lettuce = 1;
    const arugala = 1;
    const spinach = 2;
    const raddishes = 14;
}

//an object unable to increase its amount (for array)
const obj = {
    almondMilk: 1,
    propertyIsEnumerable() {
        return false;
    },
};

//grocerylist array (including a string, number, function with nested array, an object, and a boolean)
const groceryList = ["Bananas", 8, vegetables, true, obj];

//displaying grocerylist array on console
groceryList.forEach(function (item, index) {
  console.log(item, index);
});

//defining i
let i = 0;

//displaying grocerylist array on website
for (i = 0; i < groceryList.length; i++) {
  document.writeln(groceryList[i]);
}

groceryList.push("Frozen fruit");
groceryList.pop(obj);