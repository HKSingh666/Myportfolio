// script.js
function updateTime() {
  const now = new Date();
  const options = {hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
  document.getElementById('current-time').innerHTML = now.toLocaleString('en-US', options);
}

setInterval(updateTime, 1000);
window.onload = updateTime;

const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
  convertBtn.setAttribute("disabled", "");
});

// Enable/disable button based on input
degree.addEventListener("input", () => {
  if (degree.value.trim() === "") {
    convertBtn.setAttribute("disabled", "");
  } else {
    convertBtn.removeAttribute("disabled");
  }
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
  convertBtn.innerHTML = "<span class='icon'><i class='fa fa-spinner fa-spin'></i> Converting...</span>";
  setTimeout(() => {
    convertBtn.innerHTML = "<span>Convert</span>";
  }, 1000);
});

function convertToCelsius() {
  let inputValue = parseFloat(degree.value);
  
  if (isNaN(inputValue)) {
    celsiusField.innerHTML = "Please enter a valid number.";
    return;
  }

  setTimeout(() => {
    if (tempType.value === "fahrenheit") {
      const FahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${FahrenheitToCelsius.toFixed(3)} &deg;C`;
    } 


    else if (tempType.value === "celsius") {
      const CelsiusToFahrenheit =inputValue*1.8 + 32;
      celsiusField.innerHTML = `${CelsiusToFahrenheit.toFixed(3)} F`;
    }
    
    else if (tempType.value === "kelvin") {
      const celsiusToKelvin = inputValue + 273.15;
      celsiusField.innerHTML = `${celsiusToKelvin.toFixed(3)} K`;
   }

  
   else if (tempType.value === "celsius2") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;C`;
  }


   else if (tempType.value === "degree1") {
    const FahrenheitToKelvin= (inputValue-32)*5/9+273.15;
    celsiusField.innerHTML = `${FahrenheitToKelvin.toFixed(3)} K`;
  }


  else if (tempType.value === "degree2") {
    const KelvinToFahrenheit = (inputValue-273.15)*9/5+32;
    celsiusField.innerHTML = `${KelvinToFahrenheit.toFixed(3)} F`;
  }
  }, 1200);
}