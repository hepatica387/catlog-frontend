const guideItems = [
  { icon: "reservation_icon1.png", title: "예약 변경 및 취소", description: "방문 1일 전까지 홈페이지에서 변경 및 취소가 가능합니다." },
  { icon: "reservation_icon2.png", title: "지각 안내", description: "예약 시간 10분 이상 지각 시 상담이 어려울 수 있습니다." },
  { icon: "reservation_icon3.png", title: "준비 사항", description: "궁금한 점을 미리 메모해 오시면 상담이 더 원활합니다." },
  { icon: "reservation_icon4.png", title: "주차 안내", description: "건물 지하 주차장 이용 가능합니다." },
];

export function ReservationGuide() {
  return (
    <aside className="reservation-guide-panel" aria-labelledby="reservationGuideTitle">
      <h2 id="reservationGuideTitle">예약 안내</h2>
      <ul>
        {guideItems.map(({ icon, title, description }) => (
          <li key={title}>
            <span className="guide-icon" aria-hidden="true">
              <img src={`./../assets/icon/${icon}`} alt={`${title} 아이콘`} />
            </span>
            <div><strong>{title}</strong><p>{description}</p></div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
