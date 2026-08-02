// @ts-nocheck
export function initLoginPage() {
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("로그인 시도:", { email, password });
  alert("로그인 되었습니다!");
  window.location.href = "/";
});
}
