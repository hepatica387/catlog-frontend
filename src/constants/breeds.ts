export const BREED_IDS: Record<string, number> = {
  노르웨이숲: 1,
  랙돌: 2,
  먼치킨: 3,
  러시안블루: 4,
  스코티쉬: 5,
  스핑크스: 6,
  터키쉬앙고라: 7,
  페르시안: 8,
  샴: 9,
  봄베이: 10,
  뱅갈: 11,
  아비시니안: 12,
  브리티시숏헤어: 13,
  아메리칸숏헤어: 14,
  코리안숏헤어: 15,
  데본렉스: 16,
  메인쿤: 17,
  기타묘: 18,
};

export function getBreedName(breedId: number): string {
  return (
    Object.keys(BREED_IDS).find((name) => BREED_IDS[name] === breedId) ??
    "알 수 없는 품종"
  );
}
