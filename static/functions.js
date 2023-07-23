function addToClipboard() {
  navigator.clipboard.writeText("https://ovodov.me/trud.ics");
}

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