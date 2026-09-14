import { API_BASE_URL } from "../constants/api";
import type { DiaryPost } from "../types/DiaryPost";

export async function getDiaryPosts(
  signal?: AbortSignal,
): Promise<DiaryPost[]> {
  const response = await fetch(`${API_BASE_URL}/diary-posts`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("게시글 목록을 불러오지 못했습니다.");
  }
  return response.json();
}
