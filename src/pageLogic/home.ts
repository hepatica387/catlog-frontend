// @ts-nocheck
export function initHomePage() {
const cards = document.querySelectorAll(".cat-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    window.location.href = "/detail";
  });
});
}
