function extractEvenNumbers() {

  let numbers = [];

  while (true) {
      let input = prompt("Enter a number (or 'done' to finish):");
      if (input.toLowerCase() === 'done') break;
      let num = parseInt(input);
      if (!isNaN(num)) {
          numbers.push(num);
      }
  }

  let evenNumbers = [];

  for (let num of numbers) {
      if (num % 2 === 0) {
          evenNumbers.push(num);
      }
  }

  document.getElementById("output").innerHTML = evenNumbers.length > 0 ? "Even Numbers: " + evenNumbers.join(", ") : "Even Numbers: None";
}
