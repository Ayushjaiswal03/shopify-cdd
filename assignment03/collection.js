function initFilterDrawer() {
  const openBtn = document.getElementById("open-filter-drawer");
  const closeBtn = document.getElementById("close-filter");
  const drawer = document.getElementById("filter-drawer");
  const overlay = document.getElementById("drawer-overlay");

  if (!openBtn || !drawer) return;

  openBtn.onclick = () => {
    drawer.classList.add("open");
    overlay.classList.add("show");
  };

  closeBtn && (closeBtn.onclick = () => {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
  });

  overlay && (overlay.onclick = () => {
    drawer.classList.remove("open");
    overlay.classList.remove("show");
  });
}


initFilterDrawer();
document.addEventListener("shopify:section:load", initFilterDrawer);



document.getElementById("FacetFiltersForm")?.addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  const params = new URLSearchParams(new FormData(form)).toString();

  const grid = document.querySelector("#ProductGridContainer");
  grid.style.opacity = "0.5";

  fetch(`${window.location.pathname}?${params}`)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const newSection = doc.querySelector(`#shopify-section-{{ section.id }}`);
      const currentSection = document.querySelector(`#shopify-section-{{ section.id }}`);

      if (newSection && currentSection) {
        currentSection.innerHTML = newSection.innerHTML;
      }

      grid.style.opacity = "1";
      window.history.pushState({}, "", `?${params}`);

      
      document.getElementById("filter-drawer")?.classList.remove("open");
      document.getElementById("drawer-overlay")?.classList.remove("show");

      updateActiveFilters();
    });
});



function updateActiveFilters() {
  const container = document.getElementById("active-filters");
  if (!container) return;

  container.innerHTML = "";

  const params = new URLSearchParams(window.location.search);

  params.forEach((value, key) => {
    if (key.includes("filter")) {
      const chip = document.createElement("span");
      chip.innerText = value + " ✕";
      chip.className = "filter-chip";

      chip.onclick = () => {
        params.delete(key);
        window.location.search = params.toString();
      };

      container.appendChild(chip);
    }
  });
}

window.addEventListener("load", updateActiveFilters);



document.getElementById("clear-filters")?.addEventListener("click", () => {
  window.location.href = window.location.pathname;
});
