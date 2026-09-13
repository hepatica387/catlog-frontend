import { useEffect, useRef } from "react";
import type { ReservationData } from "../../types/Reservation";
import "./ReservationCompleteModal.css";

interface ReservationCompleteModalProps {
  reservation: ReservationData;
  onClose: () => void;
}

export function ReservationCompleteModal({ reservation, onClose }: ReservationCompleteModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="reservation-complete-modal"
      aria-labelledby="reservation-complete-title"
      aria-describedby="reservation-complete-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="reservation-complete-icon" aria-hidden="true">✓</div>
      <h2 id="reservation-complete-title">방문 예약이 완료되었습니다!</h2>
      <p id="reservation-complete-description">
        예약 정보를 메시지로 보내드렸어요.
        <br />
        방문 전에 메시지를 확인해주세요.
      </p>
      <dl className="reservation-complete-details">
        <div><dt>예약 날짜</dt><dd>{reservation.reservationDate}</dd></div>
        <div><dt>예약 시간</dt><dd>{reservation.reservationTime}</dd></div>
        <div><dt>방문 목적</dt><dd>{reservation.purpose}</dd></div>
      </dl>
      <button type="button" className="reservation-submit-btn" onClick={onClose} autoFocus>
        확인
      </button>
    </dialog>
  );
}
