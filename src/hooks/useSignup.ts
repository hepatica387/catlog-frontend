import {
  type ChangeEvent,
  type FormEvent,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../api/memberApi";

function formatPhoneNumber(value: string): string {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length > 10) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  }

  if (numbers.length > 3) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  }

  return numbers;
}

export function useSignup() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [isUserIdChecked, setIsUserIdChecked] = useState(false);
  const [userIdMessage, setUserIdMessage] = useState("");
  const [emailDomain, setEmailDomain] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function handleUserIdChange(event: ChangeEvent<HTMLInputElement>) {
    setUserId(event.target.value);
    setIsUserIdChecked(false);
    setUserIdMessage("");
  }

  function handleUserIdCheck() {
    if (userId.trim().length < 4) {
      setIsUserIdChecked(false);
      setUserIdMessage("아이디는 4자 이상이어야 합니다.");
      return;
    }

    setIsUserIdChecked(true);
    setUserIdMessage("사용 가능한 형식의 아이디입니다.");
  }

  function handleEmailDomainChange(
    event: ChangeEvent<HTMLSelectElement>,
  ) {
    setEmailDomain(event.target.value);
  }

  function handlePhoneInput(event: FormEvent<HTMLInputElement>) {
    event.currentTarget.value = formatPhoneNumber(
      event.currentTarget.value,
    );
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isUserIdChecked) {
      alert("아이디 확인을 먼저 진행해주세요.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const userPw = String(formData.get("userPw") ?? "");
    const passwordConfirm = String(
      formData.get("passwordConfirm") ?? "",
    );
    const userName = String(formData.get("userName") ?? "").trim();
    const emailId = String(formData.get("emailId") ?? "").trim();
    const customDomain = String(
      formData.get("emailCustom") ?? "",
    ).trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const birthDay = String(formData.get("birthDay") ?? "");
    const domain = emailDomain || customDomain;

    if (!/^[a-zA-Z]{5,15}$/.test(userPw)) {
      alert("비밀번호는 영문 5자 이상 15자 이하여야 합니다.");
      return;
    }

    if (userPw !== passwordConfirm) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    if (!/^[가-힣a-zA-Z\s]+$/.test(userName)) {
      alert("이름에는 한글과 영문만 사용할 수 있습니다.");
      return;
    }

    if (!emailId || !domain) {
      alert("이메일을 모두 입력해주세요.");
      return;
    }

    if (!/^010-\d{3,4}-\d{4}$/.test(phone)) {
      alert("휴대폰 번호를 010-0000-0000 형식으로 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      await signup({
        userId: userId.trim(),
        userPw,
        email: `${emailId}@${domain}`,
        userName,
        phone,
        birthDay,
      });

      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "회원가입에 실패했습니다.";

      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    emailDomain,
    handleEmailDomainChange,
    handlePhoneInput,
    handleSubmit,
    handleUserIdChange,
    handleUserIdCheck,
    isSubmitting,
    isUserIdChecked,
    today,
    userId,
    userIdMessage,
  };
}
