import { CatCard } from "./CatCard";
import type { Cat } from "../types/Cat";

interface CatGridProps {
  cats: Cat[];
}

export function CatGrid({ cats }: CatGridProps) {
  return (
    <div className="cat-grid">
      {cats.map((cat) => (
        <CatCard key={`${cat.breedId}-${cat.name}-${cat.mainImgUrl}`} cat={cat} />
      ))}
    </div>
  );
}
