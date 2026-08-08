import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";
import { Footer } from "../components/Footer";
import { BreedCategoryButtons } from "../components/BreedCategoryButtons";
import { CatGrid } from "../components/CatGrid";
import type { Cat } from "../types/Cat";
import { useEffect, useState } from "react";
import { findAll } from "../api/catApi";
import { BREED_IDS } from "../constants/breeds";

const breeds = [
  "노르웨이숲",
  "랙돌",
  "먼치킨",
  "러시안블루",
  "스코티쉬",
  "스핑크스",
  "터키쉬앙고라",
  "페르시안",
  "샴",
  "봄베이",
  "뱅갈",
  "아비시니",
  "브리티쉬숏헤어",
  "아메리칸숏헤어",
  "코리안숏헤어",
  "데몬렉스",
  "메인쿤",
  "기타묘",
];

export function AdoptionPage() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [selectedBreedId, setSelectedBreedId] = useState<number | null>(null);

  useEffect(() => {
    findAll().then(setCats).catch(console.error);
  }, []);

  const filteredCats =
    selectedBreedId === null
      ? cats
      : cats.filter((cat) => cat.breedId === selectedBreedId);

  return (
    <PageFrame title="고양이 분양">
      <Sidebar />
      {/* 메인 콘텐츠 */}
      <div className="main-content">
        {/* 상단 유저 메뉴 */}
        <TopBar />

        <main className="container" style={{ padding: "0 20px" }}>
          <section className="cat-section">
            <div className="container">
              <h3 className="section-title">고양이 분양</h3>

              <BreedCategoryButtons
                breedIds={BREED_IDS}
                selectedBreedId={selectedBreedId}
                onSelect={setSelectedBreedId}
              />

              <CatGrid cats={filteredCats} />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageFrame>
  );
}
