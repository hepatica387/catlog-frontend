import { useState } from "react";
import type { ReservationData } from "../../types/Reservation";
import { ReservationCalendar } from "./ReservationCalendar";
import { ReservationOptions } from "./ReservationOptions";

export function ReservationForm() {
  const [reservation, setReservation] = useState<ReservationData>({
    place: "",
    date: "",
    time: "",
    purpose: "",
  });

  function updateReservation(update: Partial<ReservationData>) {
    setReservation((previous) => ({ ...previous, ...update }));
  }

  return (
    <section className="reservation-form-panel" aria-labelledby="reservationFormTitle">
      <div className="reservation-form-heading">
        <h2 id="reservationFormTitle">방문 예약하기</h2>
        <p>원하시는 날짜와 시간을 선택해주세요.</p>
      </div>

      <form className="reservation-booking-form">
        <div className="reservation-field reservation-place-field">
          <legend>
            <span className="reservation-step-badge">1</span>
            방문 지점 선택
          </legend>
          <select
            id="reservationPlace"
            name="place"
            value={reservation.place}
            onChange={(event) => updateReservation({ place: event.target.value })}
            required
          >
            <option value="">방문 지점을 선택해주세요</option>
            <option value="main">FELIA CATLOG 본점</option>
            <option value="cafe">FELIA 고양이 카페</option>
          </select>
        </div>

        <div className="reservation-form-grid">
          <ReservationCalendar
            selectedDate={reservation.date}
            onDateChange={(date) => updateReservation({ date })}
          />
          <ReservationOptions
            reservation={reservation}
            onChange={updateReservation}
          />
        </div>
      </form>
    </section>
  );
}
