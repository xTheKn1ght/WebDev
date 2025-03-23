function calcGrade() {
  let score = parseInt(prompt("Enter your score (0-100):"));

  if (isNaN(score) || score < 0 || score > 100) {
      alert("Invalid input. Please enter a number between 0 and 100.");
      return;
  }

  let grade;

  if (score >= 0 && score <= 39) {
      grade = 0;
  } else if (score >= 40 && score <= 51) {
      grade = 1;
  } else if (score >= 52 && score <= 63) {
      grade = 2;
  } else if (score >= 64 && score <= 75) {
      grade = 3;
  } else if (score >= 76 && score <= 87) {
      grade = 4;
  } else if (score >= 88 && score <= 100) {
      grade = 5;
  }

  document.getElementById("output").innerHTML = `<p>Your grade: ${grade}</p>`;
}
