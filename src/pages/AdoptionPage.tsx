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

// const cats: Cat[] = [
//   { id: 1, breed: "봄베이", name: "먼지", image: "cat6.png" },
//   { id: 2, breed: "랙돌", name: "쿠키", image: "cat8.png" },
//   { id: 3, breed: "노르웨이숲", name: "라떼", image: "cat5.png" },
//   { id: 4, breed: "러시안블루", name: "별", image: "cat10.png" },
//   { id: 5, breed: "먼치킨", name: "초코", image: "cat11.png" },
//   { id: 6, breed: "스코티쉬", name: "구름", image: "cat12.png" },
//   { id: 7, breed: "뱅갈", name: "호랑", image: "cat13.png" },
//   { id: 8, breed: "페르시안", name: "복숭아", image: "cat14.png" },
//   { id: 9, breed: "노르웨이숲", name: "사과", image: "cat15.png" },
//   { id: 10, breed: "스핑크스", name: "백숙", image: "cat16.png" },
//   { id: 11, breed: "터키쉬앙고라", name: "구름", image: "cat17.png" },
//   { id: 12, breed: "샴", name: "밤", image: "cat18.png" },
//   {
//     id: 13,
//     breed: "아메리칸숏헤어",
//     name: "콩이",
//     image: "cat19.png",
//   },
//   {
//     id: 14,
//     breed: "브리티쉬숏헤어",
//     name: "모카",
//     image: "cat20.png",
//   },
//   { id: 15, breed: "메인쿤", name: "루루", image: "cat21.png" },
//   {
//     id: 18,
//     breed: "메인쿤",
//     name: "토리",
//     image: "maine_coon_baby_profile.png",
//   },
//   { id: 16, breed: "기타묘", name: "두부", image: "cat22.png" },
//   { id: 17, breed: "데몬렉스", name: "루카", image: "cat23.png" },
// ];

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
