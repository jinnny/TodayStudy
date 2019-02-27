const clockContent = document.querySelector('.clock-content'),
    clockTime = clockContent.querySelector('.js-clock__time'),
    clockDate = clockContent.querySelector('.js-clock__date');

function getTime() {
    let currentDate = new Date(),
        month = String(currentDate.getMonth()),
        date = String(currentDate.getDate()),
        day = currentDate.getDay(),
        dayweek,
        hours = String(currentDate.getHours()),
        minute = String(currentDate.getMinutes()),
        seconds = String(currentDate.getSeconds()),
        time = ((hours >= 9) ? ((hours > 12) ? ('0'+ (hours - 12)) : hours ) : ('0' + hours))
            + ':' +
            ((minute <= 9) ? ('0' + minute): minute)
            + ':' + ((seconds <= 9) ? ('0'+ seconds): seconds);

    switch (day) {
        case 1: dayweek = '월';
            break;
        case 2: dayweek = '화';
            break;
        case 3: dayweek = '수';
            break;
        case 4: dayweek = '목';
            break;
        case 5: dayweek = '금';
            break;
        case 6: dayweek = '토';
            break;
        case 7: dayweek = '일';
            break;
    }
        // console.log(dayweek);
    let today = month + '월'+ date + '일' + dayweek + '요일';
    clockDate.innerHTML  = today;
    clockTime.innerHTML  = time;
    // console.log(clockDate);
    // console.log(clockTime);
}


function init() {
    getTime();
    setInterval(getTime, 1000)
}

init();
