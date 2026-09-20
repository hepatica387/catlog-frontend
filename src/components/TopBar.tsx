import { NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { useAuth } from "../hooks/useAuth";

export function TopBar() {
  const { isLoggedIn, logout, member } = useAuth();

  return (
    <header className="top-bar">
      <nav className="user-menu" aria-label="회원 메뉴">
        {isLoggedIn && member ? (
          <>
            <NavLink
              to={ROUTES.mypage}
              className="user-name"
              aria-label={`${member.userName}님 마이페이지`}
            >
              마이페이지
            </NavLink>
            {member.userName}님
            <button type="button" onClick={logout}>
              로그아웃
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
}
