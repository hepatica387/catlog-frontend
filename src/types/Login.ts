export interface LoginRequest {
  userId: string;
  userPw: string;
}

export interface LoginResponse {
  userId: string;
  userName: string;
  email: string;
}
