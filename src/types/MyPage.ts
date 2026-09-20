export type VisitStatus = "PENDING" | "COMPLETED" | "CANCELLED";

export interface MyReservation {
  reservationId: number;
  catName: string | null;
  breedName: string | null;
  imageUrl: string | null;
  branchName: string;
  reservationDate: string;
  reservationTime: string;
  status: VisitStatus;
  memo: string | null;
  purpose: string;
}

export interface MyDiaryPost {
  postId: number;
  title: string;
  thumbnailUrl: string | null;
  createdAt: string;
  viewCount: number;
  likeCount: number;
}
