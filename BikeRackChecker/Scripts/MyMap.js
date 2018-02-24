




mapboxgl.accessToken = 'pk.eyJ1IjoiY2FtcGJlbGwyMCIsImEiOiJjamUwbjFxNm41NTQ1MnFxcDhicnFha3ZjIn0.KyYq-lCDKDjOvL0VHZs0Mg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    // initial position in [lon, lat] format
    //29.4241° N, 98.4936° W -- San Antonio
    center: [29.4241, 98.4936],
    // initial zoom
    zoom: 14
});
