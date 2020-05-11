function show_email(id) {
  if (document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = "bzl [at] mit.edu";
    document.getElementById(id).innerHTML += "&emsp;OR&emsp;";
    document.getElementById(id).innerHTML += "belindali [at] fb.com";
    document.getElementById(id).innerHTML += "&emsp;OR&emsp;";
    document.getElementById(id).innerHTML += "belindazli65 [at] gmail.com";
  } else {
    document.getElementById(id).innerHTML = "";
  }
}

function show_bib(id) {
  id += "_bib"
  if (document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = `@InProceedings{li2020active,<br>\
    title={Active Learning for Coreference Resolution using Discrete Annotation},<br>\
    author={Belinda Z. Li, Gabriel Stanovsky, Luke Zettlemoyer}, \
    year={2020}, \
    eprint={2004.13671}, \
    archivePrefix={arXiv}, \
    primaryClass={cs.CL}, \
    publisher = {Association for Computational Linguistics} \
}`
  } else {
    document.getElementById(id).innerHTML = "";
  }
}
