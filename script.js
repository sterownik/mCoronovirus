const api_url = 'https://api.covid19api.com/dayone/country/poland';

const api_url2 = 'https://api.covid19api.com/summary';
var time = document.querySelector("p.time");
var polandtotalconfirmed = document.querySelector("p.totalconfirmed");
var polandtodayconfirmed = document.querySelector("p.todayconfirmed");

var polandtotaldeaths = document.querySelector("p.totaldeaths");
var polandtodaydeaths = document.querySelector("p.todaydeaths");

var polandtotalrecover = document.querySelector("p.totalrecover");
var polandtodayrecover = document.querySelector("p.todayrecover");


var Worldtotalconfirmed = document.querySelector("p.totalconfirmedWorld");
var Worldtodayconfirmed = document.querySelector("p.todayconfirmedWorld");

var Worldtotaldeaths = document.querySelector("p.totaldeathsWorld");
var Worldtodaydeaths = document.querySelector("p.todaydeathsWorld");

var Worldtotalrecover = document.querySelector("p.totalrecoverWorld");
var Worldtodayrecover = document.querySelector("p.todayrecoverWorld");

var dayPoland;
var newDeathsPoland;
var newConfirmedPoland;
var totalConfirmedPoland;
var totalDeathsPoland;
var newRecoveredPoland;
var totalRecoveredPoland;
var timePoland;

var worldNewConfirmed;
var worldTotalConfirmed;
var worldNewDeaths;
var worldTotalDeaths;
var worldNewRecovered;
var worldTotalRecovered;


var day1;
var data1Confirmed;

var day2;
var data2Confirmed;

var day3;
var data3Confirmed;

var day4;
var data4Confirmed;

var day5;
var data5Confirmed;

var day6;
var data6Confirmed;

var day7;
var day8;
var day9;
var day10;
var day11;
var day12;
var day13;
var day14;

var data1Deaths;
var data2Deaths;
var data3Deaths;
var data4Deaths;
var data5Deaths;
var data6Deaths;
var data7Deaths;
var data8Deaths;
var data9Deaths;
var data10Deaths;
var data11Deaths;
var data12Deaths;
var data13Deaths;
var data14Deaths;

var data1Recovered;
var data2Recovered;
var data3Recovered;
var data4Recovered;
var data5Recovered;
var data6Recovered;
var data7Recovered;
var data8Recovered;
var data9Recovered;
var data10Recovered;
var data11Recovered;
var data12Recovered;
var data13Recovered;
var data14Recovered;


async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();

    data1Confirmed = data[data.length - 1].Confirmed;
    day1 = data[data.length - 1].Date;


    data2Confirmed = data[data.length - 2].Confirmed;
    day2 = data[data.length - 2].Date;

    data3Confirmed = data[data.length - 3].Confirmed;
    day3 = data[data.length - 3].Date;

    data4Confirmed = data[data.length - 4].Confirmed;
    day4 = data[data.length - 4].Date;

    data5Confirmed = data[data.length - 5].Confirmed;
    day5 = data[data.length - 5].Date;

    data6Confirmed = data[data.length - 6].Confirmed;

    day6 = data[data.length - 6].Date;
    day7 = data[data.length - 7].Date;
    day8 = data[data.length - 8].Date;
    day9 = data[data.length - 9].Date;
    day10 = data[data.length - 10].Date;
    day11 = data[data.length - 11].Date;
    day12 = data[data.length - 12].Date;
    day13 = data[data.length - 13].Date;
    day14 = data[data.length - 14].Date;


    data1Deaths = data[data.length - 1].Deaths;
    data2Deaths = data[data.length - 2].Deaths;
    data3Deaths = data[data.length - 3].Deaths;
    data4Deaths = data[data.length - 4].Deaths;
    data5Deaths = data[data.length - 5].Deaths;
    data6Deaths = data[data.length - 6].Deaths;
    data7Deaths = data[data.length - 7].Deaths;
    data8Deaths = data[data.length - 8].Deaths;
    data9Deaths = data[data.length - 9].Deaths;
    data10Deaths = data[data.length - 10].Deaths;
    data11Deaths = data[data.length - 11].Deaths;
    data12Deaths = data[data.length - 12].Deaths;
    data13Deaths = data[data.length - 13].Deaths;
    data14Deaths = data[data.length - 14].Deaths;


    data1Recovered = data[data.length - 1].Recovered;
    data2Recovered = data[data.length - 2].Recovered;
    data3Recovered = data[data.length - 3].Recovered;
    data4Recovered = data[data.length - 4].Recovered;
    data5Recovered = data[data.length - 5].Recovered;
    data6Recovered = data[data.length - 6].Recovered;
    data7Recovered = data[data.length - 7].Recovered;
    data8Recovered = data[data.length - 8].Recovered;
    data9Recovered = data[data.length - 9].Recovered;
    data10Recovered = data[data.length - 10].Recovered;
    data11Recovered = data[data.length - 11].Recovered;
    data12Recovered = data[data.length - 12].Recovered;
    data13Recovered = data[data.length - 13].Recovered;
    data14Recovered = data[data.length - 14].Recovered;

    // console.log(data3Recovered);



}
getData();
async function getDataDay() {
    const response = await fetch(api_url2);
    const data = await response.json();
    worldNewConfirmed = data.Global.NewConfirmed;
    worldTotalConfirmed = data.Global.TotalConfirmed;
    worldNewDeaths = data.Global.NewDeaths;
    worldTotalDeaths = data.Global.TotalDeaths;
    worldNewRecovered = data.Global.NewRecovered;
    worldTotalRecovered = data.Global.TotalRecovered;

    Worldtotalconfirmed.textContent = worldTotalConfirmed;
    Worldtodayconfirmed.textContent = worldNewConfirmed;

    Worldtotaldeaths.textContent = worldTotalDeaths;
    Worldtodaydeaths.textContent = worldNewDeaths;

    Worldtotalrecover.textContent = worldTotalRecovered;
    Worldtodayrecover.textContent = worldNewRecovered;









    for (i = 0; i <= data.Countries.length; i++) {
        if (data.Countries[i].Country == "Poland") {

            newConfirmedPoland = data.Countries[i].NewConfirmed;

            totalConfirmedPoland = data.Countries[i].TotalConfirmed;

            newDeathsPoland = data.Countries[i].NewDeaths;

            totalDeathsPoland = data.Countries[i].TotalDeaths;

            newRecoveredPoland = data.Countries[i].NewRecovered;

            totalRecoveredPoland = data.Countries[i].TotalRecovered;

            dayPoland = data.Countries[i].Date.slice(0, 10);

            timePoland = data.Countries[i].Date.slice(11, 16);
            time.textContent = dayPoland + ", " + timePoland;

            polandtotalconfirmed.textContent = totalConfirmedPoland;
            polandtodayconfirmed.textContent = newConfirmedPoland;

            polandtotaldeaths.textContent = totalDeathsPoland;
            polandtodaydeaths.textContent = newDeathsPoland;

            polandtotalrecover.textContent = totalRecoveredPoland;
            polandtodayrecover.textContent = newRecoveredPoland;





            // console.log(timePoland);

        }
    }

}
// getDataDay();

setTimeout(() => {
    var zachorowania = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(zachorowania, {
        type: 'bar',
        data: {
            labels: [day6.slice(0, 10), day5.slice(0, 10), day4.slice(0, 10), day3.slice(0, 10), day2.slice(0, 10), day1.slice(0, 10)],
            datasets: [{
                label: '',
                data: [data6Confirmed, data5Confirmed, data4Confirmed, data3Confirmed, data2Confirmed, data1Confirmed],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                fontColor: 'black',
            },
            title: {
                display: true,
                text: "Liczba zakażeń z 6 poprzednich dni w Polsce",
                fontColor: '#6fffe9',
                fontSize: '12'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#5bc0be',
                        beginAtZero: true,

                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#5bc0be',


                    }
                }]
            },

        }
    });


}, 2000);
setTimeout(() => {
    var zgony = document.getElementById('myChart2').getContext('2d');
    var myChart = new Chart(zgony, {
        type: 'line',
        data: {
            labels: [day14.slice(5, 10), day13.slice(5, 10), day12.slice(5, 10), day11.slice(5, 10), day10.slice(5, 10), day9.slice(5, 10), day8.slice(5, 10), day7.slice(5, 10), day6.slice(5, 10), day5.slice(5, 10), day4.slice(5, 10), day3.slice(5, 10), day2.slice(5, 10), day1.slice(5, 10)],
            datasets: [{
                label: '',
                data: [data14Deaths, data13Deaths, data12Deaths, data11Deaths, data10Deaths, data9Deaths, data8Deaths, data7Deaths, data6Deaths, data5Deaths, data4Deaths, data3Deaths, data2Deaths, data1Deaths],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
                fontColor: 'black',
            },
            title: {
                display: true,
                text: "Liczba zgonów zakażonych na Covid-19 z ostatnich 14 dni w Polsce",
                fontColor: '#f3ffbd',
                fontSize: '12'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: '#ff1654',
                        beginAtZero: true,

                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: '#ff1654',


                    }
                }]
            },

        }
    });

}, 2000);

setTimeout(() => {
    getDataDay();
}, 2000);