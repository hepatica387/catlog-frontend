import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { ConsultationButton } from "../components/ConsultationButton";

export function LoginPage() {
  return (
    <PageFrame title="로그인" scriptUrl="/js/login.js">
      <Sidebar />
      <div className="main-content">
      <TopBar />

      <main className="login-container auth-page-container">
        <div className="login-box">
          <div className="login-header">
            <h2>로그인</h2>
          </div>

          <form id="loginForm">
            <div className="form-group">
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </div>

            <div className="remember-forgot">
              <div className="checkbox-wrapper">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">로그인 유지</label>
              </div>
              <a href="/#">비밀번호 찾기</a>
            </div>

            <button type="submit" className="login-btn">로그인</button>
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
