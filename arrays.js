var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
    var newArray = [`${element}`, ...array]
    return newArray
}

console.log(addElementToBeginningOfArray(['foo', 'food', 'foodie'], 1))
