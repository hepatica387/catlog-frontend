// @ts-nocheck
export function initDiaryPage() {
const diaryPosts = [];

const diaryGrid = document.getElementById("diaryGrid");
const diaryPagination = document.getElementById("diaryPagination");
const diaryWriteButton = document.getElementById("diaryWriteBtn");
const diarySearchForm = document.getElementById("diarySearchForm");
const diarySearchInput = document.getElementById("diarySearchInput");
const diaryViewButtons = document.querySelectorAll(".diary-view-btn");
const postsPerPage = 8;
let currentPage = 1;
let filteredPosts = [...diaryPosts];

function renderDiaryPosts(page = currentPage) {
  currentPage = page;
  diaryGrid.innerHTML = "";

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  currentPosts.forEach((post) => {
    const card = document.createElement("article");
    card.className = "diary-card";
    card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" />
      <div class="diary-card-body">
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <time datetime="${post.date.replaceAll(".", "-")}">${post.date}</time>
      </div>
    `;
    diaryGrid.appendChild(card);
  });

  if (currentPosts.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "diary-empty-message";
    emptyMessage.setAttribute("role", "status");
    emptyMessage.textContent = diaryPosts.length === 0
      ? "게시글이 없습니다"
      : "검색 결과가 없습니다.";
    diaryGrid.appendChild(emptyMessage);
  }

  renderPagination();
}

function renderPagination() {
  const pageCount = Math.ceil(filteredPosts.length / postsPerPage);
  diaryPagination.innerHTML = "";

  if (pageCount <= 1) return;

  const prevButton = createPageButton("‹", currentPage - 1, currentPage === 1);
  prevButton.setAttribute("aria-label", "이전 페이지");
  diaryPagination.appendChild(prevButton);

  for (let page = 1; page <= pageCount; page += 1) {
    const button = createPageButton(String(page), page, false);

    if (page === currentPage) {
      button.classList.add("active");
      button.setAttribute("aria-current", "page");
    }

    diaryPagination.appendChild(button);
  }

  const nextButton = createPageButton("›", currentPage + 1, currentPage === pageCount);
  nextButton.setAttribute("aria-label", "다음 페이지");
  diaryPagination.appendChild(nextButton);
}

function createPageButton(label, page, disabled) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.disabled = disabled;

  button.addEventListener("click", () => {
    renderDiaryPosts(page);
  });

  return button;
}

diaryWriteButton.addEventListener("click", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    alert("로그인 후 글쓰기가 가능합니다.");
    window.location.href = "/login";
    return;
  }

  alert("글쓰기 페이지로 이동합니다.");
});

diarySearchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const keyword = diarySearchInput.value.trim().toLowerCase();

  filteredPosts = diaryPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(keyword) ||
      post.excerpt.toLowerCase().includes(keyword)
    );
  });

  renderDiaryPosts(1);
});

diaryViewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    diaryViewButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    diaryGrid.classList.toggle("list-view", button.dataset.view === "list");
  });
});

renderDiaryPosts();
}
