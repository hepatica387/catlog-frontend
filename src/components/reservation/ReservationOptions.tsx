import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import type { ReservationData } from "../../types/Reservation";
import { postReservations } from "../../api/reservationApi";
import { useReservation } from "../../contexts/ReservationContext";

const reservationTimes = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
];
const reservationPurposes = [
  "아이 만나기",
  "분양 상담",
  "환경 둘러보기",
  "기타 문의",
];

interface ReservationOptionsProps {
  reservation: ReservationData;
  onChange: (update: Partial<ReservationData>) => void;
}

export function ReservationOptions({
  reservation,
  onChange,
}: ReservationOptionsProps) {
  const auth = useAuth();
  const { catId, setCatId } = useReservation();
  const navigation = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBooking = async (reservation: ReservationData) => {
    if (isSubmitting) return;

    console.log(reservation);
    debugger;

    if (!auth.member?.userId) {
      alert("로그인이 필요합니다.");
      navigation("/login");
      return;
    }

    if (
      !reservation.branchId ||
      !reservation.reservationDate ||
      !reservation.reservationTime ||
      !reservation.purpose
    ) {
      alert("방문 지점, 날짜, 시간, 목적을 모두 선택해주세요.");
      return;
    }

    setIsSubmitting(true);
    try {
      await postReservations({
        ...reservation,
        userId: auth.member.userId,
        catId,
        memo: null,
      });
      setCatId(null);
      alert("방문 예약이 접수되었습니다.");
    } catch (error) {
      alert(error instanceof Error ? error.message : "예약에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="reservation-side-fields">
      <fieldset className="reservation-field reservation-time-field">
        <legend>
          <span className="reservation-step-badge">3</span>시간 선택
        </legend>
        <div className="reservation-time-list">
          {reservationTimes.map((reservationTime) => (
            <button
              key={reservationTime}
              type="button"
              className={
                reservation.reservationTime === reservationTime
                  ? "selected"
                  : undefined
              }
              onClick={() => onChange({ reservationTime })}
            >
              {reservationTime}
            </button>
          ))}
        </div>
        <p>평일 방문은 약 60분 정도 소요됩니다.</p>
      </fieldset>

      <fieldset className="reservation-field reservation-purpose-field">
        <legend>
          <span className="reservation-step-badge">4</span>방문 목적 선택
        </legend>
        <div className="reservation-purpose-list">
          {reservationPurposes.map((purpose) => (
            <label key={purpose}>
              <input
                type="radio"
                name="purpose"
                value={purpose}
                checked={reservation.purpose === purpose}
                onChange={() => onChange({ purpose })}
              />{" "}
              {purpose}
            </label>
          ))}
        </div>
      </fieldset>

      <button
        type="button"
        className="reservation-submit-btn"
        disabled={isSubmitting}
        onClick={() => handleBooking(reservation)}
      >
        {isSubmitting ? "예약 중..." : "예약하기"}
      </button>
    </div>
  );
}
