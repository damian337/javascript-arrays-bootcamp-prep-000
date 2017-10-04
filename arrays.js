var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    var newArray = [`${element}`, ...array]
    return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array = [`${element}`, ...array]
    console.log(array)
    return array
}

destructivelyAddElementToBeginningOfArray(["m", "n", "p"], "element")