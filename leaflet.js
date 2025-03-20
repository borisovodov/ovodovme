// Пример использования тайлов в Leaflet через плагин MapLibre GL JS
var leafletMap = L.map("leaflet-map").setView([mapLatitude, mapLongitude], mapZoom);
var leafletMapGL = L.maplibreGL({
    style: mapStyle,
    maxZoom: 19,
    attribution: "© <a href='https://openstreetmap.org/copyright' target='_blank'>OpenStreetMap</a> и <a href='https://maps.familio.org/attribution/' target='_blank'>другие источники</a>"
}).addTo(leafletMap);

// Эта логика нужно только для работы зума и перемещения на демо странице
leafletMap.on("moveend", function() {
    if (!updatingMaps) {
        const center = leafletMap.getCenter();
        const zoom = leafletMap.getZoom();
        if (isValidCoordinate(center.lat, center.lng) && isValidZoom(zoom)) {
            updateMaps(center.lat, center.lng, zoom);
        }
    }
});
