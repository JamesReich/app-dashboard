const hourBtn = document.getElementById('hour-btn');
const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');



const tc = document.getElementById('traffic-chart').getContext('2d');

hourBtn.addEventListener('click', (e) => {


    hourBtn.className = 'active';
    dailyBtn.className = '';
    weeklyBtn.className = '';
    monthlyBtn.className = '';


});
dailyBtn.addEventListener('click', () => {


    hourBtn.className = '';
    dailyBtn.className = 'active';
    weeklyBtn.className = '';
    monthlyBtn.className = '';


});
weeklyBtn.addEventListener('click', () => {


    hourBtn.className = '';
    dailyBtn.className = '';
    weeklyBtn.className = 'active';
    monthlyBtn.className = '';


});
monthlyBtn.addEventListener('click', () => {


    hourBtn.className = '';
    dailyBtn.className = '';
    weeklyBtn.className = '';
    monthlyBtn.className = 'active';


});

const trafficChart = new Chart(tc, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31',],
        datasets: [{
            label: 'Traffic',
            data: [750, 1250, 1000, 2000, 1500, 1750, 1400, 1900, 2300, 1500, 2500],
            backgroundColor: [

                'rgba(97, 149, 209, 0.3)'

            ],
            borderColor: [

                'rgba(97, 149, 209, 1)',

            ],
            borderWidth: 1,
            lineTension: 0.4,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }

        },

        plugins: {
            legend: {
                display: false
            }
        }

    }
});

const dtc = document.getElementById('daily-traffic-chart').getContext('2d');
const dailyTrafficChart = new Chart(dtc, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            label: 'Daily Traffic',
            data: [75, 110, 175, 125, 225, 200, 100],
            backgroundColor: [

                'rgba(97, 149, 209, 1)'

            ],
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }

        },

        plugins: {
            legend: {
                display: false
            }
        }

    }
});

const mu = document.getElementById('mobile-users-chart').getContext('2d');
const mobileUser = new Chart(mu, {
    type: 'doughnut',
    data: {
        labels: ['Desktop', 'Tablet', 'Phones'],

        datasets: [{
            label: 'Daily Traffic',
            data: [300, 100, 100],
            backgroundColor: [

                'rgb(97, 149, 209)',
                '#52b69a',
                '#9d4edd'

            ],
            borderWidth: 0,
            fill: true
        }]
    },
    options: {
        scales: {
            yAxes: [{
                gridLines: {
                    drawBorder: false,
                },
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
            }],

        },

        plugins: {
            legend: {
                display: true,
                position: 'right'
            }

        }

    }
});