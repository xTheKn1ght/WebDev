function calculateDist(){
  let input = prompt("Enter coordinates as x1,y1,x2,y2 (comma separates):");

  if(input){
    let [x1, y1, x2, y2] = input.split(",").map(Number);

    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)){
      alert("Invalid input. Please enter four numbers seperated by commas");
      return
    }

    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 -y1), 2));

    document.getElementById("output").innerHTML =
      `<p>Distance: ${distance.toFixed(2)}</p>`;
  }
}
