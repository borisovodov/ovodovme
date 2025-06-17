// Тоггл управления аутентичностью
function checkAuth(checkbox) {
	const auths = document.getElementsByClassName("auth")
	const moderns = document.getElementsByClassName("modern")

	for (let i = 0; i < auths.length; i++) {
		if (checkbox.checked) {
			auths[i].style.display = "inline";
		} else {
			auths[i].style.display = "none";
		}
	}

	for (let i = 0; i < moderns.length; i++) {
		if (checkbox.checked) {
			moderns[i].style.display = "none";
		} else {
			moderns[i].style.display = "inline";
		}
	}
}

// Наполнение модального окна для места
const placeModal = document.getElementById("placeModal")
console.log("placeModal:", placeModal)
placeModal.addEventListener("show.bs.modal", event => {
	// Link that triggered the modal
	const link = event.relatedTarget

	// Extract info from data-bs-* attributes
	const name = link.getAttribute("data-bs-name")
	const yandex = link.getAttribute("data-bs-yandex")
	const dgis = link.getAttribute("data-bs-dgis")
	const website = link.getAttribute("data-bs-website")

	console.log("Modal triggered for:", name, yandex, dgis, website)

	// Update the modal's content.
	const modalTitle = placeModal.querySelector(".modal-title")
	const modalBodyYandex = placeModal.querySelector("#yandex")
	const modalBodyDgis = placeModal.querySelector("#dgis")
	const modalBodyWebsite = placeModal.querySelector("#website")

	console.log("modalTitle:", modalTitle)
	console.log("modalBodyYandex:", modalBodyYandex)
	console.log("modalBodyDgis:", modalBodyDgis)
	console.log("modalBodyWebsite:", modalBodyWebsite)

	modalTitle.textContent = name
	modalBodyYandex.textContent = yandex
	modalBodyDgis.textContent = dgis
	modalBodyWebsite.textContent = website
})