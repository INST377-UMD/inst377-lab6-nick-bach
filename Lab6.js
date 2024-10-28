window.onload = function () {
    function getRandomInRange(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    }

    const map = L.map('map').setView([37.0902, -95.7129], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const lat1 = getRandomInRange(30, 35, 3);
    const lon1 = getRandomInRange(-90, -100, 3);

    const lat2 = getRandomInRange(30, 35, 3);
    const lon2 = getRandomInRange(-90, -100, 3);

    const lat3 = getRandomInRange(30, 35, 3);
    const lon3 = getRandomInRange(-90, -100, 3);

    L.marker([lat1, lon1]).addTo(map);
    L.marker([lat2, lon2]).addTo(map);
    L.marker([lat3, lon3]).addTo(map);

    document.getElementById('marker1').textContent = `Marker 1: Latitude: ${lat1}, Longitude: ${lon1}`;
    document.getElementById('marker2').textContent = `Marker 2: Latitude: ${lat2}, Longitude: ${lon2}`;
    document.getElementById('marker3').textContent = `Marker 3: Latitude: ${lat3}, Longitude: ${lon3}`;

    function fetchLocality(lat, lon, localityElementId) {
        fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
            .then(response => response.json())
            .then(data => {
                document.getElementById(localityElementId).textContent = `Locality: ${data.locality}`;
            })
    }

    fetchLocality(lat1, lon1, 'locality1');
    fetchLocality(lat2, lon2, 'locality2');
    fetchLocality(lat3, lon3, 'locality3');

};
