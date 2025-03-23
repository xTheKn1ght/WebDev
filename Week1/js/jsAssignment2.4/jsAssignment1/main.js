function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

function displaySortedArray() {
  let numbers = [42, 12, 8, 99, 23, 5];

  console.log("Original Array:", numbers);

  let sortedNumbers = sortArray(numbers);

  console.log("Sorted Array:", sortedNumbers);
}
