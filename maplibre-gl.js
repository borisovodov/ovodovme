// Пример использования тайлов в MapLibre GL JS
var maplibreGLMap = new maplibregl.Map({
    container: "maplibre-gl-map",
    style: mapStyle,
    center: [mapLongitude, mapLatitude],
    zoom: mapZoom
});

// Эта логика нужно только для работы зума и перемещения на демо странице
maplibreGLMap.on("moveend", function() {
    if (!updatingMaps) {
        const center = maplibreGLMap.getCenter();
        const zoom = maplibreGLMap.getZoom();
        if (isValidCoordinate(center["lat"], center["lng"]) && isValidZoom(zoom)) {
            updateMaps(center["lat"], center["lng"], zoom);
        }
    }
});