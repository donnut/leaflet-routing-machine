var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var control = L.Routing.control(L.extend(window.lrmConfig, {
    waypoints: [
        L.latLng(52.0894452,5.1045869),
        L.latLng(52.092608,5.1103979)
    ],
    routeWhileDragging: true,
    reverseWaypoints: false,
    showAlternatives: false
})).addTo(map);

L.Routing.errorControl(control).addTo(map);

map.on('click', function(e) {
    control.spliceWaypoints(control.getWaypoints().length, 1, e.latlng)
    map.closePopup();
});