const btn = document.getElementById('navToggle');
const nav = document.getElementById('primaryNav');
if (btn && nav){
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.textContent = open ? '✕' : '☰';
  });
}

const yearSpan = document.getElementById('year');
const modSpan = document.getElementById('lastModified');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modSpan) modSpan.textContent = document.lastModified;

function calculateWindChillF(tempF, windMph){
  if (tempF <= 50 && windMph > 3){
    return Math.round(
      35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * tempF * Math.pow(windMph, 0.16))
    );
  }
  return null;
}

const tempEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const chillEl = document.getElementById('chill');

const TEMP_F = 48; 
const WIND_MPH = 7;

if (tempEl && windEl && chillEl){
  tempEl.textContent = TEMP_F;
  windEl.textContent = WIND_MPH;

  const chill = calculateWindChillF(TEMP_F, WIND_MPH);
  chillEl.textContent = (chill === null) ? 'N/A' : `${chill}`;
}
