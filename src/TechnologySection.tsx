import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import { toast } from "react-toastify";

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

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState<
    Technology[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch technologies
  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.BASE_URL}data/technologies.json`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch technologies");
        }

        const data: Technology[] = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load technologies.");
        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    fetchTechnologies();
  }, []);

  // Add technology to stack
  const addToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    // Duplicate technology
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    // Add technology
    setSelectedTechnologies((prev) => [...prev, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove one technology
  const removeFromStack = (id: string) => {
    const technology = selectedTechnologies.find(
      (item) => item.id === id
    );

    setSelectedTechnologies((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.info(`${technology.name} removed from your stack.`);
    }
  };

  // Remove all technologies
  const removeAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.warning("Your stack is already empty.");
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  return (
    <section
      id="technologies"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="mb-7">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Explore the{" "}
          <span className="brand-gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Pick technologies to build your ideal stack.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_250px]">
        {/* Technologies */}
        <div>
          {/* Loading State */}
          {loading && (
            <div className="flex min-h-80 items-center justify-center rounded-xl border border-slate-200 bg-white">
              <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500" />

                <p className="text-sm text-slate-500">
                  Loading technologies...
                </p>
              </div>
            </div>
          )}

          {/* Error State */}
          {!loading && error && (
            <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-center">
              <p className="text-sm text-red-500">
                {error}
              </p>
            </div>
          )}

          {/* Technology Cards */}
          {!loading && !error && (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={selectedTechnologies.some(
                    (item) => item.id === technology.id
                  )}
                  onAdd={addToStack}
                />
              ))}
            </div>
          )}
        </div>

        {/* Your Stack */}
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24">
          {/* Stack Header */}
          <div>
            <h3 className="text-base font-semibold text-slate-900">
              Your Stack
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              {selectedTechnologies.length} Technology
              {selectedTechnologies.length !== 1
                ? "ies"
                : "y"}{" "}
              Selected
            </p>
          </div>

          {/* Empty Stack */}
          {selectedTechnologies.length === 0 ? (
            <div className="py-8 text-center">
              <p className="text-xs leading-5 text-slate-400">
                Your stack is empty.
                <br />
                Add technologies to build your stack.
              </p>
            </div>
          ) : (
            <>
              {/* Selected Technologies */}
              <div className="mt-4 space-y-2">
                {selectedTechnologies.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-2"
                  >
                    {/* Icon */}
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-7 w-7 shrink-0 object-contain"
                    />

                    {/* Name & Category */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium text-slate-800">
                        {technology.name}
                      </p>

                      <p className="truncate text-[10px] text-slate-400">
                        {technology.category}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      type="button"
                      onClick={() =>
                        removeFromStack(technology.id)
                      }
                      className="shrink-0 text-sm text-slate-400 transition-colors hover:text-red-500"
                      aria-label={`Remove ${technology.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>

              {/* Remove All */}
              <button
                type="button"
                onClick={removeAll}
                className="mt-5 w-full rounded-lg border border-red-200 py-2 text-xs font-medium text-red-500 transition-colors hover:bg-red-50"
              >
                Remove All
              </button>
            </>
          )}
        </aside>
      </div>
    </section>
  );
};

export default TechnologySection;