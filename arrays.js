var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array1, element1) {
    `${array1}` = ["element2", "element3", "element4"]
    var array2 = [`${element1}`, ...`${array1}`]
}