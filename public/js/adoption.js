function activeBtn(e) {
  const btns = document.querySelectorAll(".category-btn");
  const target = e.target.closest(".category-btn");
  const selectedCategory = target.dataset.category;
  const catGrid = document.querySelector(".cat-grid");
  const cards = document.querySelectorAll(".cat-grid .cat-card");
  let visibleCount = 0;

  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  target.classList.add("active");

  cards.forEach((card) => {
    const cardCategory = card.dataset.category;
    if (selectedCategory === "all" || cardCategory === selectedCategory) {
      card.style.display = "";
      visibleCount += 1;
    } else {
      card.style.display = "none";
    }
  });

  if (!catGrid) return;

  let emptyMessage = catGrid.querySelector(".cat-empty-message");

  if (!emptyMessage) {
    emptyMessage = document.createElement("p");
    emptyMessage.className = "cat-empty-message";
    emptyMessage.textContent = "해당 카테고리의 분양 고양이가 없습니다.";
    catGrid.appendChild(emptyMessage);
  }

  emptyMessage.style.display = visibleCount === 0 ? "block" : "none";
}

document.querySelectorAll(".category-btn").forEach((button) => {
  button.addEventListener("click", activeBtn);
});
