// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

function findFloor(arr, num) {

   let half = Math.floor(arr.length / 2)
   let middleVal = arr[half]

   let leftMostIdx = middleVal - 1;
   let rightMostIdx = arr.length - 1

   if (middleVal < num) {
      // target is on the right side
      // console.log('Target is on RIGHT side')
      for (let i = rightMostIdx; i > half; i--) {

         if (arr[i] <= num) {
            return arr[i]
         }
      }
      return -1

   } else if (middleVal > num) {
      // target is on the left side
      // console.log('Target is on LEFT side')
      for (let i = leftMostIdx; i >= 0; i--) {
         if (arr[i] <= num) {
            return arr[i]
         }
      }
      return -1
   } else if (middleVal === num) {
      return middleVal
   }
}


findFloor([1, 2, 8, 10, 10, 12, 19], 9) // 8
findFloor([1, 2, 8, 10, 10, 12, 19], 20) // 19
findFloor([1, 2, 8, 10, 10, 12, 19], 0) // -1

module.exports = findFloor