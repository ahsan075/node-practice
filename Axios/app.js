const axios = require("axios");

const url = "https://restcountries.eu/rest/v2/all";

axios
    .get(url)
    .then(function (res) {
        let countryList = res.data;
        let statusCode = res.statusCode;
        let timeZone = res.data[0].timezones;
        // console.log(countryList);
        // console.log(statusCode);
        console.log(timeZone);
    })
    .catch(function (error) {
        console.log(error);
    });
