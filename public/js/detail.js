const catData = {
  1: {
    name: "먼지",
    breed: "봄베이",
    image: "../assets/images/cat6.png",
    age: "3개월",
    gender: "수컷",
    color: "검은색",
    size: "중간",
    temperament: "온순하고 친근함",
    description:
      "봄베이 먼지는 매우 사교적이고 애정이 많은 고양이입니다. 새로운 환경에 잘 적응하며 가족 구성원들과 매우 친하게 지낼 수 있습니다.",
  },
  2: {
    name: "쿠키",
    breed: "랙돌",
    image: "../assets/images/cat8.png",
    age: "3개월",
    gender: "암컷",
    color: "샴 패턴(크림 & 초콜릿)",
    size: "중간",
    temperament: "온순하고 차분함",
    description:
      "랙돌 쿠키는 매우 온순하고 차분한 성격의 고양이입니다. 이름을 부르면 따라다니며 애정 표현을 많이 하는 사랑스러운 친구입니다.",
  },
  3: {
    name: "라떼",
    breed: "노르웨이숲",
    image: "../assets/images/cat5.png",
    age: "3개월",
    gender: "수컷",
    color: "황갈색 & 검은색",
    size: "대형",
    temperament: "활발하고 독립적",
    description:
      "노르웨이숲 라떼는 활발하고 독립적인 성격으로, 높은 곳을 좋아하고 놀이를 매우 즐깁니다. 충분한 활동 공간이 있는 환경에서 잘 지낼 수 있습니다.",
  },
  4: {
    name: "별",
    breed: "러시안블루",
    image: "../assets/images/cat10.png",
    age: "2개월",
    gender: "암컷",
    color: "블루 그레이",
    size: "소형",
    temperament: "조용하고 차분함",
    description:
      "러시안블루 별은 조용하고 우아한 성격의 고양이입니다. 낯선 사람에게는 조심스러우나 신뢰 관계가 형성되면 애정이 많습니다.",
  },
  5: {
    name: "초코",
    breed: "먼치킨",
    image: "../assets/images/cat11.png",
    age: "2개월",
    gender: "수컷",
    color: "갈색",
    size: "소형",
    temperament: "장난스럽고 활발함",
    description:
      "먼치킨 초코는 짧은 다리로 재미있는 모습으로 움직이는 매우 활발한 고양이입니다. 장난을 좋아하며 주인과 함께 노는 것을 즐깁니다.",
  },
  6: {
    name: "구름",
    breed: "스코티시폴드",
    image: "../assets/images/cat12.png",
    age: "2개월",
    gender: "암컷",
    color: "회색",
    size: "중간",
    temperament: "부드럽고 애정적",
    description:
      "스코티시폴드 구름은 접힌 귀가 특징인 고양이로, 부드럽고 애정적인 성격입니다. 조용한 환경에서 편안함을 느끼는 고양이입니다.",
  },
  7: {
    name: "호랑",
    breed: "뱅갈",
    image: "../assets/images/cat13.png",
    age: "3개월",
    gender: "수컷",
    color: "갈색 표범 패턴",
    size: "대형",
    temperament: "활발하고 지능적",
    description:
      "뱅갈 호랑은 표범무늬 패턴이 특징인 매우 지능적이고 활발한 고양이입니다. 충분한 자극과 활동을 필요로 합니다.",
  },
  8: {
    name: "복숭아",
    breed: "페르시안",
    image: "../assets/images/cat14.png",
    age: "3개월",
    gender: "암컷",
    color: "크림색",
    size: "중간",
    temperament: "차분하고 조용함",
    description:
      "페르시안 복숭아는 긴 털과 우아한 모습이 특징인 고양이입니다. 차분하고 조용한 성격으로 조용한 환경을 선호합니다.",
  },
  9: {
    name: "사과",
    breed: "노르웨이숲",
    image: "../assets/images/cat15.png",
    age: "3개월",
    gender: "수컷",
    color: "검은색 & 흰색",
    size: "대형",
    temperament: "활발하고 친근함",
    description:
      "노르웨이숲 사과는 큰 체형에도 불구하고 매우 친근하고 애정이 많은 고양이입니다. 가족들과 함께 있기를 좋아합니다.",
  },
  10: {
    name: "백숙",
    breed: "스핑크스",
    image: "../assets/images/cat16.png",
    age: "2개월",
    gender: "암컷",
    color: "분홍색 피부",
    size: "소형",
    temperament: "호기심 많고 사교적",
    description:
      "스핑크스 백숙은 털이 없는 독특한 외모의 고양이로, 매우 호기심이 많고 사교적입니다. 정기적인 피부 관리가 필요합니다.",
  },
  11: {
    name: "구름",
    breed: "터키쉬앙고라",
    image: "../assets/images/cat17.png",
    age: "2개월",
    gender: "수컷",
    color: "흰색",
    size: "중간",
    temperament: "우아하고 활발함",
    description:
      "터키쉬앙고라 구름은 우아한 모습과 활발한 성격이 특징인 고양이입니다. 지능이 높고 훈련 잘되는 편입니다.",
  },
  12: {
    name: "밤",
    breed: "샴",
    image: "../assets/images/cat18.png",
    age: "2개월",
    gender: "수컷",
    color: "샴 패턴(크림 & 초콜릿)",
    size: "소형",
    temperament: "명랑하고 표현력 풍부",
    description:
      "샴 밤은 명랑하고 표현력이 풍부한 성격의 고양이입니다. 주인과의 상호작용을 매우 즐기며 울음을 통해 감정을 표현합니다.",
  },
  13: {
    name: "콩이",
    breed: "아메리칸숏헤어",
    image: "../assets/images/cat19.png",
    age: "2개월",
    gender: "암컷",
    color: "크림 & 화이트",
    size: "소형",
    temperament: "호기심 많고 애교 많음",
    description:
      "아메리칸숏헤어 콩이는 밝은 눈과 부드러운 성격이 매력적인 아기 고양이입니다. 사람을 잘 따르고 새로운 장난감에도 호기심을 보이는 사랑스러운 친구입니다.",
  },
  14: {
    name: "모카",
    breed: "브리티쉬숏헤어",
    image: "../assets/images/cat20.png",
    age: "2개월",
    gender: "수컷",
    color: "블루 그레이",
    size: "소형",
    temperament: "차분하고 순한 성격",
    description:
      "브리티쉬숏헤어 모카는 동그란 얼굴과 포근한 털이 매력적인 아기 고양이입니다. 낯선 환경에서도 비교적 차분하게 적응하며 조용한 교감을 좋아합니다.",
  },
  15: {
    name: "루루",
    breed: "메인쿤",
    image: "../assets/images/cat21.png",
    age: "3개월",
    gender: "암컷",
    color: "실버 태비",
    size: "중형",
    temperament: "온화하고 호기심 많음",
    description:
      "메인쿤 루루는 풍성한 털과 밝은 눈이 돋보이는 아기 고양이입니다. 사람 곁을 좋아하면서도 탐색심이 있어 넓은 공간과 놀이 시간을 즐깁니다.",
  },
};

const elements = {
  page: document.querySelector(".detail-page"),
  error: document.querySelector(".detail-error"),
  image: document.getElementById("catImage"),
  name: document.getElementById("catName"),
  breed: document.getElementById("catBreed"),
  age: document.getElementById("catAge"),
  gender: document.getElementById("catGender"),
  color: document.getElementById("catColor"),
  size: document.getElementById("catSize"),
  temperament: document.getElementById("catTemperament"),
  description: document.getElementById("catDescription"),
  adoptButton: document.querySelector(".btn-adopt"),
  backButton: document.querySelector(".btn-back"),
};

function getCatId() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function showError() {
  elements.page.hidden = true;
  elements.error.hidden = false;
  document.title = "고양이 정보를 찾을 수 없습니다 - CATLOG";
}

function renderCatDetail(cat) {
  elements.image.src = cat.image;
  elements.image.alt = `${cat.breed} ${cat.name} 사진`;
  elements.name.textContent = cat.name;
  elements.breed.textContent = cat.breed;
  elements.age.textContent = cat.age;
  elements.gender.textContent = cat.gender;
  elements.color.textContent = cat.color;
  elements.size.textContent = cat.size;
  elements.temperament.textContent = cat.temperament;
  elements.description.textContent = cat.description;

  document.title = `${cat.name} (${cat.breed}) - CATLOG`;
}

function initDetailPage() {
  const cat = catData[getCatId()];

  if (!cat) {
    showError();
    return;
  }

  renderCatDetail(cat);
}

elements.adoptButton.addEventListener("click", () => {
  alert("분양 신청이 접수되었습니다. 담당자가 곧 연락드리겠습니다!");
});

elements.backButton.addEventListener("click", () => {
  history.back();
});

initDetailPage();
