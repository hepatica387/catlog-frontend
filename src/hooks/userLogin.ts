import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api/memberApi";
import { useAuth } from "./useAuth";

export function useLogin() {
  const navigate = useNavigate();
  const { setMember } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const userId = String(formData.get("userId") ?? "").trim();
    const userPw = String(formData.get("userPw") ?? "");

    if (!userId || !userPw) {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const member = await login({ userId, userPw });
      setMember(member);

      alert("로그인되었습니다.");
      navigate("/");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "로그인에 실패했습니다.";

      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    handleSubmit,
    isSubmitting,
  };
}
