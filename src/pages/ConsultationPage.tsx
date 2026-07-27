import { PageFrame } from "../components/PageFrame";
import { usePageLogic } from "../hooks/usePageLogic";
import { initConsultationPage } from "../pageLogic/consultation";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";

export function ConsultationPage() {
  usePageLogic(initConsultationPage);

  return (
    <PageFrame title="온라인 상담">
      {/* 왼쪽 사이드바 */}
    <Sidebar />
      {/* 메인 콘텐츠 */}
    <div className="main-content">
      {/* 상단 유저 메뉴 */}
      <TopBar />

      <main className="consultation-container">
        <section
          className="consultation-section"
          aria-labelledby="consultationTitle"
        >
          {/* <h1 id="consultationTitle" className="consultation-title">온라인 상담</h1> */}

          <div className="chat-panel">
            <div className="chat-messages" id="chatMessages" aria-live="polite">
              <div className="chat-row bot">
                <img
                  src="../assets/images/catlog_logo2.png"
                  alt=""
                  className="chat-avatar"
                />
                <div className="chat-message-stack">
                  <div className="chat-bubble">
                    <p>안녕하세요 :)</p>
                    <p>
                      평생 함께할 가족을 찾고 계신가요? FELIA가 사용자님과 잘
                      맞는 반려묘를 함께 찾아드릴게요.
                    </p>
                  </div>
                  <time>오후 12:03</time>
                </div>
              </div>

              <div className="chat-row bot">
                <div className="chat-avatar-spacer"></div>
                <div className="chat-message-stack">
                  <div className="chat-bubble">
                    <p>#혼자 살아도 키우기 쉬운 고양이</p>
                    <p>#털 빠짐 적은 고양이</p>
                    <p>#애교 많은 고양이 추천</p>
                    <p>#원룸에 적합한 고양이</p>
                  </div>
                  <time>오후 12:03</time>
                </div>
              </div>

              <div className="chat-row user">
                <div className="chat-message-stack">
                  <div className="chat-bubble">
                    <p>혼자 살고 있고 조용한 고양이 원해요!</p>
                  </div>
                  <time>오후 12:04</time>
                </div>
                <div className="chat-user-avatar" aria-hidden="true"></div>
              </div>
            </div>

            <form className="chat-form" id="chatForm">
              <input
                type="text"
                id="chatInput"
                name="message"
                aria-label="상담 메시지"
                placeholder="무엇이든 물어보세요..."
                autoComplete="off"
                required
              />
              <button type="submit" aria-label="전송">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <path
                    d="M3.2 11.2 20.1 3.4c.9-.4 1.8.5 1.4 1.4l-7.8 16.9c-.4.9-1.7.8-2-.1l-1.7-6.2-6.2-1.7c-.9-.3-1-1.6-.1-2Z"
                  />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageFrame>
  );
}
