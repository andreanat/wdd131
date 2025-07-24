// Footer: current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;

// Wind chill calculation
const temperature = 45; // °F
const windSpeed = 5;    // mph

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(1);
}

const windChillElement = document.getElementById('windchill');
if (temperature <= 50 && windSpeed > 3) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °F`;
} else {
  windChillElement.textContent = 'N/A';
}