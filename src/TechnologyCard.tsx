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
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-medium text-pink-500">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-slate-800">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-4">
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
        <span>{technology.difficulty}</span>
        <span>★ {technology.rating}</span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-md py-2.5 text-sm font-medium transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;