
const map = L.map('map').setView([-22.95199282859533, -43.21107744478464], 14)
const layer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

layer.addTo(map);
