import { findAll } from "../api/catApi";
import type { Cat } from "../types/Cat";

export function initDetailPageLogic() {
  const page = document.querySelector<HTMLElement>(".detail-page");
  const error = document.querySelector<HTMLElement>(".detail-error");
  const image = document.getElementById("catImage") as HTMLImageElement | null;
  const name = document.getElementById("catName");
  const breed = document.getElementById("catBreed");
  const age = document.getElementById("catAge");
  const gender = document.getElementById("catGender");
  const color = document.getElementById("catColor");
  const size = document.getElementById("catSize");
  const temperament = document.getElementById("catTemperament");
  const description = document.getElementById("catDescription");
  const adoptButton = document.querySelector<HTMLButtonElement>(".btn-adopt");
  const backButton = document.querySelector<HTMLButtonElement>(".btn-back");
  const hashQuery = window.location.hash.split("?")[1];
  const id = Number(new URLSearchParams(hashQuery ?? window.location.search).get("id"));
  let active = true;

  const showError = () => {
    if (page) page.hidden = true;
    if (error) error.hidden = false;
    document.title = "고양이 정보를 찾을 수 없습니다 - CATLOG";
  };

  const render = (cat: Cat) => {
    if (page) page.hidden = false;
    if (error) error.hidden = true;
    if (image) {
      image.src = `/assets${cat.imageUrl}`;
      image.alt = `${cat.breed} ${cat.name} 사진`;
    }
    if (name) name.textContent = cat.name;
    if (breed) breed.textContent = cat.breed;
    if (age) age.textContent = `${cat.ageMonth}개월`;
    if (gender) gender.textContent = "-";
    if (color) color.textContent = "-";
    if (size) size.textContent = "-";
    if (temperament) temperament.textContent = "-";
    if (description) description.textContent = "";
    document.title = `${cat.name} (${cat.breed}) - CATLOG`;
  };

  if (!Number.isInteger(id) || id <= 0) {
    showError();
  } else {
    findAll()
      .then((cats) => {
        if (!active) return;
        const cat = cats.find((item) => item.breedId === id);
        if (cat) render(cat);
        else showError();
      })
      .catch(() => {
        if (active) showError();
      });
  }

  const handleAdopt = () => alert("분양 신청이 접수되었습니다. 담당자가 곧 연락드리겠습니다!");
  const handleBack = () => window.history.back();
  adoptButton?.addEventListener("click", handleAdopt);
  backButton?.addEventListener("click", handleBack);

  return () => {
    active = false;
    adoptButton?.removeEventListener("click", handleAdopt);
    backButton?.removeEventListener("click", handleBack);
  };
}
