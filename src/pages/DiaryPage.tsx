import { PageFrame } from "../components/PageFrame";
import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getDiaryPosts } from "../api/diaryApi";
import type { DiaryPost } from "../types/DiaryPost";
import { useAuth } from "../hooks/useAuth";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";

export function DiaryPage() {
  const [posts, setPosts] = useState<DiaryPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [view, setView] = useState<"grid" | "list">("grid");
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    getDiaryPosts(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) setPosts(data);
      })
      .catch(() => {
        if (!controller.signal.aborted)
          setError("게시글 목록을 불러오지 못했습니다.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(keyword),
  );
  const pageCount = Math.ceil(filteredPosts.length / 8);
  const visiblePosts = filteredPosts.slice((page - 1) * 8, page * 8);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setKeyword(
      String(new FormData(event.currentTarget).get("keyword") ?? "")
        .trim()
        .toLowerCase(),
    );
    setPage(1);
  }

  function handleWrite() {
    if (!isLoggedIn) {
      alert("로그인 후 글쓰기가 가능합니다.");
      navigate("/login");
      return;
    }
    alert("글쓰기 페이지로 이동합니다.");
  }

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
            <h1 id="diaryTitle" className="diary-title">
              집사일기
            </h1>

            <div className="diary-board">
              <div className="diary-toolbar">
                <form
                  className="diary-search"
                  id="diarySearchForm"
                  onSubmit={handleSearch}
                >
                  <label className="sr-only" htmlFor="diarySearchInput">
                    집사일기 검색
                  </label>
                  <input type="search" id="diarySearchInput" name="keyword" />
                  <button type="submit" aria-label="검색">
                    <i
                      className="fa-solid fa-magnifying-glass"
                      aria-hidden="true"
                    />
                  </button>
                </form>

                <div className="diary-actions">
                  <button
                    type="button"
                    className="diary-write-btn"
                    id="diaryWriteBtn"
                    onClick={handleWrite}
                  >
                    글쓰기
                  </button>
                  <button
                    type="button"
                    className={`diary-view-btn${view === "grid" ? " active" : ""}`}
                    onClick={() => setView("grid")}
                    aria-pressed={view === "grid"}
                    data-view="grid"
                    aria-label="그리드 보기"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                  <button
                    type="button"
                    className={`diary-view-btn${view === "list" ? " active" : ""}`}
                    onClick={() => setView("list")}
                    aria-pressed={view === "list"}
                    data-view="list"
                    aria-label="목록 보기"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>

              <div
                className={`diary-grid${view === "list" ? " list-view" : ""}`}
                id="diaryGrid"
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <p className="diary-empty-message" role="status">
                    게시글을 불러오는 중입니다.
                  </p>
                ) : error ? (
                  <p className="diary-empty-message" role="alert">
                    {error}
                  </p>
                ) : visiblePosts.length === 0 ? (
                  <p className="diary-empty-message" role="status">
                    {posts.length === 0
                      ? "게시글이 없습니다"
                      : "검색 결과가 없습니다."}
                  </p>
                ) : (
                  visiblePosts.map((post) => (
                    <article className="diary-card" key={post.postId}>
                      {post.thumbnailUrl && (
                        <img src={post.thumbnailUrl} alt={post.title} />
                      )}
                      <div className="diary-card-body">
                        <h2>{post.title}</h2>
                        <p>{post.authorName}</p>
                      </div>
                    </article>
                  ))
                )}
              </div>
              {!isLoading && !error && pageCount > 1 && (
                <nav
                  className="diary-pagination"
                  id="diaryPagination"
                  aria-label="집사일기 페이지"
                >
                  <button
                    type="button"
                    aria-label="이전 페이지"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                  >
                    ‹
                  </button>
                  {Array.from(
                    { length: pageCount },
                    (_, index) => index + 1,
                  ).map((number) => (
                    <button
                      type="button"
                      key={number}
                      className={page === number ? "active" : undefined}
                      aria-current={page === number ? "page" : undefined}
                      onClick={() => setPage(number)}
                    >
                      {number}
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-label="다음 페이지"
                    disabled={page === pageCount}
                    onClick={() => setPage(page + 1)}
                  >
                    ›
                  </button>
                </nav>
              )}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageFrame>
  );
}
