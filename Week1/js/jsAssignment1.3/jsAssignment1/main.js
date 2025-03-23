function checkTriangle(){
  let input = prompt("Enter the three side lengths separated by commas (like 1,9,4)");

  if(input){
    let [a, b, c] = input.split(",").map(Number);

    if(isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
      alert("Invalid input, please enter three positive numbers separated by commas.");
      return;
    }

    if(!(a + b > c && a + c > b && b + c > a)){
      document.getElementById("output").innerHTML = `<p>Not a valid triangle</p>`;
      return;
    }

    let triangleType = "";

    if(a === b && b === c){
      triangleType = "Equilateral triangle (all sides equal)";
    } else if(a === b || a === c || b === c) {
      triangleType = "Isosceles triangle (two of the sides are equal)";
    } else {
      triangleType = "Scalene triangle (no sides equal)";
    }

    document.getElementById("output").innerHTML = `<p>Triangle Type: ${triangleType}</p>`;
  }
}
