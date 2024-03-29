let interval;

function updateTime() {
    const now = new Date();
    const second = now.getSeconds().toString().padStart(2, '0');
    const minute = now.getMinutes().toString().padStart(2, '0');
    const realHour = now.getHours();
    const ampm = realHour >= 12 ? 'PM' : 'AM';
    let hour = (realHour % 12) || 12;
    hour = hour.toString().padStart(2, '0');

    document.getElementById('watch').textContent = `${hour}:${minute}:${second} ${ampm}`;
    const currentTime = `${realHour}:${minute}`;

    const alarmTime = document.getElementById('alarmTime');
    console.log(alarmTime);

    if (currentTime === alarmTime.value) {
        alert('Alarm is Up');
        alarmTime.value = '';
    }
}

interval = setInterval(updateTime, 1000);