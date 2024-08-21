const sky = document.querySelector('.sky');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

let isDay = true;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random position
    const top = Math.random() * 100; // Percentage
    const left = Math.random() * 100; // Percentage

    // Random size
    const size = Math.random() * 3 + 1; // Between 1px and 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Position star
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;

    return star;
}

function generateStars(count) {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < count; i++) {
        const star = createStar();
        starsContainer.appendChild(star);
    }
}

function createCloud(leftPosition) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');

    // Random vertical position within a range (not too low)
    const top = Math.random() * 15 + 5; // Between 5% and 20% from the top
    const size = Math.random() * 100 + 150; // Between 150px and 250px width

    cloud.style.top = `${top}%`;
    cloud.style.left = `${leftPosition}%`;
    cloud.style.width = `${size}px`;
    cloud.style.height = `${size / 2}px`;

    return cloud;
}

function generateClouds() {
    const cloudsContainer = document.querySelector('.clouds');
    cloudsContainer.innerHTML = ''; // Clear previous clouds

    // Create clouds at specific horizontal positions
    const cloudPositions = [10, 40, 70, 90]; // Left positions in percentages

    cloudPositions.forEach(position => {
        const cloud = createCloud(position);
        cloudsContainer.appendChild(cloud);
    });
}

// Generate stars and clouds
generateStars(100);
generateClouds(100);

function toggleDayNight() {
    const stars = document.querySelector('.stars');
    const clouds = document.querySelector('.clouds');

    if (isDay) {
        sky.style.backgroundColor = 'var(--sky-night)';
        sun.style.display = 'none';
        moon.style.display = 'block';
        stars.style.display = 'block'; // Show stars
        clouds.style.display = 'none'; // Hide clouds
    } else {
        sky.style.backgroundColor = 'var(--sky-day)';
        sun.style.display = 'block';
        moon.style.display = 'none';
        stars.style.display = 'none'; // Hide stars
        clouds.style.display = 'block'; // Show clouds
        generateClouds(); // Generate new clouds for the day
    }
    isDay = !isDay;
}

// Initial call
toggleDayNight();

// Toggle between day and night every 20 seconds
setInterval(toggleDayNight, 20000);