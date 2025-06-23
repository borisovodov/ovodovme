// Пример использования тайлов в OpenLayers
ol.proj.useGeographic();
let olSource = new ol.source.VectorTile({
    format: new ol.format.MVT()
});
let olLayer = new ol.layer.VectorTile({
    source: olSource,
});
let olView = new ol.View({
    center: [mapLongitude, mapLatitude],
    zoom: mapZoom,
});
let olMap = new ol.Map({
    target: "openlayers-map",
    layers: [olLayer],
    view: olView,
});
olms.apply(olMap, mapStyle);

// Эта логика нужно только для работы зума и перемещения на демо странице
olMap.on("moveend", function() {
    if (!updatingMaps) {
        const center = olMap.getView().getCenter();
        const zoom = olMap.getView().getZoom();
        if (isValidCoordinate(center[1], center[0]) && isValidZoom(zoom)) {
            updateMaps(center[1], center[0], zoom);
        }
    }
});