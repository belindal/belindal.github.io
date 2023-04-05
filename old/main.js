var id_to_bibs = new Map([
  ["taskbench_bib", `@misc{https://doi.org/10.48550/arxiv.2112.03204,
    doi = {10.48550/ARXIV.2112.03204},
    url = {https://arxiv.org/abs/2112.03204},
    author = {Li, Belinda Z. and Yu, Jane and Khabsa, Madian and Zettlemoyer, Luke and Halevy, Alon and Andreas, Jacob},
    keywords = {Computation and Language (cs.CL), Machine Learning (cs.LG), FOS: Computer and information sciences, FOS: Computer and information sciences},
    title = {Quantifying Adaptability in Pre-trained Language Models with 500 Tasks},
    publisher = {arXiv},
    year = {2021},
    copyright = {arXiv.org perpetual, non-exclusive license}
}`],
  ["state_probes_bib", `@inproceedings{li-etal-2021-implicit,
    title = "Implicit Representations of Meaning in Neural Language Models",
    author = "Li, Belinda Z.  and
      Nye, Maxwell  and
      Andreas, Jacob",
    booktitle = "Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers)",
    month = aug,
    year = "2021",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2021.acl-long.143",
    doi = "10.18653/v1/2021.acl-long.143",
    pages = "1813--1827",
}`],
  ["unifiedm2_bib", `@inproceedings{lee-etal-2021-unifying,
    title = "On Unifying Misinformation Detection",
    author = "Lee, Nayeon  and
      Li, Belinda Z.  and
      Wang, Sinong  and
      Fung, Pascale  and
      Ma, Hao  and
      Yih, Wen-tau  and
      Khabsa, Madian",
    booktitle = "Proceedings of the 2021 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies",
    month = jun,
    year = "2021",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2021.naacl-main.432",
    pages = "5479--5485"
}`],
  ["pretrain_mask_policy_bib", `@misc{ye2021influence,
      title={On the Influence of Masking Policies in Intermediate Pre-training}, 
      author={Qinyuan Ye and Belinda Z. Li and Sinong Wang and Benjamin Bolte and Hao Ma and Wen-tau Yih and Xiang Ren and Madian Khabsa},
      year={2021},
      eprint={2104.08840},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}`],
  ["qa_mask_bib", `@misc{ye2020studying,
      title={Studying Strategically: Learning to Mask for Closed-book QA}, 
      author={Qinyuan Ye and Belinda Z. Li and Sinong Wang and Benjamin Bolte and Hao Ma and Xiang Ren and Wen-tau Yih and Madian Khabsa},
      year={2020},
      eprint={2012.15856},
      archivePrefix={arXiv},
      primaryClass={cs.CL}
}`],
  ["elq_bib", `@inproceedings{li-etal-2020-efficient-one,
    title = "Efficient One-Pass End-to-End Entity Linking for Questions",
    author = "Li, Belinda Z.  and
      Min, Sewon  and
      Iyer, Srinivasan  and
      Mehdad, Yashar  and
      Yih, Wen-tau",
    booktitle = "Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP)",
    month = nov,
    year = "2020",
    address = "Online",
    publisher = "Association for Computational Linguistics",
    url = "https://www.aclweb.org/anthology/2020.emnlp-main.522",
    pages = "6433--6441",
}`],
  ["linformer_bib", `@misc{wang2020linformer,
    title={Linformer: Self-Attention with Linear Complexity},
    author={Sinong Wang and Belinda Z. Li and Madian Khabsa and Han Fang and Hao Ma},
    year={2020},
    eprint={2006.04768},
    archivePrefix={arXiv},
    primaryClass={cs.LG}
}`],
  ["lm_fact_bib", `@inproceedings{lee-etal-2020-language,
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

var news_entries = [
    ["June 2021", `New preprint on <a href="https://arxiv.org/abs/2106.00737" target="_blank">how language models represent meaning</a>, accepted to ACL! I will also be talking about it at <a href="https://primer.ai/" target="_blank">Primer AI</a> and <a href="https://deepmind.com/">DeepMind</a>.`],
    ["Apr 2021", `I&rsquo;ve been selected for the <a href="https://www.nsfgrfp.org/" target="_blank">NSF GRFP</a> and the <a href="https://ndseg.sysplus.com/" target="_blank">NDSEG Fellowship</a>!`],
    ["Sep 15, 2020", `Short paper on efficient entity linking for questions accepted to <a href="https://2020.emnlp.org/">EMNLP 2020</a>. Congrats to all coauthors!`],
    ["Sep 01, 2020", `Joined MIT.`],
    ["June 08, 2020", `We prove that self-attention is low rank and exploit it to create linear-time Transformers. Check out <a href="https://arxiv.org/abs/2006.04768">our paper</a>.`],
    ["May 11, 2020", `Short paper on leveraging LMs for fact checking accepted to <a href="https://fever.ai/">FEVER workshop</a>. Congrats to first author Nayeon for the fine work.`],
    ["Apr 05, 2020", `Happy to announce that I&rsquo;ll be starting my PhD this fall at MIT.`],
    ["Apr 03, 2020", `Short paper on active learning for coreference resolution accepted to <a href="https://acl2020.org/">ACL 2020</a>. (First publication! 🎉) Congrats and thanks to my amazing coauthors, Gabi and Luke!`],
    ["Aug 19, 2019", `Joined Facebook.`],
]
var curr_news_cutoff = 3

function show_email(id) {
  if (document.getElementById(id).innerHTML === "") {
    document.getElementById(id).innerHTML = "bzl [at] mit.edu\n";
  } else {
    document.getElementById(id).innerHTML = "";
  }
}

function toggle_bib(id) {
  id += "_bib"
  if (document.getElementById(id).innerHTML === "") {
    var bib = id_to_bibs.get(id);
    var num_lines = bib.split("\n").length+1;

    document.getElementById(id).innerHTML = `<textarea readonly id="textarea_${id}" rows="${num_lines}" width=100%>${bib}</textarea><div>⠀</div>`;
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

function display_publications() {
    var news_entries_text = ``
    for (var i=0; i<id_to_bibs.length; i++) {
        //console.log(news_entries[i]);
        news_entries_text += `
             <tr>
               <td class="date">${news_entries[i][0]}</td>
               <td>${news_entries[i][1]}</td>
             </tr>
        `;
    }
    document.getElementById("recent_news").innerHTML = `
          <table class="news">
            <tbody>${news_entries_text}</tbody>
          </table>
    `;
}

function display_recent_news() {
    var news_entries_text = ``
    for (var i=0; i<curr_news_cutoff; i++) {
        //console.log(news_entries[i]);
        news_entries_text += `
             <tr>
               <td class="date">${news_entries[i][0]}</td>
               <td>${news_entries[i][1]}</td>
             </tr>
        `;
    }
    document.getElementById("recent_news").innerHTML = `
          <table class="news">
            <tbody>${news_entries_text}</tbody>
          </table>
    `;
}

function toggle_older_news() {
  if (document.getElementById("news_button_text").innerHTML === "[Expand All]") {
    var news_entries_text = ``
    for (var i=curr_news_cutoff; i<news_entries.length; i++) {
      //console.log(news_entries[i][0])
      news_entries_text += `
                <tr>
                  <td class="date">${news_entries[i][0]}</td>
                  <td>${news_entries[i][1]}</td>
                </tr>
      `
    }
    document.getElementById("older_news").innerHTML = `
          <table class="news">
            <tbody>${news_entries_text}</tbody>
          </table>
    `;
    document.getElementById("news_button_text").innerHTML = `[Collapse]`;
  } else {
    document.getElementById("older_news").innerHTML = "";
    document.getElementById("news_button_text").innerHTML = `[Expand All]`;
  }
}

