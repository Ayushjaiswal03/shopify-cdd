document.addEventListener("DOMContentLoaded", () => {
  const productForm = document.querySelector("form[action*='/cart/add']");
  const stickyBar = document.getElementById("sticky-atc");

  if (!productForm || !stickyBar) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          stickyBar.classList.add("show");
        } else {
          stickyBar.classList.remove("show");
        }
      });
    },
    { threshold: 0 }
  );

  observer.observe(productForm);
});

const stickyBtn = document.getElementById("sticky-add-to-cart");

stickyBtn.addEventListener("click", () => {
  const form = document.querySelector("form[action*='/cart/add']");
  const formData = new FormData(form);

  stickyBtn.classList.add("loading");
  stickyBtn.innerText = "Adding...";

  fetch("/cart/add.js", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then(() => {
      stickyBtn.innerText = "Added ✓";

      setTimeout(() => {
        stickyBtn.classList.remove("loading");
        stickyBtn.innerText = "Add to Cart";
      }, 1500);
    })
    .catch(() => {
      stickyBtn.innerText = "Error";
    });
});

function updateStickyVariant() {
  const selected = document.querySelector(
    "variant-selects [data-selected-variant]"
  );

  if (selected) {
    const variant = JSON.parse(selected.textContent);
    document.getElementById("sticky-variant").innerText =
      variant.options.join(" / ");
  }
}

document.addEventListener("change", updateStickyVariant);
document.addEventListener("DOMContentLoaded", updateStickyVariant);

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}