interface BreedCategoryButtonsProps {
  breedIds: Record<string, number>;
  selectedBreedId: number | null;
  onSelect: (breedId: number | null) => void;
}

export function BreedCategoryButtons({
  breedIds,
  selectedBreedId,
  onSelect,
}: BreedCategoryButtonsProps) {
  return (
    <div className="breed-categories">
      <button
        type="button"
        className={`category-btn ${selectedBreedId === null ? "active" : ""}`}
        data-category="all"
        onClick={() => onSelect(null)}
      >
        전체
      </button>

      {Object.entries(breedIds).map(([breed, breedId]) => (
        <button
          key={breed}
          type="button"
          className={`category-btn ${
            selectedBreedId === breedId ? "active" : ""
          }`}
          data-category={breedId}
          onClick={() => onSelect(breedId)}
        >
          {breed}
        </button>
      ))}
    </div>
  );
}
