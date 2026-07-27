// @ts-nocheck
export function initReservationPage() {
const calendarButtons = document.querySelectorAll(".calendar-days button");
const timeButtons = document.querySelectorAll(".reservation-time-list button");
const reservationForm = document.querySelector(".reservation-booking-form");

function setActiveButton(buttons, selectedButton, className = "selected") {
  buttons.forEach((button) => button.classList.remove(className));
  selectedButton.classList.add(className);
}

calendarButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveButton(calendarButtons, button);
  });
});

timeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveButton(timeButtons, button);
  });
});

reservationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("방문 예약이 접수되었습니다.");
});
}
