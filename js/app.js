const hourBtn = document.getElementById('hour-btn');
const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const toggleBtn = document.getElementsByClassName('toggle-btn');
const alertBtn = document.querySelector('.alert-btn');
const alertBanner = document.querySelector('.alert-wrapper');



alertBtn.addEventListener('click', () => {

    alertBanner.style.display = 'none';

});

const tc = document.getElementById('traffic-chart').getContext('2d');

function setActive() {

    let trafficButtons = [hourBtn, dailyBtn, weeklyBtn, monthlyBtn];

    trafficButtons.forEach(item => {



        item.addEventListener('click', event => {


            if (item.className === 'active') {

                item.className = '';

            } else {


                item.className = 'active';

            }
        });



    });
}

setActive();

toggleBtn[0].addEventListener('click', () => {

    if (toggleBtn[0].classList.contains("toggle-off")) {

        toggleBtn[0].src = 'images/SVG/on.svg';

        toggleBtn[0].classList.remove("toggle-off");

    } else if (toggleBtn[0].classList.contains("toggle-btn")) {

        toggleBtn[0].src = 'images/SVG/off.svg';

        toggleBtn[0].classList.add("toggle-off");

    }

});

toggleBtn[1].addEventListener('click', () => {

    if (toggleBtn[1].classList.contains("toggle-off")) {

        toggleBtn[1].src = 'images/SVG/on.svg';

        toggleBtn[1].classList.remove("toggle-off");

    } else if (toggleBtn[1].classList.contains("toggle-btn")) {

        toggleBtn[1].src = 'images/SVG/off.svg';

        toggleBtn[1].classList.add("toggle-off");

    }

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