function kelvinToCelsius(kelvin) {
  // K to C
  return parseFloat((kelvin - 273.15).toFixed(2));
}

function kelvinToFahrenheit(kelvin) {
  // K to 
  return parseFloat(((kelvin - 273.15) * 9/5 + 32).toFixed(2))
//gunakan function toFixed dengan parameter 2 untuk membuat nilai mengambil 2 angka di belakang koma
//hasil 
// -273.15 typedata === number
// -459.67 typedata === string 
//kemudian function parseFloat karena hasilnya jadi string gunakan function ini untuk merubah menjadi typedata number
}

function celsiusToFahrenheit(celsius) {
  // C to F
  return parseFloat(((celsius * 9/5) + 32).toFixed(2));
}

function celsiusToKelvin(celsius) {
  // C to K
  return parseFloat((celsius + 273.15).toFixed(2));
}

function fahrenheitToKelvin(fahrenheit) {
  // F to K
  return parseFloat(((fahrenheit - 32) * 5/9 + 273.15).toFixed(2));
}

function fahrenheitToCelsius(fahrenheit) {
  // F to C
  return parseFloat(((fahrenheit - 32) * 5/9).toFixed(2));
}

function convertTemperature(temperature, initialUnit, finalUnit) {
  // Kondisi 2 layer jika suatu kondisi sesuai maka akan masuk ke dalam functionnya 
  if(initialUnit === `K`){
    if(finalUnit === `C`){
      return kelvinToCelsius(temperature);
    }
    else if(finalUnit === `F`){
      return kelvinToFahrenheit(temperature);
    }
  }
  else if(initialUnit === `F`){
    if(finalUnit === `K`){
      return fahrenheitToKelvin(temperature);
    }
    else if(finalUnit === `C`){
      return fahrenheitToCelsius(temperature);
    }
  }
  else if(initialUnit === `C`){
    if(finalUnit === `K`){
      return celsiusToKelvin(temperature);
    }
    else if(finalUnit === `F`){
      return celsiusToFahrenheit(temperature);
    }
  }
}

console.log(convertTemperature(0, 'C', 'K')); // 273.15
console.log(convertTemperature(0, 'C', 'F')); // 32

console.log(convertTemperature(0, 'F', 'C')); // -17.78
console.log(convertTemperature(0, 'F', 'K')); // 255.37

console.log(convertTemperature(0, 'K', 'C')); // -273.15
console.log(convertTemperature(0, 'K', 'F')); // -459.67

module.exports = {
  kelvinToCelsius,
  kelvinToFahrenheit,
  celsiusToFahrenheit,
  celsiusToKelvin,
  fahrenheitToKelvin,
  fahrenheitToCelsius,
  convertTemperature,
};
