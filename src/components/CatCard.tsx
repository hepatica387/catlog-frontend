import { Link } from "react-router-dom";
import type { Cat } from "../types/Cat";

interface CatCardProps {
  cat: Cat;
}

export function CatCard({ cat }: CatCardProps) {
  return (
    <Link
      to={`/detail?id=${cat.id}`}
      className="card cat-card"
      data-category={cat.breed}
    >
      <img
        src={`/assets/images/${cat.image}`}
        alt={`${cat.breed} ${cat.name}`}
      />
      <div className="cat-info">
        <h4>
          {cat.breed} | {cat.name}
        </h4>
      </div>
    </Link>
  );
}
