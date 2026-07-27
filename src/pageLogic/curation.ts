// @ts-nocheck
export function initCurationPage() {
const questions = [
  {
    title: "평균 외출 시간은 어느 정도인가요?",
    options: ["2시간 이하", "2~6시간", "6~10시간", "10시간 이상"],
  },
  {
    title: "어떤 성향의 고양이를 선호하시나요?",
    options: [
      "조용하고 독립적",
      "애교 많고 사람을 좋아함",
      "활발하고 장난기 많음",
      "아직 잘 모르겠어요",
    ],
  },
  {
    title: "현재 주거 형태를 선택해주세요.",
    options: ["원룸", "오피스텔", "아파트", "주택"],
  },
  {
    title: "털 관리와 청소에 어느 정도 시간을 사용할 수 있나요?",
    options: [
      "매일 관리 가능",
      "주 2~3회 가능",
      "최소한만 가능",
      "털 빠짐이 적은 고양이를 원해요",
    ],
  },
  {
    title: "고양이와 어떤 관계를 기대하시나요?",
    options: [
      "항상 함께 있고 싶어요",
      "적당한 거리감이 좋아요",
      "혼자만의 시간도 중요해요",
      "편안하게 교감하고 싶어요",
    ],
  },
];

const recommendations = [
  {
    name: "먼지",
    breed: "봄베이",
    match: "AI 매칭률 92%",
    image: "../assets/images/cat6.png",
    detailUrl: "/detail?id=1",
    tags: ["애교 많음", "사람친화", "실내 적응"],
    description:
      "사람을 좋아하고 안정적인 성향이라 첫 반려묘를 찾는 분께 잘 맞아요.",
  },
  {
    name: "별",
    breed: "러시안블루",
    match: "AI 매칭률 89%",
    image: "../assets/images/cat10.png",
    detailUrl: "/detail?id=4",
    tags: ["차분함", "조용함", "관리 쉬움"],
    description: "조용한 환경을 좋아하고 차분한 교감을 원하는 분께 추천드려요.",
  },
  {
    name: "초코",
    breed: "먼치킨",
    match: "AI 매칭률 90%",
    image: "../assets/images/cat11.png",
    detailUrl: "/detail?id=5",
    tags: ["장난기", "활발함", "애교"],
    description:
      "놀이 시간을 즐기고 밝은 에너지를 가진 고양이를 원하는 분께 잘 어울려요.",
  },
];

const answers = Array(questions.length).fill(null);
let currentStep = 0;
let isResultVisible = false;

const stepLabel = document.getElementById("stepLabel");
const questionTitle = document.getElementById("questionTitle");
const optionsContainer = document.getElementById("curationOptions");
const dotsContainer = document.getElementById("curationDots");
const prevButton = document.getElementById("prevQuestionBtn");
const nextButton = document.getElementById("nextQuestionBtn");
const progressItems = document.querySelectorAll(".curation-progress li");
const stepToggle = document.getElementById("curationStepToggle");
const stepPanel = document.getElementById("curationStepPanel");
const lifestyleInput = document.getElementById("lifestyleInput");
const lifestyleSubmitButton = document.getElementById("lifestyleSubmitBtn");

const recommendImage = document.getElementById("recommendImage");
const recommendName = document.getElementById("recommendName");
const recommendMatch = document.getElementById("recommendMatch");
const recommendTags = document.getElementById("recommendTags");
const recommendDescription = document.getElementById("recommendDescription");
const recommendLink = document.getElementById("recommendLink");
const analysisEmpty = document.getElementById("analysisEmpty");
const analysisContent = document.getElementById("analysisContent");
const recommendEmpty = document.getElementById("recommendEmpty");
const recommendContent = document.getElementById("recommendContent");

function renderQuestion() {
  const question = questions[currentStep];

  stepLabel.textContent = `STEP ${currentStep + 1}/5`;
  questionTitle.textContent = question.title;
  prevButton.disabled = currentStep === 0;
  nextButton.textContent =
    currentStep === questions.length - 1 ? "결과보기" : "다음";

  optionsContainer.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "curation-option";
    button.textContent = option;

    if (answers[currentStep] === index) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      answers[currentStep] = index;
      hideResultPanels();
      renderQuestion();
    });

    optionsContainer.appendChild(button);
  });

  renderDots();
  renderProgress();
}

function renderDots() {
  dotsContainer.innerHTML = "";

  questions.forEach((_, index) => {
    const dot = document.createElement("span");

    if (index === currentStep) {
      dot.classList.add("active");
    }

    dotsContainer.appendChild(dot);
  });
}

function renderProgress() {
  progressItems.forEach((item, index) => {
    item.classList.toggle("active", index <= currentStep);
  });
}

function getRecommendation() {
  const lifestyleText = lifestyleInput.value.toLowerCase();

  if (
    lifestyleText.includes("조용") ||
    lifestyleText.includes("털") ||
    lifestyleText.includes("혼자")
  ) {
    return recommendations[1];
  }

  if (
    lifestyleText.includes("활발") ||
    lifestyleText.includes("장난") ||
    lifestyleText.includes("놀이")
  ) {
    return recommendations[2];
  }

  const personalityAnswer = answers[1];

  if (personalityAnswer === 0 || answers[3] === 3) return recommendations[1];
  if (personalityAnswer === 2) return recommendations[2];
  return recommendations[0];
}

function updateAnalysis() {
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const textScore = lifestyleInput.value.trim() ? 10 : 0;
  const baseScore = 78 + answeredCount * 3 + textScore;
  const recommendation = getRecommendation();

  showResultPanels();
  updateMeter("life", Math.min(baseScore + 2, 96));
  updateMeter("personality", Math.min(baseScore + 5, 98));
  updateMeter("space", Math.min(baseScore, 94));
  updateMeter("care", Math.min(baseScore - 1, 92));
  renderRecommendation(recommendation);
}

function showResultPanels() {
  isResultVisible = true;
  analysisEmpty.hidden = true;
  analysisEmpty.style.display = "none";
  recommendEmpty.hidden = true;
  recommendEmpty.style.display = "none";
  analysisContent.hidden = false;
  recommendContent.hidden = false;
}

function hideResultPanels() {
  if (!isResultVisible) return;

  isResultVisible = false;
  analysisEmpty.hidden = false;
  recommendEmpty.hidden = false;
  analysisContent.hidden = true;
  recommendContent.hidden = true;
}

function updateMeter(key, value) {
  document.getElementById(`${key}Meter`).value = value;
  document.getElementById(`${key}Score`).textContent = `${value}%`;
}

function renderRecommendation(recommendation) {
  recommendImage.src = recommendation.image;
  recommendImage.alt = `${recommendation.breed} ${recommendation.name}`;
  recommendName.textContent = recommendation.name;
  recommendMatch.textContent = `${recommendation.breed} · ${recommendation.match}`;
  recommendDescription.textContent = recommendation.description;
  recommendLink.href = recommendation.detailUrl;

  recommendTags.innerHTML = "";
  recommendation.tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    recommendTags.appendChild(tagElement);
  });
}

nextButton.addEventListener("click", () => {
  if (answers[currentStep] === null) {
    alert("선택지를 먼저 골라주세요.");
    return;
  }

  if (currentStep < questions.length - 1) {
    currentStep += 1;
    renderQuestion();
    return;
  }

  updateAnalysis();
  alert("AI 큐레이션 결과가 업데이트되었습니다.");
});

prevButton.addEventListener("click", () => {
  if (currentStep === 0) return;

  currentStep -= 1;
  hideResultPanels();
  renderQuestion();
});

stepToggle.addEventListener("click", () => {
  const isExpanded = stepToggle.getAttribute("aria-expanded") === "true";

  stepToggle.setAttribute("aria-expanded", String(!isExpanded));
  stepPanel.hidden = isExpanded;
});

lifestyleSubmitButton.addEventListener("click", () => {
  if (!lifestyleInput.value.trim()) {
    alert("생활 패턴과 원하는 고양이 성향을 입력해주세요.");
    lifestyleInput.focus();
    return;
  }

  updateAnalysis();
});

renderQuestion();
}
