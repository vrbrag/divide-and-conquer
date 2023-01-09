// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

function sortedFrequency(arr, num) {
   let freq = new Map();

   for (let val of arr) {
      let valCount = freq.get(val) || 0;
      freq.set(val, valCount + 1);
   }

   if (freq.has(num)) {
      // console.log(freq.get(num))
      return freq.get(num)
   }
   // console.log(-1)
   return -1
}





sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2) // 4
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3) // 1
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1) // 2
sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4) // -1

module.exports = sortedFrequency