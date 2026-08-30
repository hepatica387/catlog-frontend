import { ConsultationButton } from "../components/ConsultationButton";
import { Footer } from "../components/Footer";
import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { useLogin } from "../hooks/userLogin";

export function LoginPage() {
  const { handleSubmit, isSubmitting } = useLogin();

  return (
    <PageFrame title="로그인">
      <Sidebar />
      <div className="main-content">
        <TopBar />

        <main className="login-container auth-page-container">
          <div className="login-box">
            <div className="login-header">
              <h2>로그인</h2>
            </div>

            <form id="loginForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userId">아이디</label>
                <input
                  type="text"
                  id="userId"
                  name="userId"
                  placeholder="아이디를 입력해주세요"
                  required
                  // onChange={(e) => setUserId(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="userPw">비밀번호</label>
                <input
                  type="password"
                  id="userPw"
                  name="userPw"
                  placeholder="비밀번호를 입력해주세요"
                  required
                  // onChange={(e) => setUserPw(e.target.value)}
                />
              </div>

              <div className="remember-forgot">
                <div className="checkbox-wrapper">
                  <input type="checkbox" id="remember" name="remember" />
                  <label htmlFor="remember">로그인 유지</label>
                </div>
                <a href="/#">비밀번호 찾기</a>
              </div>

              <button
                type="submit"
                className="login-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? "로그인 중..." : "로그인"}
              </button>
            </form>

            <div className="divider">또는</div>

            <div className="signup-link">
              아직 계정이 없으신가요?
              <a href="/signup">회원가입하기</a>
            </div>
          </div>
        </main>
        <Footer />
      </div>

      <ConsultationButton />
    </PageFrame>
  );
}
