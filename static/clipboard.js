function addToClipboard() {
  navigator.clipboard.writeText("https://ovodov.me/trud.ics");
}

var checkbox = document.getElementById('authSwitch')

var authOff = document.getElementsByClassName("authOff")
var authOn = document.getElementsByClassName("authOn")

function checker(checked) {
  checked ? showAuth() : hideAuth()
}

function showAuth() {
  authOff[0].style.display = "none"
  authOn[0].style.display = "inline-block"
}

function hideAuth() {
  authOff[0].style.display = "inline-block"
  authOn[0].style.display = "none"
}

checker(this.checked)

checkbox.addEventListener('change', function () {
  checker(this.checked)
})