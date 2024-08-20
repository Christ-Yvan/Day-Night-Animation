const sky = document.querySelector('.sky');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

let isDay = true;

function toggleDayNight() {
    if (isDay) {
        sky.style.backgroundColor = 'var(--sky-night)';
        sun.style.display = 'none';
        moon.style.display = 'block';
    } else {
        sky.style.backgroundColor = 'var(--sky-day)';
        sun.style.display = 'block';
        moon.style.display = 'none';
    }
    isDay = !isDay;
}

setInterval(toggleDayNight, 20000); 