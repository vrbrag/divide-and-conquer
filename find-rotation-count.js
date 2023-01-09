// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// find lowest number
// find index of lowest number

function findRotationCount(arr) {
   let min = arr.reduce((a, b) => Math.min(a, b))
   // console.log(arr.indexOf(min))
   return arr.indexOf(min)
}

findRotationCount([15, 18, 2, 3, 6, 12]) // 2   (2,3,6,12,15,18) (18,2,3,6,12,15) (15,18,2,3,6,12)
findRotationCount([7, 9, 11, 12, 5]) // 4
findRotationCount([7, 9, 11, 12, 15]) // 0

module.exports = findRotationCount