export interface DiaryPost {
  postId: number;
  title: string;
  thumbnailUrl: string | null;
  authorName: string;
}

export interface GetDiaryType {
  postId: number;
  title: string;
  thumbnailUrl: string | null;
  authorName: string;
  created_at: string;
  viewCount: number;
  likeCount: number;
}
