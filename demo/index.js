// Логика для общего управления зумом и центром карты

let mapLatitude = 56.83842;
let mapLongitude = 60.60312;
let mapZoom = 15;
let updatingMaps = false;

let styleElement = document.getElementById("styleSelect")
let mapStyle = getStyle();

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
	olMap.getView().setCenter([longitude, latitude]);
	olMap.getView().setZoom(zoom);
	updatingMaps = false;
	updateDisplay();
}

function updateStyle() {
	mapStyle = getStyle();

	maplibreGLMap.setStyle(mapStyle);
	leafletLayer.getMaplibreMap().setStyle(mapStyle);
	olms.apply(olMap, mapStyle);
}

function getStyle() {
	return `https://betamaps.familio.org/styles/${styleElement.value}.json`;
}

styleElement.addEventListener("change", (event) => {
	updateStyle();
});

updateDisplay();
