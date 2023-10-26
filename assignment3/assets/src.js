document.getElementById("searchButton").addEventListener("click", function () {
    var country = document.getElementById("countryInput").value;
    var url = `https://covid-193.p.rapidapi.com/statistics?country=${country}`;

    fetch(url, {
        method: "GET",
        headers: {
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com',
            'X-RapidAPI-Key': '7e43c0dce5msh2a9086d8139a043p1226e5jsnc22583f59c14'
        }
    })
        .then(response => response.json())
        .then(data => {
            if (data.response && data.response.length > 0) {
                var covidData = data.response[0];
                document.getElementById("activeCases").textContent = covidData.cases.active;
                document.getElementById("newCases").textContent = covidData.cases.new;
                document.getElementById("recoveredCases").textContent = covidData.cases.recovered;
                document.getElementById("totalCases").textContent = covidData.cases.total;
                document.getElementById("totalDeaths").textContent = covidData.deaths.total;
                document.getElementById("totalTests").textContent = covidData.tests.total;
            } else {
                document.getElementById("covidData").textContent = "Data tidak ditemukan.";
            }
        })
        .catch(error => {
            console.error(error);
            document.getElementById("covidData").textContent = "Terjadi kesalahan dalam mengambil data.";
        });
});