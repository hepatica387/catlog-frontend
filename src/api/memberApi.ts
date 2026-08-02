import { LoginRequest, LoginResponse } from "../types/Login";
import type { SignupRequest } from "../types/Member";

const API_BASE_URL = "http://localhost:8080/api";

interface ErrorResponse {
  message?: string;
}

export async function signup(request: SignupRequest): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/members`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (response.ok) {
    return;
  }

  let message = "회원가입에 실패했습니다.";

  try {
    const errorResponse = (await response.json()) as ErrorResponse;
    message = errorResponse.message || message;
  } catch {
    // 응답 본문이 JSON이 아니면 기본 메시지를 사용합니다.
  }

  throw new Error(message);
}

export async function login(request: LoginRequest): Promise<LoginResponse> {
  const response = await fetch(`${API_BASE_URL}/members/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    let message = "로그인에 실패했습니다.";

    try {
      const errorResponse = (await response.json()) as {
        message?: string;
      };

      message = errorResponse.message || message;
    } catch {
      // JSON 응답이 아니면 기본 메시지를 사용합니다.
    }

    throw new Error(message);
  }

  return response.json();
}
