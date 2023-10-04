// Function to perform temperature conversion
function convertTemperature() {
  const temperatureInput = parseFloat(
    document.getElementById("temperature").value
  );
  const unit = document.getElementById("unit").value;
  let result, result2;

  if (isNaN(temperatureInput)) {
    document.getElementById("result").innerHTML =
      "Please enter a valid number.";
    return;
  }

  if (unit === "celsius") {
    result = (temperatureInput * 9) / 5 + 32;
    result2 = temperatureInput + 273.15;
    document.getElementById(
      "result"
    ).innerHTML = `${temperatureInput} °C is ${result.toFixed(
      2
    )} °F and ${result2.toFixed(2)}  k `;
  } else if (unit === "fahrenheit") {
    result = ((temperatureInput - 32) * 5) / 9;
    result2 = ((temperatureInput - 32) * 5) / 9 + 273.15;
    document.getElementById(
      "result"
    ).innerHTML = `${temperatureInput} °F is ${result.toFixed(
      2
    )} °C and ${result2.toFixed(2)} k`;
  } else if (unit === "kelvin") {
    result = temperatureInput + 273.15;
    result2 = ((temperatureInput - 273.15) * 9) / 5 + 32;
    document.getElementById(
      "result"
    ).innerHTML = `${temperatureInput} K is ${result.toFixed(
      2
    )} °C and ${result2.toFixed(2)} °F`;
  }
}

// Trigger the conversion when the "Enter" key is pressed
document
  .getElementById("temperature")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      convertTemperature();
    }
  });

function display_c() {
  var refresh = 1000; // Refresh rate in milli seconds
  mytime = setTimeout("display_ct()", refresh);
}
function display_ct() {
  var x = new Date();
  var x1 = x.toLocaleString(); // changing the display to UTC string
  document.getElementById("ct").innerHTML = x1;
  tt = display_c();
}
// Attach the conversion function to the Convert button as well
document
  .getElementById("convertBtn")
  .addEventListener("click", convertTemperature);
