const hourBtn = document.getElementById('hour-btn');
const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const toggleBtn = document.getElementsByClassName('toggle-btn');
const alertBtn = document.querySelector('.alert-btn');
const alertBanner = document.querySelector('.alert-wrapper');
const notiIcon = document.querySelector('.noti-icon');
const userList = document.getElementById('user-list');
const sentSuccess = document.getElementById('sent-success-wrapper');
const sentFailed = document.getElementById('sent-failed-wrapper');
const notiTray = document.getElementById('noti-tray-wrapper');
const notiBell = document.getElementById('noti-bell');
const notibtn = document.getElementsByClassName('noti-tray-btn');
const userSrch = document.getElementById('search-user-name');

userSrch.addEventListener('focus', () => {

    ul = document.getElementById('user-list');
    li = ul.getElementsByTagName('li');

    ul.style.visibility = "visible";

});


alertBtn.addEventListener('click', () => {

    alertBanner.style.display = 'none';

    notiIcon.classList.remove('noti-icon');


});

sentSuccess.style.visibility = 'hidden'
sentFailed.style.visibility = 'hidden'
userList.style.visibility = 'hidden';
notiTray.style.visibility = 'hidden';

notiBell.addEventListener('click', () => {

    if (notiTray.style.visibility == 'hidden') {

        notiTray.style.visibility = 'visible';

    } else if (notiTray.style.visibility == 'visible') {

        notiTray.style.visibility = 'hidden';

    }

});

function removeNoti(btn) {

    let previous = btn.previousSibling;

    previous.parentNode.removeChild(previous);
    btn.style.display = 'none';



}

function searchUser() {

    userList.style.visibility = 'visible';
    // Declare variables
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-user-name');
    filter = input.value.toUpperCase();
    ul = document.getElementById('user-list');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].querySelectorAll(".user-result")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }


}


function fillResult(btn) {

    let input = document.getElementById('search-user-name');

    const userResult = document.querySelectorAll('.user-result');

    input.value = btn.innerHTML;

    userList.style.visibility = 'hidden';

}

function populateStorage() {

    localStorage.setItem('svg', 'off.svg');


}

function submitForm() {

    let input = document.getElementById('search-user-name');
    let messageBox = document.getElementById('message-user-box');

    if (input.value == '') {

        sentFailed.style.visibility = 'visible';
        sentSuccess.style.visibility = 'hidden';

        input.style.border = '#d05050 1px solid';
        input.placeholder = 'Please enter a user name...';



    } else if (messageBox.value == '') {

        sentFailed.style.visibility = 'visible';
        sentSuccess.style.visibility = 'hidden';

        messageBox.style.border = '#d05050 1px solid';
        messageBox.placeholder = 'Please enter a message...';



    } else if (messageBox.value == '' && input.value == '') {

        sentFailed.style.visibility = 'visible';
        sentSuccess.style.visibility = 'hidden';

        messageBox.style.border = '#d05050 1px solid';
        messageBox.placeholder = 'Please enter a message...';

        input.style.border = '#d05050 1px solid';
        input.placeholder = 'Please enter a user name...';


    } else {

        sentSuccess.style.visibility = 'visible';
        sentFailed.style.visibility = 'hidden';

        messageBox.style.border = '1px rgba(141, 141, 142, 0.4) solid';
        messageBox.value = '';
        messageBox.placeholder = 'Message for user';
        input.style.border = '1px rgba(141, 141, 142, 0.4) solid';
        input.value = '';
        input.placeholder = 'Search for a user';

    }




}

hourBtn.className = 'active';

const tch = document.getElementById('traffic-chart').getContext('2d');

const dataHourly = [40, 75, 80, 64, 42, 32, 64, 73, 59, 40, 20];
const labelsHourly = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

const dataDaily = [120, 450, 600, 250, 350, 380, 400, 650, 400, 370, 200];
const labelsDaily = ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const dataWeekly = [300, 1050, 1200, 1600, 1500, 1750, 1450, 2850, 2250, 1500, 2500];
const labelsWeekly = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];

const dataMonthly = [4250, 5250, 2500, 7600, 8500, 7450, 6000, 9450, 10000, 7250, 5250];
const labelsMonthly = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];

function addData(data, labels) {
    trafficChartHourly.data.datasets[0].data = data;
    trafficChartHourly.data.labels = labels;
    trafficChartHourly.update();
}

const trafficChartHourly = new Chart(tch, {
    type: 'line',
    data: {
        labels: labelsHourly,
        datasets: [{
            label: 'Traffic',
            data: dataHourly,
            backgroundColor: [

                'rgba(97, 149, 209, 0.3)'

            ],
            borderColor: [

                'rgba(97, 149, 209, 1)',

            ],
            borderWidth: 1,
            lineTension: 0.4,
            fill: true,
            aspectRatio: 2.5,
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



hourBtn.addEventListener('click', (e) => {

    hourBtn.className = 'active';
    dailyBtn.className = '';
    weeklyBtn.className = '';
    monthlyBtn.className = '';

    addData(dataHourly, labelsHourly);

});
dailyBtn.addEventListener('click', () => {


    hourBtn.className = '';
    dailyBtn.className = 'active';
    weeklyBtn.className = '';
    monthlyBtn.className = '';

    addData(dataDaily, labelsDaily);

});
weeklyBtn.addEventListener('click', () => {


    hourBtn.className = '';
    dailyBtn.className = '';
    weeklyBtn.className = 'active';
    monthlyBtn.className = '';

    addData(dataWeekly, labelsWeekly);

});
monthlyBtn.addEventListener('click', () => {

    hourBtn.className = '';
    dailyBtn.className = '';
    weeklyBtn.className = '';
    monthlyBtn.className = 'active';

    addData(dataMonthly, labelsMonthly);

});



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
            fill: true,
            aspectRatio: 2.5,
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
            fill: true,
            aspectRatio: 1.9,
        }]
    },
    options: {
        maintainAspectRatio: false,
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