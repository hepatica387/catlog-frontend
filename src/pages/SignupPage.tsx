import { ConsultationButton } from "../components/ConsultationButton";
import { Footer } from "../components/Footer";
import { PageFrame } from "../components/PageFrame";
import { Sidebar } from "../components/Sidebar";
import { SignupForm } from "../components/signup/SignupForm";
import { TopBar } from "../components/TopBar";

export function SignupPage() {
  return (
    <PageFrame title="회원가입">
      <Sidebar />

      <div className="main-content">
        <TopBar />

        <main className="signup-container auth-page-container">
          <SignupForm />
        </main>

        <Footer />
      </div>

      <ConsultationButton />
    </PageFrame>
  );
}
