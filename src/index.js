function updateCityDateTime(cityDateTime) {
  let firstCity = document.querySelector("#first-city");

  let firstCityDate = firstCity.querySelector(".country-date");

  let firstCityTime = firstCity.querySelector(".country-time");
  firstCityDate.innerHTML = cityDateTime.substring(0, cityDateTime.length - 26);
  firstCityTime.innerHTML = cityDateTime.substring(
    cityDateTime.length - 26,
    cityDateTime.length
  );
}
function updateTime() {
  let selectedCity = document.getElementById("countries");
  if (selectedCity.value != "") {
    let cityDateTime = moment()
      .tz(cityName)
      .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");
    updateCityDateTime(cityDateTime);
  } else {
    let cityDateTime = moment()
      .tz(moment.tz.guess())
      .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");
    updateCityDateTime(cityDateTime);
  }
}

function updateCity(event) {
  if (event.target.value.length) {
    cityName = event.target.value;
  } else {
    cityName = moment.tz.guess();
  }

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
let selectedCity = document.getElementById("countries");
setInterval(updateTime, 1000);
let selectedCityElement = document.querySelector("#countries");
selectedCityElement.addEventListener("change", updateCity);
