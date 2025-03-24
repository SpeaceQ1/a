
var map = L.map('map').setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var countries = [
    { name: "Russia", coords: [61, 105] },
    { name: "Canada", coords: [56, -106] },
    { name: "China", coords: [35, 104] },
    { name: "United States", coords: [37, -95] },
    { name: "Brazil", coords: [-14, -51] }
];

countries.forEach(country => {
    L.marker(country.coords).addTo(map)
        .bindPopup(`<b>${country.name}</b>`)
        .openPopup();
});