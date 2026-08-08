import { Cat } from "../types/Cat";

const API_BASE_URL = "http://localhost:8080/api";

export async function findAll() {
  const response = await fetch(`${API_BASE_URL}/cats`);

  if (!response.ok) {
    throw new Error("고양이 목록을 불러오지 못했습니다.");
  }

  return response.json() as Promise<Cat[]>;
}

export async function top7Cats() {
  const res = await fetch(`${API_BASE_URL}/cats/top7`);

  if (!res.ok) {
    throw new Error("고양이 목록을 불러오지 못했습니다.");
  }

  return res.json() as Promise<Cat[]>;
}
