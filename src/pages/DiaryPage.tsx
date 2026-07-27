import { PageFrame } from "../components/PageFrame";
import { usePageLogic } from "../hooks/usePageLogic";
import { initDiaryPage } from "../pageLogic/diary";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";

export function DiaryPage() {
  usePageLogic(initDiaryPage);

  return (
    <PageFrame title="집사일기">
      {/* 왼쪽 사이드바 */}
    <Sidebar />
      {/* 메인 콘텐츠 */}
    <div className="main-content">
      {/* 상단 유저 메뉴 */}
      <TopBar />

      <main className="diary-container">
        <section className="diary-section" aria-labelledby="diaryTitle">
          <h1 id="diaryTitle" className="diary-title">집사일기</h1>

          <div className="diary-board">
            <div className="diary-toolbar">
              <form className="diary-search" id="diarySearchForm">
                <label className="sr-only" htmlFor="diarySearchInput"
                  >집사일기 검색</label
                >
                <input type="search" id="diarySearchInput" name="keyword" />
                <button type="submit" aria-label="검색">
                  <svg aria-hidden="true" viewBox="0 0 24 24">
                    <path
                      d="M10.5 4a6.5 6.5 0 0 1 5.16 10.46l4.44 4.44-2.2 2.2-4.44-4.44A6.5 6.5 0 1 1 10.5 4Zm0 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z"
                    />
                  </svg>
                </button>
              </form>

              <div className="diary-actions">
                <button
                  type="button"
                  className="diary-write-btn"
                  id="diaryWriteBtn"
                >
                  글쓰기
                </button>
                <button
                  type="button"
                  className="diary-view-btn active"
                  data-view="grid"
                  aria-label="그리드 보기"
                >
                  <span></span><span></span><span></span><span></span>
                </button>
                <button
                  type="button"
                  className="diary-view-btn"
                  data-view="list"
                  aria-label="목록 보기"
                >
                  <span></span><span></span><span></span>
                </button>
              </div>
            </div>

            <div className="diary-grid" id="diaryGrid"></div>
            <nav
              className="diary-pagination"
              id="diaryPagination"
              aria-label="집사일기 페이지"
            ></nav>
            <div className="paging-area">
              <button
                type="button"
                className="paging-btn"
                id="prevPageBtn"
                aria-label="이전 페이지"
              >
                이전
              </button>
              <span id="currentPage" className="current-page active"
                >1</span
              >
              <span id="currentPage" className="current-page">2</span>
              <button
                type="button"
                className="paging-btn"
                id="nextPageBtn"
                aria-label="다음 페이지"
              >
                다음
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
    </PageFrame>
  );
}
