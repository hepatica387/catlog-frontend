const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
const previousMonthDays = [28, 29, 30];
const currentMonthDays = Array.from({ length: 31 }, (_, index) => index + 1);

interface ReservationCalendarProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function ReservationCalendar({
  selectedDate,
  onDateChange,
}: ReservationCalendarProps) {
  return (
    <fieldset className="reservation-field reservation-date-field">
      <legend>
        <span className="reservation-step-badge">2</span>
        날짜 선택
      </legend>
      <div className="reservation-calendar" aria-label="2024년 5월 예약 가능 날짜">
        <div className="calendar-head">
          <button type="button" aria-label="이전 달">‹</button>
          <strong>2024년 5월</strong>
          <button type="button" aria-label="다음 달">›</button>
        </div>
        <div className="calendar-weekdays" aria-hidden="true">
          {weekdays.map((weekday) => <span key={weekday}>{weekday}</span>)}
        </div>
        <div className="calendar-days">
          {previousMonthDays.map((day) => <span key={`previous-${day}`} className="muted">{day}</span>)}
          {currentMonthDays.map((day) => (
            <button
              key={day}
              type="button"
              className={selectedDate === `2024-05-${String(day).padStart(2, "0")}` ? "selected" : undefined}
              onClick={() => onDateChange(`2024-05-${String(day).padStart(2, "0")}`)}
            >
              {day}
            </button>
          ))}
          <span className="muted">1</span>
        </div>
        <div className="calendar-legend">
          <span><i className="available" /> 오늘</span>
          <span><i className="selected" /> 선택 가능</span>
          <span><i className="disabled" /> 선택 불가</span>
        </div>
      </div>
    </fieldset>
  );
}
