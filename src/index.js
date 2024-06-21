function updateTime() {
  let selectedCity = document.getElementById("countries");

  if (selectedCity.value != "") {
    let firstCity = document.querySelector("#first-city");

    let firstCityDate = firstCity.querySelector(".country-date");

    let firstCityTime = firstCity.querySelector(".country-time");

    let cityDateTime = moment()
      .tz(selectedCity.value)
      .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");

    firstCityDate.innerHTML = cityDateTime.substring(
      0,
      cityDateTime.length - 25
    );
    firstCityTime.innerHTML = cityDateTime.substring(
      cityDateTime.length - 25,
      cityDateTime.length
    );
  }
}

function updateCity(event) {
  if (event.target.value.length) {
    cityName = event.target.value;

    cityNameFriendly = cityName.replace("_", " ").split("/")[1];

    let countriesDisplayedElement = document.querySelector(
      ".countries-displayed"
    );
    countriesDisplayedElement.innerHTML = `<div class="country" id="first-city">
          <div class="country-details">
            ${cityNameFriendly}
            <div class="country-date"></div>
          </div>
          <span class="country-time"></span>
        </div>`;
  }
}
setInterval(updateTime, 1000);
let selectedCityElement = document.querySelector("#countries");

selectedCityElement.addEventListener("change", updateCity);
