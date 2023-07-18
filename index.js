function hasTargetSum(array, target) {
  //create an object to keep track of numbers we've already seen
  const seenNumbers = {}
  //iterate through each number in the array
  for(const num of array){
    // for current num, identify a complement that adds to the target (comp = target - num)
    const complement = target - num
    //check if any key on our object is a complement
    //if(seenNumbers[complement] === true) return true
    if(complement in seenNumbers) return true
    seenNumbers[num] = true
  }
  return false
}



// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for(let i = 0; i < array.length-1; i++){
//     for(let j = i+1; j < array.length; j++){
//       if (array[i] + array[j] === target) return true
//     }
//   }
//   return false
// }

/* 
  Write the Big O time complexity of your function here:
  O(n^2)
*/

/* 
  Add your pseudocode here:
  -start with first element and loop through each following element to check sum against value
    - move to second element and loop through following elements to check sum against value
      - and so on
  - if sum = true at any point return true, else false

*/

/*
  Add written explanation of your solution here:
  function should return true if any two values in given array are equal to the given target
  take each element and add each element to see if value is equal to target
  move on to next element and do not repeat previous steps
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
