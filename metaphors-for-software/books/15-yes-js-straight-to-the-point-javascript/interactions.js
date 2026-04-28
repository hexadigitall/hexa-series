(function () {
  function buildToc() {
    var toc = document.getElementById("toc-list");
    if (!toc) {
      return;
    }

    var sections = document.querySelectorAll("main section[id]");
    sections.forEach(function (section) {
      var title = section.querySelector("h2");
      if (!title) {
        return;
      }

      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + section.id;
      a.textContent = title.textContent;
      li.appendChild(a);
      toc.appendChild(li);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildToc);
  } else {
    buildToc();
  }
})();
