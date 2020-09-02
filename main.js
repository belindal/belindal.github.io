function show_email(id) {
  if (document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = "bzl [at] mit.edu\n";
  } else {
    document.getElementById(id).innerHTML = "";
  }
}

var id_to_bibs = new Map([
  ["linformer_bib", `@misc{@misc{wang2020linformer,
    title={Linformer: Self-Attention with Linear Complexity},
    author={Sinong Wang and Belinda Z. Li and Madian Khabsa and Han Fang and Hao Ma},
    year={2020},
    eprint={2006.04768},
    archivePrefix={arXiv},
    primaryClass={cs.LG}
}`],
  ["lm_fact_bib",
      `@inproceedings{lee-etal-2020-language,
    title = "Language Models as Fact Checkers?",
    author = "Lee, Nayeon  and
      Li, Belinda  and
      Wang, Sinong  and
      Yih, Wen-tau  and
      Ma, Hao  and
      Khabsa, Madian",
    booktitle = "Proceedings of the Third Workshop on Fact Extraction and VERification (FEVER)",
    month = jul,
    year = "2020",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2020.fever-1.5",
    pages = "36--41",
}`],
  ["al_coref_bib", `@inproceedings{li-etal-2020-active,
    title = "Active Learning for Coreference Resolution using Discrete Annotation",
    author = "Li, Belinda Z.  and
      Stanovsky, Gabriel  and
      Zettlemoyer, Luke",
    booktitle = "Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics",
    month = jul,
    year = "2020",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2020.acl-main.738",
    pages = "8320--8331",
}`],
])

function toggle_bib(id) {
  id += "_bib"
  if (document.getElementById(id).innerHTML === "") {
    var bib = id_to_bibs.get(id);
    var num_lines = bib.split("\n").length;

    document.getElementById(id).innerHTML = `<textarea readonly id="textarea_${id}" rows="${num_lines}" width=100%>${bib}</textarea>`;
    document.getElementById(id + "_text").innerHTML = `Hide`;
  } else {
    document.getElementById(id + "_text").innerHTML = `Show`;
    document.getElementById(id).innerHTML = "";
  }
}

function copy_bib(id) {
  textarea_id = "textarea_" + id + "_bib";
  if (document.getElementById(id + '_bib').innerHTML === "") {
    toggle_bib(id);
  }
  let textarea = document.getElementById(textarea_id);
  textarea.select();
  document.execCommand("copy");
}

