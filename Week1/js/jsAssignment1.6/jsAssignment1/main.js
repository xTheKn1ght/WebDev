function genMultiplicationTable() {

  let number = parseInt(prompt("Enter a positive integer:"));

  if (isNaN(number) || number <= 0) {
      alert("Invalid input. Please enter a positive integer.");
      return;
  }

  let tableHTML = "<table border='1' cellspacing='0' cellpadding='5'>";

  for (let i = 1; i <= number; i++) {
      tableHTML += "<tr>";
      for (let j = 1; j <= number; j++) {
          tableHTML += `<td>${i * j}</td>`;
      }
      tableHTML += "</tr>";
  }
  tableHTML += "</table>";

  document.getElementById("output").innerHTML = tableHTML;
}
