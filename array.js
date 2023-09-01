// Whole-script strict mode syntax
"use strict";

//function with a nested array (for array)
function vegetables() {
    const vegetableList = ["carrots", "celery", "cucumbers", "lettuce", "arugala", "spinach", "raddishes"];
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

/*
--------------------------------------------------------------------------------------------------
Practicing array attributes:
--------------------------------------------------------------------------------------------------
*/

/*
push()
pop()
copyWithin()
fill()
reverse()	
shift()	
sort()	
splice()	
unshift(v1, v2)
*/

//adding to the array
//groceryList.push("Frozen fruit");

//removing from the array
//groceryList.pop();

//reversing order of array
//groceryList.reverse();

//copies object specified and adds duplicate wherever specified
//groceryList.copyWithin(2, 1);

//change all of the array's values to the same new value
//groceryList.fill("Dark Chocolate Hershey Syrup");

//removes first object of the array
//groceryList.shift();

//sorts array in order of character count (with the boolean alway being last)
//groceryList.sort();

//adds an object wherever you specify or replaces an existing object
//groceryList.splice(1, 0, "Protein powder");

//adds new object at the beginning of the array
//groceryList.unshift("Pickles")

//defining i
let i = 0;

//displaying grocerylist array on website
for (i = 0; i < groceryList.length; i++) {
  document.writeln(groceryList[i]);
}