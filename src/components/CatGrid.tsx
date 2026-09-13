import { CatCard } from "./CatCard";
import type { Cat } from "../types/Cat";

interface CatGridProps {
  cats: Cat[];
}

export function CatGrid({ cats }: CatGridProps) {
  return (
    <div className="cat-grid">
      {cats.length === 0 && (
        <p className="cat-empty-message" role="status">고양이가 없습니다</p>
      )}
      {cats.map((cat) => (
        <CatCard key={`${cat.breedId}-${cat.name}-${cat.imageUrl}`} cat={cat} />
      ))}
    </div>
  );
}
