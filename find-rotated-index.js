// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function should return the index of num in the array. If the value is not found, return -1.

// find the index of num 
function findRotatedIndex(arr, num) {
   let left = arr.slice(0, arr.length / 2)
   let right = arr.slice((arr.length / 2))

   if (left[0] > num) {
      // find num in right
      for (let i in right) {
         if (right[i] === num) {
            // console.log(left.length + +i)
            return left.length + +i
         }

      }
      console.log(-1)
      return -1
   } else {
      // find num in left
      for (let i in left) {
         if (left[i] === num) {
            // console.log(+i)
            return +i
         }
      }
      // console.log(-1)
      return -1
   }
}
findRotatedIndex([3, 4, 1, 2], 4) // 1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
findRotatedIndex([37, 44, 66, 102, 10, 22], 14) // -1
findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

module.exports = findRotatedIndex