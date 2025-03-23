function arrayOperations() {

  let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
  console.log("Fruits:", fruits);
  console.log("Length of Fruits:", fruits.length);
  console.log("Element at Index 2:", fruits[2]);
  console.log("Last Element of Fruits:", fruits[fruits.length - 1]);
  let vegetables = [];

  for (let i = 0; i < 3; i++) {
      let vegetable = prompt(`Enter vegetable ${i + 1}:`);
      if (vegetable) {
          vegetables.push(vegetable.trim());
      }
  }

  console.log("Vegetables:", vegetables);
  console.log("Length of Vegetables:", vegetables.length);
}
