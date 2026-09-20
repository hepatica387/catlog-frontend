export type VisitStatus = "PENDING" | "COMPLETED" | "CANCELLED";

export interface GetReservationType {
  reservationId: number;
  imageUrl: string | null;
  breedId?: number | null;
  userId: string;
  branchId: string;
  catId?: string | null;
  purpose: string;
  status: VisitStatus;
  reservationDate: string;
  reservationTime: string;
  memo: null;
}

export type ReservationData = Pick<GetReservationType,
  "userId" | "branchId" | "catId" | "purpose" | "reservationDate" | "reservationTime" | "memo"
>;
