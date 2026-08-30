import { Footer } from "../components/Footer";
import { PageFrame } from "../components/PageFrame";
import { ReservationForm } from "../components/reservation/ReservationForm";
import { ReservationGuide } from "../components/reservation/ReservationGuide";
import { Sidebar } from "../components/Sidebar";
import { TopBar } from "../components/TopBar";

export function ReservationPage() {
  return (
    <PageFrame title="방문 예약">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <main className="reservation-container">
          <section className="reservation-page" aria-labelledby="reservationTitle">
            <div className="reservation-layout">
              <ReservationForm />
              <ReservationGuide />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </PageFrame>
  );
}
