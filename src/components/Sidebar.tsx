import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../constants/routes";

function HomeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M3 10.8 12 3l9 7.8v9.1a1.1 1.1 0 0 1-1.1 1.1h-5.2v-6.1H9.3V21H4.1A1.1 1.1 0 0 1 3 19.9v-9.1Z" />
    </svg>
  );
}

function PawIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.3 12.4c-1.5 0-2.8-1.2-2.8-2.8S5.8 6.8 7.3 6.8s2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8Zm9.4 0c-1.5 0-2.8-1.2-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8ZM12 20.6c-2.9 0-5.4-1.7-5.4-3.7 0-1.5 1.7-2.7 3.2-3.6.7.5 1.4.8 2.2.8.8 0 1.5-.3 2.2-.8 1.5.9 3.2 2.1 3.2 3.6 0 2-2.5 3.7-5.4 3.7Z" />
    </svg>
  );
}

function CurationIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M13.4 2.6 4.5 13.3h6.3l-1 8.1 9.7-11.7h-6.4l.3-7.1Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 2.8h2v2.1h6V2.8h2v2.1h3.2v16.3H3.8V4.9H7V2.8Zm11.2 7.4H5.8v8.9h12.4v-8.9Z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 4C6.7 4 2.7 7.5 2.7 12c0 1.9.8 3.6 2.1 5l-.9 3.3 3.8-1.4c1.3.7 2.8 1.1 4.4 1.1 5.3 0 9.3-3.5 9.3-8S17.3 4 12 4Zm-4 9.1a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm4 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Zm4 0a1.1 1.1 0 1 1 0-2.2 1.1 1.1 0 0 1 0 2.2Z" />
    </svg>
  );
}

function DiaryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6.3 3.5h11.4c1 0 1.8.8 1.8 1.8v15.2H6.3a1.8 1.8 0 0 1-1.8-1.8V5.3c0-1 .8-1.8 1.8-1.8Zm1.1 3.4v2h9.2v-2H7.4Zm0 4.1v2h9.2v-2H7.4Zm0 4.1v2h5.7v-2H7.4Z" />
    </svg>
  );
}

const menus = [
  { to: ROUTES.home, label: "홈", icon: <HomeIcon />, end: true },
  { to: ROUTES.adoption, label: "고양이 분양", icon: <PawIcon /> },
  { to: ROUTES.curation, label: "AI 맞춤 큐레이션", icon: <CurationIcon /> },
  { to: ROUTES.reservation, label: "방문 예약", icon: <CalendarIcon /> },
  { to: ROUTES.consultation, label: "온라인 상담", icon: <ChatIcon /> },
  { to: ROUTES.diary, label: "집사일기", icon: <DiaryIcon /> },
];

export function Sidebar() {
  return (
    <aside className="sidebar" aria-label="메인 메뉴">
      <h1 className="sidebar-logo">
        <Link to={ROUTES.home}>
          <img
            src="/assets/images/felia_catlog_logo.png"
            alt="FELIA CATLOG"
          />
        </Link>
      </h1>

      <nav className="sidebar-nav">
        {menus.map(({ to, label, icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {icon}
            {label}
          </NavLink>
        ))}
      </nav>

      <section
        className="sidebar-consult-card"
        aria-labelledby="sidebar-consult-title"
      >
        <h2 id="sidebar-consult-title">
          온라인 상담으로
          <br />
          궁금증을 해결하세요
        </h2>
        <p>
          입양, 건강, 행동 상담까지
          <br />
          전문 상담사가 도와드립니다.
        </p>
        <Link to={ROUTES.consultation}>온라인 상담 시작하기</Link>
        <img
          src="/assets/images/side_menu_cat.png"
          alt="온라인 상담 안내 고양이"
        />
      </section>
    </aside>
  );
}
