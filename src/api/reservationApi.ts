import { API_BASE_URL } from "../constants/api";
import type { GetReservationType, ReservationData } from "../types/Reservation";

export async function postReservations(request: ReservationData): Promise<any> {
  const res = await fetch(`${API_BASE_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: request.userId,
      branchId: request.branchId,
      purpose: request.purpose,
      reservationDate: request.reservationDate,
      reservationTime: request.reservationTime,
      ...(request.catId?.trim() ? { catId: request.catId } : {}),
      memo: null,
    }),
  });

  if (!res.ok) {
    let message = "예약실패 했습니다.";

    try {
      const errorResponse = (await res.json()) as {
        message?: string;
      };

      message = errorResponse.message || message;
    } catch {}

    throw new Error(message);
  }

  const body = await res.text();
  return body ? JSON.parse(body) : undefined;
}

export async function getReservations(
  userId: string,
): Promise<GetReservationType[]> {
  const res = await fetch(
    `${API_BASE_URL}/reservations/members/${encodeURIComponent(userId)}`,
  );

  if (!res.ok) {
    throw new Error("예약 내역을 가져오지 못했습니다.");
  }

  const body = await res.text();
  const data = body ? JSON.parse(body) : [];
  if (data === null) return [];
  if (!Array.isArray(data))
    throw new Error("예약 내역 응답 형식이 올바르지 않습니다.");
  return data as GetReservationType[];
}
