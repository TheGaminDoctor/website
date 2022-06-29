function currentTime() {
    const clock = document.getElementById('clock');
    const d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let midday = 'PM';

    midday = (h >= 12) ? 'PM' : 'AM';
    hour = (h === 0) ? h === 12 : ((h > 12) ? (h - 12) : h);
    h = updateHours(h);
    m = updateTime(m);

    document.getElementById('clock').innerHTML = `${h}:${m} ${midday}`
}

function updateHours(x) {
    if (x > 12) {
        return x - 12
    } else if (x === 0) {
        return x + 12;
    } else {
        return x;
    }
}

function updateTime(x) {
    if (x < 10) {
        return '0' + x;
    } else {
        return x;
    }
}

currentTime();