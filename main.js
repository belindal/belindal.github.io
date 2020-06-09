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

var id_to_bibs = new Map([
  ["linformer_bib", `@misc{wang2020linformer,
    title={Linformer: Self-Attention with Linear Complexity},
    author={Sinong Wang and Belinda Li and Madian Khabsa and Han Fang and Hao Ma},
    year={2020},
    eprint={2006.04768},
    archivePrefix={arXiv},
    primaryClass={cs.LG}
}`],
  ["lm_fact_bib",
      `@InProceedings{lee2020language,
    title={Language Models as Fact Checkers?},
    author={Nayeon Lee and Belinda Z. Li and Sinong Wang and Wen-tau Yih and Hao Ma and Madian Khabsa},
    year={2020},
    eprint={2006.04102},
    archivePrefix={arXiv},
    primaryClass={cs.CL},
    booktitle={Proceedings of the Second Workshop on Fact Extraction and VERification (FEVER)},
    pages={(to appear)},
}`],
  ["al_coref_bib", `@InProceedings{li2020active,
    title={Active Learning for Coreference Resolution using Discrete Annotation},
    author={Belinda Z. Li and Gabriel Stanovsky and Luke Zettlemoyer},
    year={2020},
    eprint={2004.13671},
    archivePrefix={arXiv},
    primaryClass={cs.CL},
    booktitle={Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics (ACL)},
    pages={(to appear)},
}`],
])

function show_bib(id) {
  id += "_bib"
  if (document.getElementById(id).innerHTML === "") {
    var bib = id_to_bibs.get(id);

    document.getElementById(id).innerHTML = `<textarea readonly id="textarea_${id}" rows="10" width=100%>${bib}</textarea>`;
  } else {
    document.getElementById(id).innerHTML = "";
  }
}

function copy_bib(id) {
  textarea_id = "textarea_" + id + "_bib";
  if (document.getElementById(id + '_bib').innerHTML === "") {
    show_bib(id);
  }
  let textarea = document.getElementById(textarea_id);
  textarea.select();
  document.execCommand("copy");
}

