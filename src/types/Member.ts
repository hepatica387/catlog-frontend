export interface SignupRequest {
  userId: string;
  userPw: string;
  email: string;
  userName: string;
  phone: string;
  birthDay: string;
}

export interface MemberInfoResponse {
  userId: string;
  userName: string;
  email: string;
  phone: string | null;
  birthday: string | null;
  create_at: string | null;
}
