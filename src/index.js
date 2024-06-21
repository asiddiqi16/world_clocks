setInterval(function () {
  let firstCity = document.querySelector("#first-city");

  let firstCityDate = firstCity.querySelector(".country-date");

  let firstCityTime = firstCity.querySelector(".country-time");

  let cityDateTime = moment()
    .tz("Australia/Melbourne")
    .format("dddd, MMMM Do, YYYY h:mm:ss [<small>]A[</small>]");

  firstCityDate.innerHTML = cityDateTime.substring(0, cityDateTime.length - 25);
  firstCityTime.innerHTML = cityDateTime.substring(
    cityDateTime.length - 25,
    cityDateTime.length
  );
}, 1000);
