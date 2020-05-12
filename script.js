const api_url = 'https://api.covid19api.com/dayone/country/poland';
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


}
getData();

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