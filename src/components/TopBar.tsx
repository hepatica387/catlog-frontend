import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export function TopBar() {
  return (
    <header className="top-bar">
      <nav className="user-menu" aria-label="회원 메뉴">
        <NavLink
          to={ROUTES.login}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          로그인
        </NavLink>
        <span aria-hidden="true">|</span>
        <NavLink
          to={ROUTES.signup}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          회원가입
        </NavLink>
      </nav>
    </header>
  );
}
