import { PageFrame } from "../components/PageFrame";
import { usePageLogic } from "../hooks/usePageLogic";
import { initDetailPageLogic } from "../pageLogic/detail";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { ConsultationButton } from "../components/ConsultationButton";

export function DetailPage() {
  usePageLogic(initDetailPageLogic);

  return (
    <PageFrame title="고양이 상세 정보">
      {/* 왼쪽 사이드바 */}
    <Sidebar />
      {/* 메인 콘텐츠 */}
    <div className="main-content">
      {/* 상단 유저 메뉴 */}
      <TopBar />

      <main className="container detail-container">
        <section className="detail-page">
          <div className="detail-header">
            <div className="detail-image">
              <img id="catImage" src="" alt="고양이 사진" />
            </div>

            <div className="detail-info">
              <h1 id="catName" className="cat-name"><span className="sr-only">고양이 이름</span></h1>
              <p id="catBreed" className="cat-breed"></p>

              <section className="info-section">
                <h2>기본 정보</h2>
                <div className="info-item">
                  <label>나이</label>
                  <span id="catAge"></span>
                </div>
                <div className="info-item">
                  <label>성별</label>
                  <span id="catGender"></span>
                </div>
                <div className="info-item">
                  <label>모색</label>
                  <span id="catColor"></span>
                </div>
                <div className="info-item">
                  <label>크기</label>
                  <span id="catSize"></span>
                </div>
                <div className="info-item">
                  <label>성격</label>
                  <span id="catTemperament"></span>
                </div>
              </section>

              <div className="action-buttons">
                <button type="button" className="btn-adopt">분양 신청</button>
                <button type="button" className="btn-back">돌아가기</button>
              </div>
            </div>
          </div>

          <section className="info-section detail-intro">
            <h2>고양이 소개</h2>
            <p className="description" id="catDescription"></p>
          </section>
        </section>

        <section className="detail-error" hidden>
          <h2>고양이 정보를 찾을 수 없습니다.</h2>
          <a href="/adoption">분양 목록으로 돌아가기</a>
        </section>
      </main>
      <Footer />
    </div>

    <ConsultationButton />
    </PageFrame>
  );
}
