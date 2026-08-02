// @ts-nocheck
export function initDiaryPage() {
const diaryPosts = [
  {
    title: "처음으로 무릎 위에 올라왔어요",
    image: "../assets/images/cat1.png",
    excerpt:
      "항상 멀리서 바라보기만 하던 고양이가 오늘 처음으로 제 무릎 위에 올라왔어요.",
    date: "2026.05.12",
  },
  {
    title: "새 캣타워 설치 완료!",
    image: "../assets/images/cat2.png",
    excerpt:
      "드디어 주문했던 캣타워가 도착했어요. 생각보다 금방 적응해서 꼭대기에서 쉬고 있어요.",
    date: "2026.05.12",
  },
  {
    title: "새벽 4시 우다다 파티",
    image: "../assets/images/cat3.png",
    excerpt:
      "모두 잠든 시간에 갑자기 시작된 우다다. 그래도 건강해 보여서 웃음이 났어요.",
    date: "2026.05.12",
  },
  {
    title: "병원 다녀온 날",
    image: "../assets/images/cat4.png",
    excerpt:
      "예방접종 때문에 병원에 다녀왔어요. 긴장했지만 잘 참고 돌아와서 간식을 먹었답니다.",
    date: "2026.05.12",
  },
  {
    title: "처음으로 무릎 위에 올라왔어요",
    image: "../assets/images/cat5.png",
    excerpt:
      "오늘은 먼저 다가와 옆자리에 앉아줬어요. 조금씩 가까워지는 중입니다.",
    date: "2026.05.12",
  },
  {
    title: "새 캣타워 설치 완료!",
    image: "../assets/images/cat6.png",
    excerpt:
      "창가 쪽에 캣타워를 두니 하루 종일 바깥 구경을 하느라 바빠졌어요.",
    date: "2026.05.12",
  },
  {
    title: "새벽 4시 우다다 파티",
    image: "../assets/images/cat7.png",
    excerpt:
      "잠은 조금 부족했지만 장난감을 물고 뛰어다니는 모습이 너무 귀여웠어요.",
    date: "2026.05.12",
  },
  {
    title: "병원 다녀온 날",
    image: "../assets/images/cat8.png",
    excerpt:
      "진료 후에는 푹 쉬게 해줬어요. 집에 오자마자 좋아하는 담요 위로 올라갔습니다.",
    date: "2026.05.12",
  },
];

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
    emptyMessage.textContent = "검색 결과가 없습니다.";
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
