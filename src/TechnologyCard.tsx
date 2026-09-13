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

type TechCardProps = {
  technology: Technology;
};

const TechCard = ({ technology }: TechCardProps) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <img
        src={technology.icon}
        alt={technology.name}
        className="h-8 w-8 object-contain"
      />

      <h3 className="mt-4 text-lg font-semibold text-slate-800">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
        <span>{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span>★ {technology.rating}</span>
      </div>

      <button className="mt-4 w-full rounded-md bg-slate-900 py-2.5 text-sm font-medium text-white">
        Add to Stack
      </button>
    </div>
  );
};

export default TechCard;