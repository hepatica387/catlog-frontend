import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { userInfo } from "../api/memberApi";
import type { MemberInfoResponse } from "../types/Member";
import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { MyReservations } from "../components/mypage/MyReservations";
import { MyDiaryPosts } from "../components/mypage/MyDiaryPosts";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../constants/routes";
import { getReservations } from "../api/reservationApi";
import { GetReservationType } from "../types/Reservation";
import "../styles/mypage.css";
import { getUserDiaryPosts } from "../api/diaryApi";
import { GetDiaryType } from "../types/DiaryPost";

export function MyPage() {
  const { member } = useAuth();
  const userId = member?.userId || null;
  const [profile, setProfile] = useState<MemberInfoResponse | null>(null);
  const [reservation, setReservation] = useState<GetReservationType[] | null>(
    null,
  );
  const [diary, setDiary] = useState<GetDiaryType[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    setProfile(null);
    setError(null);
    setReservation(null);
    setDiary(null);

    if (!userId) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    Promise.allSettled([
      userInfo(userId),
      getReservations(userId),
      getUserDiaryPosts(userId),
    ]).then(([profileResult, reservationResult, diaryResult]) => {
      if (!active) return;

      const failedSections: string[] = [];

      if (profileResult.status === "fulfilled") setProfile(profileResult.value);
      else failedSections.push("회원정보");

      if (reservationResult.status === "fulfilled")
        setReservation(reservationResult.value);
      else failedSections.push("예약 내역");

      if (diaryResult.status === "fulfilled") setDiary(diaryResult.value);
      else failedSections.push("내 게시글");

      setError(
        failedSections.length > 0
          ? `${failedSections.join(", ")}을 불러오지 못했습니다. 잠시 후 다시 시도해주세요.`
          : null,
      );
      setIsLoading(false);
    });

    return () => {
      active = false;
    };
  }, [userId]);

  const currentProfile = userId && profile?.userId === userId ? profile : null;
  const profileFields = [
    ["이름", currentProfile?.userName || member?.userName || "-"],
    ["이메일", currentProfile?.email || member?.email || "-"],
    ["전화번호", currentProfile?.phone || "-"],
    ["생년월일", currentProfile?.birthday || "-"],
    ["가입일", currentProfile?.create_at || "-"],
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
          {member && isLoading && (
            <p className="mypage-login-notice" role="status">
              마이페이지 정보를 불러오는 중입니다.
            </p>
          )}
          {member && error && (
            <p className="mypage-login-notice" role="alert">
              {error}
            </p>
          )}
          {!isLoading && (
            <>
              <section
                className="mypage-panel"
                aria-labelledby="my-profile-title"
              >
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
                    <strong>
                      {member
                        ? `${currentProfile?.userName || member.userName}님`
                        : "방문자님"}
                    </strong>
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
              <MyReservations
                key={userId || "guest"}
                reservations={userId ? (reservation ?? []) : []}
              />
              <MyDiaryPosts posts={userId ? (diary ?? []) : []} />
            </>
          )}
        </main>
        <Footer />
      </div>
    </PageFrame>
  );
}
