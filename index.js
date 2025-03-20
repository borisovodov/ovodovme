// Логика для общего управления зумом и центром карты

let mapLatitude = 56.83842;
let mapLongitude = 60.60312;
let mapZoom = 15;
let updatingMaps = false;

let styleElement = document.getElementById("styleSelect")
let mapStyle = `https://maps.familio.org/styles/${styleElement.value}.json`;
let mapStyleOL = `https://maps.familio.org/styles/${styleElement.value}-ol.json`;

function isValidCoordinate(latitude, longitude) {
	return typeof latitude === "number" && 
		typeof longitude === "number" &&
		!isNaN(latitude) && !isNaN(longitude);
}

function isValidZoom(zoom) {
	return typeof zoom === "number" && !isNaN(zoom);
}

function updateDisplay() {
	document.getElementById("zoom").textContent = mapZoom;
	document.getElementById("latitude").textContent = mapLatitude.toFixed(5);
	document.getElementById("longitude").textContent = mapLongitude.toFixed(5);
}

function updateMaps(latitude, longitude, zoom) {
	if (!isValidCoordinate(latitude, longitude) || !isValidZoom(zoom)) {
		console.error("Invalid center or zoom value:", center, zoom);
		return;
	}
	updatingMaps = true;
	mapLatitude = latitude;
	mapLongitude = longitude;
	mapZoom = zoom;

	maplibreGLMap.setCenter([longitude, latitude]);
	maplibreGLMap.setZoom(zoom);
	leafletMap.setView([latitude, longitude], zoom);
	openlayersMap.getView().setCenter([longitude, latitude]);
	openlayersMap.getView().setZoom(zoom);
	updatingMaps = false;
	updateDisplay();
}

function updateStyle() {
	mapStyle = `https://maps.familio.org/styles/${styleElement.value}.json`;
	mapStyleOL = `https://maps.familio.org/styles/${styleElement.value}-ol.json`;

	maplibreGLMap.setStyle(mapStyle);
	leafletMapGL.getMaplibreMap().setStyle(mapStyle);
	olms.apply(openlayersMap, mapStyleOL);
}

styleElement.addEventListener("change", (event) => {
	updateStyle();
});

updateDisplay();
