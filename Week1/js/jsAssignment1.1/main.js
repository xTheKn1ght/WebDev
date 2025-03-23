function convertTemp (){
  let celsius = parseFloat(document.getElementById("celsiusInput").value);
  let fahrenheit = (celsius * 9/5) +32;
  let kelvin = celsius + 273.15;

  document.getElementById("output").innerHTML =
    `<p>Fahrenheit: ${fahrenheit.toFixed(2)} F degrees</p>
     <p>Kelvin: ${kelvin.toFixed(2)}K degrees</p>`
}
