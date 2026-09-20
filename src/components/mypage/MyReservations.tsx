import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { GetReservationType, VisitStatus } from "../../types/Reservation";
import { getBreedName } from "../../constants/breeds";

const branchNames: Record<string, string> = {
  main: "FELIA CATLOG 본점",
  cafe: "FELIA 고양이 카페",
};

const statuses: Record<VisitStatus, string> = {
  PENDING: "예약 예정",
  COMPLETED: "방문 완료",
  CANCELLED: "취소됨",
};
const filters = [
  { value: "ALL", label: "전체" },
  { value: "PENDING", label: "예약 예정" },
  { value: "COMPLETED", label: "방문 완료" },
  { value: "CANCELLED", label: "취소 내역" },
] as const;

export function MyReservations({
  reservations,
  isLoading = false,
  error = null,
}: {
  reservations: GetReservationType[];
  isLoading?: boolean;
  error?: string | null;
}) {
  const [filter, setFilter] = useState<"ALL" | VisitStatus>("ALL");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const visible = reservations.filter(
    (item) => filter === "ALL" || item.status === filter,
  );

  return (
    <section className="mypage-panel" aria-labelledby="my-reservations-title">
      <div className="mypage-panel-heading">
        <h2 id="my-reservations-title">
          <i className="fa-regular fa-calendar-check" aria-hidden="true" />
          방문 예약 확인
        </h2>
        <Link className="mypage-outline-button" to={ROUTES.reservation}>
          방문 예약하기 <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className="mypage-filters" aria-label="예약 상태 필터">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            className={filter === value ? "is-active" : undefined}
            onClick={() => {
              setFilter(value);
              setExpandedId(null);
            }}
          >
            {label} (
            {value === "ALL"
              ? reservations.length
              : reservations.filter((item) => item.status === value).length}
            )
          </button>
        ))}
      </div>
      <div className="mypage-table-scroll">
        <table className="mypage-table">
          <caption className="sr-only">나의 방문 예약 내역</caption>
          <thead>
            <tr>
              <th scope="col">반려묘</th>
              <th scope="col">방문 지점</th>
              <th scope="col">방문 일시</th>
              <th scope="col">상태</th>
              <th scope="col">비고</th>
              <th scope="col">상세보기</th>
            </tr>
          </thead>
          <tbody>
            {!isLoading && !error && visible.map((item, index) => {
              const rowId = String(item.reservationId ?? `${item.branchId}-${item.reservationDate}-${item.reservationTime}-${index}`);
              return (
              <tr key={rowId}>
                <td>
                  <div className="mypage-cat-cell">
                    {item.imageUrl && <img src={item.imageUrl} alt="" />}
                    <div>
                      <strong>-</strong>
                      <small>{item.breedId != null ? getBreedName(item.breedId) : "-"}</small>
                    </div>
                  </div>
                </td>
                <td>{branchNames[item.branchId] || item.branchId || "-"}</td>
                <td>
                  {item.reservationDate} {item.reservationTime.slice(0, 5)}
                </td>
                <td>
                  <span
                    className={`mypage-status ${item.status.toLowerCase()}`}
                  >
                    {statuses[item.status]}
                  </span>
                </td>
                <td>{item.memo || "-"}</td>
                <td>
                  <button
                    type="button"
                    className="mypage-outline-button"
                    aria-expanded={expandedId === rowId}
                    onClick={() =>
                      setExpandedId(
                        expandedId === rowId
                          ? null
                          : rowId,
                      )
                    }
                  >
                    상세보기
                  </button>
                  {expandedId === rowId && (
                    <p className="mypage-reservation-detail">
                      방문 목적: {item.purpose}
                    </p>
                  )}
                </td>
              </tr>
            ); })}
            {(isLoading || error) && <tr><td colSpan={6}><div className="mypage-empty" role={error ? "alert" : "status"}>
              {isLoading ? "예약 내역을 불러오는 중입니다." : error}
            </div></td></tr>}
            {!isLoading && !error && visible.length === 0 && (
              <tr>
                <td colSpan={6}>
                  <div className="mypage-empty" role="status">
                    <i className="fa-regular fa-calendar" aria-hidden="true" />
                    <strong>
                      {filter === "ALL"
                        ? "방문 예약 내역이 없습니다"
                        : `${filters.find((item) => item.value === filter)?.label} 내역이 없습니다`}
                    </strong>
                    <span>
                      만나고 싶은 고양이가 있다면 방문을 예약해보세요.
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
