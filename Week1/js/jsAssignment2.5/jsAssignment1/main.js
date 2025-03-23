function sortArray(arr, order) {
  return arr.slice().sort((a, b) => order === "asc" ? a - b : b - a);
}

function displaySortedArray() {

  let numbers = [42, 12, 8, 99, 23, 5];

  console.log("Original Array:", numbers);

  console.log("Sorted Ascending:", sortArray(numbers, "asc"));

  console.log("Sorted Descending:", sortArray(numbers, "desc"));
}
