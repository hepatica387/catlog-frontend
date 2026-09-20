import { Link } from "react-router-dom";
import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { MyReservations } from "../components/mypage/MyReservations";
import { MyDiaryPosts } from "../components/mypage/MyDiaryPosts";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../constants/routes";
import "../styles/mypage.css";

export function MyPage() {
  const { member } = useAuth();
  const profileFields = [
    ["이름", member?.userName || "-"],
    ["이메일", member?.email || "-"],
    ["전화번호", "-"],
    ["생년월일", "-"],
    ["주소", "-"],
    ["가입일", "-"],
  ];

  return (
    <PageFrame title="마이페이지 | FELIA CATLOG" bodyClass="mypage">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <main className="mypage-content">
          <section className="mypage-banner" aria-labelledby="mypage-title">
            <div>
              <h1 id="mypage-title">마이페이지</h1>
              <p>
                FELIA와 함께하는 특별한 반려생활,
                <br />
                지금까지의 기록을 확인해보세요.
              </p>
            </div>
          </section>
          {!member && (
            <div className="mypage-login-notice">
              <span>로그인하고 나의 정보와 활동 내역을 확인하세요.</span>
              <Link to={ROUTES.login}>로그인하기 →</Link>
            </div>
          )}
          <section className="mypage-panel" aria-labelledby="my-profile-title">
            <div className="mypage-panel-heading">
              <h2 id="my-profile-title">
                <i className="fa-regular fa-user" aria-hidden="true" />
                개인정보
              </h2>
              <button
                className="mypage-outline-button"
                type="button"
                disabled
                title="회원정보 수정 기능은 준비 중입니다"
              >
                <i className="fa-solid fa-pencil" aria-hidden="true" /> 정보
                수정하기
              </button>
            </div>
            <div className="mypage-profile">
              <div className="mypage-profile-summary">
                <div className="mypage-avatar" aria-hidden="true">
                  <i className="fa-solid fa-user" />
                </div>
                <strong>{member ? `${member.userName}님` : "방문자님"}</strong>
                <span className="mypage-member-badge">
                  {member ? "일반회원" : "로그인 전"}
                </span>
              </div>
              <dl className="mypage-profile-fields">
                {profileFields.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
          {/* 회원별 조회 API 연결 시 실제 데이터로 교체합니다. */}
          <MyReservations reservations={[]} />
          <MyDiaryPosts posts={[]} />
        </main>
        <Footer />
      </div>
    </PageFrame>
  );
}
