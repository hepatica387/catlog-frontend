import { API_BASE_URL } from "../constants/api";
import type { DiaryPost, GetDiaryType } from "../types/DiaryPost";

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

export async function getUserDiaryPosts(userId: string): Promise<GetDiaryType[]> {
  const response = await fetch(`${API_BASE_URL}/diary-posts/${encodeURIComponent(userId)}`);
  if (!response.ok) {
    throw new Error("게시글 목록을 불러오지 못했습니다.");
  }
  const data: unknown = await response.json();
  if (!Array.isArray(data)) {
    throw new Error("게시글 목록 응답 형식이 올바르지 않습니다.");
  }
  return data as GetDiaryType[];
}
