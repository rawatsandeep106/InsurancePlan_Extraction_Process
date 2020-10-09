function myFunction() {
var Data = ""

for (i = 0; i < document.body.getElementsByClassName("insurance-items").length/2; i++) {
  Data += document.body.getElementsByClassName("insurance-items")[i].innerText + "\n";
}

return Data;
}