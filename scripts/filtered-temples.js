// Select the menu button and nav
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

// Toggle the nav open/closed when button clicked
menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');

  // Change the button text when open or closed
  if (nav.classList.contains('open')) {
    menuButton.textContent = '✕'; // Close icon
  } else {
    menuButton.textContent = '≡'; // Hamburger icon
  }
});

// Set current year in the footer
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Set last modified date in the footer
document.getElementById('lastModified').textContent = document.lastModified;

const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Colonia Juárez Chihuahua Temple",
    location: "Colonia Juárez, Chihuahua, Mexico",
    dedicated: "1999, March, 6",
    area: 6800,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Washington D.C. Temple",
    location: "Kensington, Maryland, USA",
    dedicated: "1974,November, 19",
    area: 156558,
    imageUrl: "images/temple1.jpg"
  },
  {
    templeName: "Oakland Temple",
    location: "Oakland, California, USA",
    dedicated: "1974, November, 17",
    area: 95000,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/temple5.jpeg"
  },
    {
    templeName: "Durban Temple",
    location: "Umhlanga, KwaZulu‑Natal, South Africa",
    dedicated: "2020, February, 16",
    area: 1845,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Hong Kong Temple",
    location: "Kowloon Tong, Hong Kong, China",
    dedicated: "1996, May, 26",
    area: 21744,
    imageUrl: "images/temple7.jpeg"
  },
    {
    templeName: "Madrid Temple",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 45800,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Rio de Janeiro Temple",
    location: "Rio de Janeiro, Brazil",
    dedicated: "2022, May, 8",
    area: 29675,
    imageUrl: "images/temple9.jpg"
  },
];
function displayTemples(temples) {
  const container = document.querySelector("main");
  container.innerHTML = ""; // Clear previous content

  temples.forEach((temple) => {
    const card = document.createElement("section");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `Image of ${temple.templeName}`);
    image.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    container.appendChild(card);
  });
}
displayTemples(temples);
function filterTemples(criteria) {
  let filteredTemples = [];

  switch (criteria) {
    case "old":
      filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
      break;
    case "new":
      filteredTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
      break;
    case "large":
      filteredTemples = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filteredTemples = temples.filter(t => t.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }

  displayTemples(filteredTemples);
}
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // prevent page jump
    const filter = link.textContent.toLowerCase(); // gets 'home', 'old', etc.
    filterTemples(filter);
  });
});
