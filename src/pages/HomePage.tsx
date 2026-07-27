import { PageFrame } from "../components/PageFrame";
import { usePageLogic } from "../hooks/usePageLogic";
import { initHomePage } from "../pageLogic/home";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";

const newCats = [
  { id: 1, name: "먼지", breed: "브리티시 숏헤어", age: "3개월", image: "cat2.png" },
  { id: 2, name: "로미", breed: "러시안 블루", age: "4개월", image: "cat3.png" },
  { id: 3, name: "만두", breed: "스코티시 폴드", age: "2개월", image: "cat4.png" },
  { id: 4, name: "모카", breed: "먼치킨", age: "3개월", image: "cat5.png" },
  { id: 5, name: "보리", breed: "노르웨이 숲", age: "5개월", image: "cat6.png" },
  { id: 6, name: "제리", breed: "코리안 숏헤어", age: "2개월", image: "cat22.png" },
  { id: 7, name: "루카", breed: "샴", age: "3개월", image: "cat23.png" },
];

const stories = [
  { title: "우리 집에 처음 온 날", text: "새로운 가족을 맞이한 집사의 따뜻한 이야기를 만나보세요.", image: "cat12.png" },
  { title: "처음 만난 고양이 친구", text: "조심스럽던 첫 만남부터 가까워진 순간까지 기록했습니다.", image: "cat13.png" },
  { title: "건강하게 자라는 중", text: "매일 달라지는 반려묘의 성장 과정을 함께 나눠요.", image: "cat14.png" },
  { title: "우리 가족이 된 날", text: "입양 상담부터 첫 만남까지, 특별한 하루의 기록입니다.", image: "cat15.png" },
];

function PawIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7.3 12.4c-1.5 0-2.8-1.2-2.8-2.8S5.8 6.8 7.3 6.8s2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8Zm9.4 0c-1.5 0-2.8-1.2-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.2 2.8 2.8-1.3 2.8-2.8 2.8ZM12 20.6c-2.9 0-5.4-1.7-5.4-3.7 0-1.5 1.7-2.7 3.2-3.6.7.5 1.4.8 2.2.8.8 0 1.5-.3 2.2-.8 1.5.9 3.2 2.1 3.2 3.6 0 2-2.5 3.7-5.4 3.7Z" />
    </svg>
  );
}

export function HomePage() {
  usePageLogic(initHomePage);

  return (
    <PageFrame title="FELIA CATLOG" bodyClass="home-page">
      <Sidebar />
      <main className="main-content">
        <TopBar />

        <section className="banner" aria-labelledby="home-hero-title">
          <div className="banner-text">
            <h2 id="home-hero-title">AI가 당신과<br />가장 잘 맞는<br />반려묘를 찾아드려요</h2>
            <p>생활 패턴, 성향, 취향 데이터를 분석해<br />최적의 반려묘를 추천합니다.</p>
            <a className="banner-btn" href="/curation">AI 맞춤 큐레이션 시작하기</a>
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
              <span className="quick-icon"><PawIcon /></span>
              <strong>{title}</strong>
              <small>{description}</small>
            </div>
          ))}
        </section>

        <section className="new-cats-section" aria-labelledby="new-cats-title">
          <div className="section-header">
            <h2 id="new-cats-title">새로 들어온 아이들</h2>
            <a className="view-all" href="/adoption">더보기</a>
          </div>
          <div className="new-cat-list">
            {newCats.map((cat) => (
              <a className="new-cat" href={`/detail?id=${cat.id}`} key={cat.id}>
                <img src={`/assets/images/${cat.image}`} alt={cat.name} />
                <strong>{cat.name}</strong>
                <span>{cat.breed} / {cat.age}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="diary-preview-section" aria-labelledby="story-title">
          <div className="section-header">
            <h2 id="story-title">집사 이야기</h2>
            <a className="view-all" href="/diary">더보기</a>
          </div>
          <div className="story-grid">
            {stories.map((story) => (
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
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </PageFrame>
  );
}
