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
placeModal.addEventListener("show.bs.modal", event => {
	// Link that triggered the modal
	const link = event.relatedTarget

	// Extract info from data-bs-* attributes
	const name = link.getAttribute("data-bs-name")
	const yandex = link.getAttribute("data-bs-yandex")
	const doublegis = link.getAttribute("data-bs-doublegis")
	const website = link.getAttribute("data-bs-website")

	// Update the modal's content.
	const modalTitle = placeModal.querySelector(".modal-title")
	const modalBodyYandex = placeModal.querySelector("#yandex")
	const modalBodyDoublegis = placeModal.querySelector("#doublegis")
	const modalBodyWebsite = placeModal.querySelector("#website")

	modalTitle.textContent = name
	modalBodyYandex.setAttribute("href", yandex)
	modalBodyDoublegis.setAttribute("href", doublegis)
	modalBodyWebsite.setAttribute("href", website)
})