import { Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup";

export function SignupForm() {
  const {
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
  } = useSignup();

  return (
    <div className="signup-box">
      <div className="signup-header">
        <h1>회원가입</h1>
      </div>

      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            아이디 <span className="required">*</span>
          </label>
          <div className="input-with-btn">
            <input
              type="text"
              id="username"
              name="username"
              value={userId}
              onChange={handleUserIdChange}
              placeholder="아이디를 입력해주세요"
              required
            />
            <button
              type="button"
              className="check-btn"
              onClick={handleUserIdCheck}
            >
              아이디 확인
            </button>
          </div>
          <div
            className={`check-message ${
              isUserIdChecked ? "success" : "error"
            }`}
          >
            {userIdMessage}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">
            비밀번호 <span className="required">*</span>
          </label>
          <input
            type="password"
            id="password"
            name="userPw"
            placeholder="비밀번호를 입력해주세요"
            required
          />
          <div className="password-hint">영문 5자 이상 15자 이하</div>
        </div>

        <div className="form-group">
          <label htmlFor="passwordConfirm">
            비밀번호 확인 <span className="required">*</span>
          </label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="비밀번호를 다시 입력해주세요"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">
            이름 <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="userName"
            placeholder="이름을 입력해주세요"
            required
          />
          <div className="password-hint">
            한글과 영문만 사용할 수 있습니다
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="emailId">
            이메일 <span className="required">*</span>
          </label>
          <div className="email-input-group">
            <input
              type="text"
              id="emailId"
              name="emailId"
              placeholder="이메일"
              className="email-id"
              required
            />
            <span className="email-divider">@</span>
            <select
              id="emailDomain"
              name="emailDomain"
              className="email-domain"
              value={emailDomain}
              onChange={handleEmailDomainChange}
            >
              <option value="">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
              <option value="outlook.com">outlook.com</option>
            </select>
            <input
              type="text"
              id="emailCustom"
              name="emailCustom"
              placeholder="도메인 입력"
              className={`email-custom ${
                emailDomain === "" ? "active" : ""
              }`}
              required={emailDomain === ""}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="birthDate">
            생년월일 <span className="required">*</span>
          </label>
          <input
            type="date"
            id="birthDate"
            name="birthDay"
            max={today}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">
            휴대폰 번호 <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="010-0000-0000"
            onInput={handlePhoneInput}
            required
          />
        </div>

        <div className="terms-section">
          <div className="terms-item">
            <input
              type="checkbox"
              id="termsAgree"
              name="termsAgree"
              required
            />
            <label htmlFor="termsAgree">
              <a href="/#">이용약관</a>에 동의합니다
            </label>
          </div>
          <div className="terms-item">
            <input
              type="checkbox"
              id="privacyAgree"
              name="privacyAgree"
              required
            />
            <label htmlFor="privacyAgree">
              <a href="/#">개인정보처리방침</a>에 동의합니다
            </label>
          </div>
          <div className="terms-item">
            <input
              type="checkbox"
              id="marketingAgree"
              name="marketingAgree"
            />
            <label htmlFor="marketingAgree">
              마케팅 정보 수신에 동의합니다 (선택)
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="signup-btn"
          disabled={isSubmitting}
        >
          {isSubmitting ? "처리 중..." : "회원가입"}
        </button>
      </form>

      <div className="login-link">
        이미 계정이 있으신가요?
        <Link to="/login">로그인하기</Link>
      </div>
    </div>
  );
}
