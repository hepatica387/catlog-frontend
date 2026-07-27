import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { AdoptionPage } from "../pages/AdoptionPage";
import { ConsultationPage } from "../pages/ConsultationPage";
import { CurationPage } from "../pages/CurationPage";
import { DetailPage } from "../pages/DetailPage";
import { DiaryPage } from "../pages/DiaryPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { ReservationPage } from "../pages/ReservationPage";
import { SignupPage } from "../pages/SignupPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.adoption} element={<AdoptionPage />} />
      <Route path={ROUTES.consultation} element={<ConsultationPage />} />
      <Route path={ROUTES.curation} element={<CurationPage />} />
      <Route path={ROUTES.detail} element={<DetailPage />} />
      <Route path={ROUTES.diary} element={<DiaryPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.reservation} element={<ReservationPage />} />
      <Route path={ROUTES.signup} element={<SignupPage />} />
      <Route path="*" element={<Navigate to={ROUTES.home} replace />} />
    </Routes>
  );
}
