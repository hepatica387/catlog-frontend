import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { Cat } from "../types/Cat";
import { top7Cats } from "../api/catApi";
import { getBreedName } from "../constants/breeds";

const stories: any[] = [];
function PawIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.3 12.4c-1.5 0-2.8-1.2-2.8-2.8S5.8 6.8 7.3 6.8s2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8Zm9.4 0c-1.5 0-2.8-1.2-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8ZM12 20.6c-2.9 0-5.4-1.7-5.4-3.7 0-1.5 1.7-2.7 3.2-3.6.7.5 1.4.8 2.2.8.8 0 1.5-.3 2.2-.8 1.5.9 3.2 2.1 3.2 3.6 0 2-2.5 3.7-5.4 3.7Z" />
    </svg>
  );
}

export function HomePage() {
  const [cats, setCats] = useState<Cat[]>([]);

  useEffect(() => {
    top7Cats().then(setCats).catch(console.error);
  }, []);

  return (
    <PageFrame title="FELIA CATLOG" bodyClass="home-page">
      <Sidebar />
      <main className="main-content">
        <TopBar />

        <section className="banner" aria-labelledby="home-hero-title">
          <div className="banner-text">
            <h2 id="home-hero-title">
              AI가 당신과
              <br />
              가장 잘 맞는
              <br />
              반려묘를 찾아드려요
            </h2>
            <p>
              생활 패턴, 성향, 취향 데이터를 분석해
              <br />
              최적의 반려묘를 추천합니다.
            </p>
            <a className="banner-btn" href="/curation">
              AI 맞춤 큐레이션 시작하기
            </a>
          </div>
        </section>

        <section className="quick-menu" aria-label="주요 서비스">
          {[
            ["AI 맞춤 큐레이션", "나에게 맞는 고양이 찾기"],
            ["고양이 분양", "품종별 입양 정보 보기"],
            ["방문 예약", "매장 방문 예약하기"],
            ["온라인 상담", "전문 상담사와 상담하기"],
            ["집사일기", "입양 후기 공유하기"],
            ["카페 체험", "고양이와 교감하는 공간"],
          ].map(([title, description]) => (
            <div className="quick-card" key={title}>
              <span className="quick-icon">
                <PawIcon />
              </span>
              <strong>{title}</strong>
              <small>{description}</small>
            </div>
          ))}
        </section>

        <section className="new-cats-section" aria-labelledby="new-cats-title">
          <div className="section-header">
            <h2 id="new-cats-title">새로 들어온 아이들</h2>
            <a className="view-all" href="/adoption">
              더보기
            </a>
          </div>
          {cats.length === 0 ? (
            <>
              <div>새로 들어온 고양이가 없습니다.</div>
            </>
          ) : (
            <div className="new-cat-list">
              {cats.map((cat) => (
                <a
                  className="new-cat"
                  href={`/detail?id=${cat.breedId}`}
                  key={cat.breedId}
                >
                  <img
                    src={`/assets${cat.imageUrl}`}
                    alt={cat.name}
                  />
                  <strong>{cat.name}</strong>
                  <span>
                    {getBreedName(cat.breedId)} / {cat.ageMonth}개월
                  </span>
                </a>
              ))}
            </div>
          )}
        </section>

        <section
          className="diary-preview-section"
          aria-labelledby="story-title"
        >
          <div className="section-header">
            <h2 id="story-title">집사 이야기</h2>
            <a className="view-all" href="/diary">
              더보기
            </a>
          </div>
          <div className="story-grid">
            {stories.length === 0 ? (
              <article className="story-card">
                <div>첫 게시물을 등록해 보세요.</div>
              </article>
            ) : (
              stories.map((story) => (
                <article className="story-card" key={story.title}>
                  <a href="/diary">
                    <img src={`/assets/images/${story.image}`} alt="" />
                    <div>
                      <h3>{story.title}</h3>
                      <p>{story.text}</p>
                      <time dateTime="2026-07-24">2026.07.24</time>
                      <span className="likes">128</span>
                    </div>
                  </a>
                </article>
              ))
            )}
          </div>
        </section>

        <Footer />
      </main>
    </PageFrame>
  );
}
