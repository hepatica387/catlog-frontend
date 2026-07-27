import { Link } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export function ConsultationButton() {
  return (
    <Link
      to={ROUTES.consultation}
      className="consultation-btn"
      aria-label="온라인 상담"
    >
      💬
    </Link>
  );
}
