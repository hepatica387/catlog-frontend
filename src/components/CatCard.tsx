import { Link } from "react-router-dom";
import type { Cat } from "../types/Cat";
import { getBreedName } from "../constants/breeds";

interface CatCardProps {
  cat: Cat;
}

export function CatCard({ cat }: CatCardProps) {
  const breed = getBreedName(cat.breedId);

  return (
    <Link
      to={`/detail?id=${cat.breedId}`}
      className="card cat-card"
      data-category={breed}
    >
      <img src={`/assets${cat.imageUrl}`} alt={`${breed} ${cat.name}`} />
      <div className="cat-info">
        <h4>
          {breed} | {cat.name}
        </h4>
      </div>
    </Link>
  );
}
