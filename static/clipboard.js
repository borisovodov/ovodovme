function addToClipboard() {
  navigator.clipboard.writeText("https://ovodov.me/trud.ics");
}

function myFunction() {
  var checkBox = document.getElementById("authSwitch");
  var text = document.getElementById("authText");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}