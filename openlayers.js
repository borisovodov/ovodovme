// Пример использования тайлов в OpenLayers
ol.proj.useGeographic();
var openlayersSource = new ol.source.VectorTile({
    format: new ol.format.MVT()
});
var openlayersMap = new ol.Map({
    target: "openlayers-map",
    layers: [
        new ol.layer.VectorTile({
            source: openlayersSource,
        }),
    ],
    view: new ol.View({
        center: [mapLongitude, mapLatitude],
        zoom: mapZoom,
    }),
});
olms.apply(openlayersMap, mapStyleOL);

// Эта логика нужно только для работы зума и перемещения на демо странице
openlayersMap.on("moveend", function() {
    if (!updatingMaps) {
        const center = openlayersMap.getView().getCenter();
        const zoom = openlayersMap.getView().getZoom();
        if (isValidCoordinate(center[1], center[0]) && isValidZoom(zoom)) {
            updateMaps(center[1], center[0], zoom);
        }
    }
});