function backgroundTheme() {}
function updateThreeCities(cityDateTime1, cityDateTime2, cityDateTime3) {
  let firstCity = document.querySelector("#first-city");

  let firstCityDate = firstCity.querySelector(".country-date");

  let firstCityTime = firstCity.querySelector(".country-time");
  firstCityDate.innerHTML = cityDateTime1.substring(
    0,
    cityDateTime1.length - 26
  );
  firstCityTime.innerHTML = cityDateTime1.substring(
    cityDateTime1.length - 26,
    cityDateTime1.length
  );

  let secondCity = document.querySelector("#second-city");

  let secondCityDate = secondCity.querySelector(".country-date");

  let secondCityTime = secondCity.querySelector(".country-time");
  secondCityDate.innerHTML = cityDateTime2.substring(
    0,
    cityDateTime2.length - 26
  );
  secondCityTime.innerHTML = cityDateTime2.substring(
    cityDateTime2.length - 26,
    cityDateTime2.length
  );

  let thirdCity = document.querySelector("#third-city");

  let thirdCityDate = thirdCity.querySelector(".country-date");

  let thirdCityTime = thirdCity.querySelector(".country-time");
  thirdCityDate.innerHTML = cityDateTime3.substring(
    0,
    cityDateTime3.length - 26
  );
  thirdCityTime.innerHTML = cityDateTime3.substring(
    cityDateTime3.length - 26,
    cityDateTime3.length
  );
}

function updateCityDateTime(cityDateTime) {
  let firstCity = document.querySelector("#first-city");

  let firstCityDate = firstCity.querySelector(".country-date");

  let firstCityTime = firstCity.querySelector(".country-time");
  firstCityDate.innerHTML = cityDateTime.substring(0, cityDateTime.length - 26);
  firstCityTime.innerHTML = cityDateTime.substring(
    cityDateTime.length - 26,
    cityDateTime.length
  );

  let timeOfDay = cityDateTime.split("<small>")[1].split("</small>")[0];
  let hours = cityDateTime.split(":")[0];
  hours = parseInt(hours.substring(hours.length - 2, hours.length));

  let bodyElement = document.querySelector("body");

  if (
    ((timeOfDay == "AM") & (hours < 6)) |
    ((timeOfDay == "PM") & (hours >= 6) & (hours < 12))
  ) {
    bodyElement.classList.add("night-theme");
  } else {
    bodyElement.classList.remove("night-theme");
  }
}
function updateTime() {
  let selectedCity = document.getElementById("countries");
  if (selectedCity.value == "") {
    let cityDateTime1 = moment()
      .tz("Australia/Melbourne")
      .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");
    let cityDateTime2 = moment()
      .tz("Europe/Rome")
      .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");
    let cityDateTime3 = moment()
      .tz("America/New_York")
      .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");
    updateThreeCities(cityDateTime1, cityDateTime2, cityDateTime3);
  } else {
    if ((selectedCity.value != "") & (selectedCity.value != "current")) {
      let cityDateTime = moment()
        .tz(selectedCity.value)
        .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");
      updateCityDateTime(cityDateTime);
    } else {
      let cityDateTime = moment()
        .tz(moment.tz.guess())
        .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");
      updateCityDateTime(cityDateTime);
    }
  }
}

function updateCity(event) {
  if (!event.target.value.length) {
    let countriesDisplayedElement = document.querySelector(
      ".countries-displayed"
    );
    countriesDisplayedElement.innerHTML = `<div class="country" id="first-city">
          <div class="country-details">
            Melbourne, Australia
            <div class="country-date"></div>
          </div>
          <span class="country-time"></span>
        </div>
        <div class="country" id="second-city">
          <div class="country-details">
            Rome, Italy
            <div class="country-date"></div>
          </div>
          <span class="country-time"></span>
        </div>
        <div class="country" id="third-city">
          <div class="country-details">
            New York, USA
            <div class="country-date"></div>
          </div>
          <span class="country-time"></span>
        </div>`;
  } else {
    if (event.target.value != "current") {
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
}

let selectedCity = document.getElementById("countries");
setInterval(updateTime, 1000);
let selectedCityElement = document.querySelector("#countries");
selectedCityElement.addEventListener("change", updateCity);
