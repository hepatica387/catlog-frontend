import { useState } from "react";

const weekdays = ["일", "월", "화", "수", "목", "금", "토"];

interface ReservationCalendarProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
}

export function ReservationCalendar({
  selectedDate,
  onDateChange,
}: ReservationCalendarProps) {
  const [displayMonth, setDisplayMonth] = useState(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), 1);
  });
  const year = displayMonth.getFullYear();
  const month = displayMonth.getMonth();
  const monthLabel = `${year}년 ${month + 1}월`;
  const firstWeekday = displayMonth.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPreviousMonth = new Date(year, month, 0).getDate();
  const previousMonthDays = Array.from(
    { length: firstWeekday },
    (_, index) => daysInPreviousMonth - firstWeekday + index + 1,
  );
  const currentMonthDays = Array.from({ length: daysInMonth }, (_, index) => index + 1);
  const nextMonthDays = Array.from(
    { length: (7 - ((firstWeekday + daysInMonth) % 7)) % 7 },
    (_, index) => index + 1,
  );

  function moveMonth(offset: number) {
    setDisplayMonth((previous) =>
      new Date(previous.getFullYear(), previous.getMonth() + offset, 1),
    );
  }

  function dateValue(day: number) {
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  return (
    <fieldset className="reservation-field reservation-date-field">
      <legend>
        <span className="reservation-step-badge">2</span>
        날짜 선택
      </legend>
      <div className="reservation-calendar" aria-label={`${monthLabel} 예약 가능 날짜`}>
        <div className="calendar-head">
          <button type="button" aria-label="이전 달" onClick={() => moveMonth(-1)}>‹</button>
          <strong aria-live="polite">{monthLabel}</strong>
          <button type="button" aria-label="다음 달" onClick={() => moveMonth(1)}>›</button>
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
              className={selectedDate === dateValue(day) ? "selected" : undefined}
              aria-label={`${monthLabel} ${day}일`}
              aria-pressed={selectedDate === dateValue(day)}
              onClick={() => onDateChange(dateValue(day))}
            >
              {day}
            </button>
          ))}
          {nextMonthDays.map((day) => <span key={`next-${day}`} className="muted">{day}</span>)}
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
