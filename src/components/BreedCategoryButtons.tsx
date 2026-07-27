interface BreedCategoryButtonsProps {
  breeds: string[];
}

export function BreedCategoryButtons({
  breeds,
}: BreedCategoryButtonsProps) {
  return (
    <div className="breed-categories">
      <button
        type="button"
        className="category-btn active"
        data-category="all"
      >
        전체
      </button>

      {breeds.map((breed) => (
        <button
          key={breed}
          type="button"
          className="category-btn"
          data-category={breed}
        >
          {breed}
        </button>
      ))}
    </div>
  );
}
