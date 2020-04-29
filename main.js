function show_email(id) {
  if (document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = "bzl [at] mit.edu"
    document.getElementById(id).innerHTML += "&emsp;OR&emsp;"
    document.getElementById(id).innerHTML += "belindali [at] fb.com";
    document.getElementById(id).innerHTML += "&emsp;OR&emsp;"
    document.getElementById(id).innerHTML += "belindazli65 [at] gmail.com"
  } else {
    document.getElementById(id).innerHTML = "";
  }
}
