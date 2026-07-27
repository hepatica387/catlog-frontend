import { PageFrame } from "../components/PageFrame";
import { usePageLogic } from "../hooks/usePageLogic";
import { initCurationPage } from "../pageLogic/curation";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";

export function CurationPage() {
  usePageLogic(initCurationPage);

  return (
    <PageFrame title="AI 맞춤 큐레이션">
      {/* 왼쪽 사이드바 */}
    <Sidebar />
      {/* 메인 콘텐츠 */}
    <div className="main-content">
      {/* 상단 유저 메뉴 */}
      <TopBar />

      <main className="curation-container">
        <section className="curation-section" aria-labelledby="curationTitle">
          {/* <h1 id="curationTitle" className="curation-title">큐레이션</h1> */}

          <section className="curation-hero" aria-label="AI 맞춤 큐레이션 소개">
            <div className="curation-hero-text">
              <h2>
                AI가 당신과 잘 맞는<br />
                반려묘를 찾아드려요.
              </h2>
              <p>
                생활패턴, 성향, 환경 데이터를 분석해<br />
                최적의 반려묘를 추천해드립니다.
              </p>
            </div>
            <div className="curation-hero-image">
              <img
                src="../assets/images/curation_banner.png"
                alt="AI 큐레이션 고양이 배너"
              />
            </div>
          </section>

          <ol className="curation-progress" aria-label="큐레이션 진행 순서">
            <li className="active">
              <span>01</span>
              사용자 정보 수집
            </li>
            <li>
              <span>02</span>
              AI 성향 분석
            </li>
            <li>
              <span>03</span>
              성향 패턴 모델링
            </li>
            <li>
              <span>04</span>
              고양이 매칭
            </li>
            <li>
              <span>05</span>
              추천 결과 제공
            </li>
          </ol>

          <div className="curation-dashboard">
            <div className="curation-left-column">
              <section
                className="curation-input-panel"
                aria-labelledby="profileInputTitle"
              >
                <div className="curation-profile-panel">
                  <div>
                    <h2 id="profileInputTitle">나의 생활 패턴 입력</h2>
                    <p>생활패턴과 성향을 입력하면 추천에 반영됩니다.</p>
                  </div>
                  <textarea
                    id="lifestyleInput"
                    aria-label="생활 패턴 입력"
                    placeholder="예) 평일에는 8시간 정도 외출하고, 조용하고 애교 있는 고양이를 원해요."
                  ></textarea>
                  <button type="button" id="lifestyleSubmitBtn">
                    AI 분석하기
                  </button>
                </div>

                <button
                  type="button"
                  className="curation-step-toggle"
                  id="curationStepToggle"
                  aria-expanded="false"
                  aria-controls="curationStepPanel"
                >
                  <span>선택형 STEP으로 추천받기</span>
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path d="M12 16.5 4.5 9h15L12 16.5Z" />
                  </svg>
                </button>

                <div
                  className="curation-question-panel"
                  id="curationStepPanel"
                  hidden
                >
                  <div className="curation-question-top">
                    <div>
                      <div className="curation-step-label" id="stepLabel">
                        STEP 1/5
                      </div>
                      <h2 id="questionTitle"><span className="sr-only">큐레이션 질문</span></h2>
                    </div>
                    <div className="curation-dots" id="curationDots"></div>
                  </div>
                  <div className="curation-options" id="curationOptions"></div>
                  <div className="curation-controls">
                    <div className="curation-step-buttons">
                      <button type="button" id="prevQuestionBtn">이전</button>
                      <button type="button" id="nextQuestionBtn">다음</button>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="curation-right-column">
              <section className="analysis-panel">
                <h2>AI 성향 분석 요약</h2>
                <p className="curation-empty-message" id="analysisEmpty">
                  STEP 5까지 선택 후 결과보기를 눌러주세요.
                </p>
                <div className="analysis-content" id="analysisContent" hidden>
                  <div className="radar-chart" aria-hidden="true">
                    <span>활동성</span>
                    <span>애교</span>
                    <span>독립성</span>
                    <span>관리 난이도</span>
                    <span>적응력</span>
                    <div className="radar-shape"></div>
                  </div>
                  <div className="analysis-bars">
                    <div>
                      <span>생활패턴 적합도</span>
                      <meter id="lifeMeter" min="0" max="100" value="0"></meter>
                      <strong id="lifeScore">0%</strong>
                    </div>
                    <div>
                      <span>성향 적합도</span>
                      <meter
                        id="personalityMeter"
                        min="0"
                        max="100"
                        value="0"
                      ></meter>
                      <strong id="personalityScore">0%</strong>
                    </div>
                    <div>
                      <span>공간환경 적합도</span>
                      <meter
                        id="spaceMeter"
                        min="0"
                        max="100"
                        value="0"
                      ></meter>
                      <strong id="spaceScore">0%</strong>
                    </div>
                    <div>
                      <span>케어 난이도</span>
                      <meter id="careMeter" min="0" max="100" value="0"></meter>
                      <strong id="careScore">0%</strong>
                    </div>
                  </div>
                </div>
              </section>

              <section className="recommend-panel">
                <h2>AI 추천 결과</h2>
                <p className="curation-empty-message" id="recommendEmpty">
                  모든 답변을 완료하면 추천 고양이가 표시됩니다.
                </p>
                <div className="recommend-card" id="recommendContent" hidden>
                  <img
                    id="recommendImage"
                    src="../assets/images/cat6.png"
                    alt=""
                  />
                  <div>
                    <h3 id="recommendName"><span className="sr-only">추천 고양이</span></h3>
                    <p id="recommendMatch"></p>
                    <div className="recommend-tags" id="recommendTags"></div>
                    <p id="recommendDescription"></p>
                    <a id="recommendLink" href="/detail?id=1">상세보기</a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageFrame>
  );
}
