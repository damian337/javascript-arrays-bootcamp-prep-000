var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    var newArray = [`${element}`, ...array]
    return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array = [`${element}`, ...array]
    return array
}

console.log(destructivelyAddElementToBeginningOfArray(["array", "array1", "array2"], "element"))
