import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import type { ReservationData } from "../../types/Reservation";
import { postReservations } from "../../api/reservationApi";

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
  const navigation = useNavigate();

  const handleBooking = (reservation: ReservationData) => {
    if (!auth.isLoggedIn) {
      alert("로그인이 필요합니다.");
      navigation("/login");
      return;
    }

    postReservations(reservation)
      .then((res) => console.log(res))
      .catch();
  };

  return (
    <div className="reservation-side-fields">
      <fieldset className="reservation-field reservation-time-field">
        <legend>
          <span className="reservation-step-badge">3</span>시간 선택
        </legend>
        <div className="reservation-time-list">
          {reservationTimes.map((time) => (
            <button
              key={time}
              type="button"
              className={reservation.time === time ? "selected" : undefined}
              onClick={() => onChange({ time })}
            >
              {time}
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
        onClick={() => handleBooking(reservation)}
      >
        예약하기
      </button>
    </div>
  );
}
