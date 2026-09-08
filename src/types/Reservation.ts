export interface ReservationData {
  userId: string;
  branchId: string;
  catId?: string | null;
  purpose: string;
  reservationDate: string;
  reservationTime: string;
  memo: null;
}
