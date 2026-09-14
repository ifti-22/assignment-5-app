type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div
      className="
        flex h-full flex-col
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      {/* Top */}
      <div className="flex items-start justify-between">
        {/* Technology Icon */}
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        {/* Badge */}
        <span
          className="
            rounded-full
            bg-sky-50
            px-2.5
            py-1
            text-[10px]
            font-medium
            text-sky-500
          "
        >
          {technology.badge}
        </span>
      </div>

      {/* Technology Name */}
      <h3 className="mt-3 text-base font-semibold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p
        className="
          mt-1.5
          min-h-12
          text-[11px]
          leading-5
          text-slate-400
        "
      >
        {technology.description}
      </p>

      {/* Technology Information */}
      <div
        className="
          mt-3
          flex
          items-center
          justify-between
          gap-2
          border-t
          border-slate-100
          pt-3
        "
      >
        {/* Category */}
        <span
          className="
            rounded
            bg-slate-50
            px-2
            py-1
            text-[9px]
            font-medium
            text-slate-500
          "
        >
          {technology.category}
        </span>

        {/* Difficulty */}
        <span className="truncate text-[9px] text-slate-400">
          {technology.difficulty}
        </span>

        {/* Rating */}
        <span className="shrink-0 text-[10px] font-medium text-slate-500">
          <span className="text-yellow-400">★</span>{" "}
          {technology.rating}
        </span>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`
          mt-auto
          w-full
          rounded-md
          py-2
          text-[11px]
          font-medium
          transition-all
          duration-200
          ${
            isAdded
              ? "cursor-not-allowed bg-slate-100 text-slate-400"
              : "brand-gradient text-white shadow-sm hover:opacity-90"
          }
        `}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;