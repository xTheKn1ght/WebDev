function calcSum() {
  let number = parseInt(prompt("Enter a positive integer:"));

  if (isNaN(number) || number <= 0) {
      alert("Invalid input. Please enter a positive integer.");
      return;
  }

  let sum = 0;

  for (let i = 1; i <= number; i++) {
      sum += i;
  }

  document.getElementById("output").innerHTML = `<p>Sum of natural numbers up to ${number}: ${sum}</p>`;
}
