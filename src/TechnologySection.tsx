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
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
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

        if (alreadyAdded) {
            toast.warning(`${technology.name} is already in your stack.`);
            return;
        }

        setSelectedTechnologies([
            ...selectedTechnologies,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    // Remove one technology
    const removeFromStack = (id: string) => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        setSelectedTechnologies(
            selectedTechnologies.filter(
                (technology) => technology.id !== id
            )
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
        <section className="mx-auto max-w-7xl px-6 py-20">

            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

                {/* Technologies */}
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">
                        Explore the Technologies
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>

                    {/* Loading State */}
                    {loading && (
                        <div className="flex min-h-[300px] items-center justify-center">
                            <div className="flex flex-col items-center gap-3">

                                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-pink-500"></div>

                                <p className="text-sm text-slate-500">
                                    Loading technologies...
                                </p>

                            </div>
                        </div>
                    )}

                    {/* Error State */}
                    {!loading && error && (
                        <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-6 text-center">
                            <p className="text-sm text-red-500">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Technology Cards */}
                    {!loading && !error && (
                        <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-20">

                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Your Stack
                        </h2>

                        <span className="text-sm text-slate-500">
                            {selectedTechnologies.length} Technology
                            {selectedTechnologies.length !== 1
                                ? "ies"
                                : "y"} Selected
                        </span>
                    </div>

                    {/* Empty Stack */}
                    {selectedTechnologies.length === 0 ? (
                        <p className="mt-8 text-center text-sm text-slate-400">
                            Your stack is empty. Add technologies to build your stack.
                        </p>
                    ) : (
                        <>
                            {/* Selected Technologies */}
                            <div className="mt-6 space-y-3">
                                {selectedTechnologies.map((technology) => (
                                    <div
                                        key={technology.id}
                                        className="flex items-center gap-3 rounded-lg border border-slate-100 p-3"
                                    >
                                        <img
                                            src={technology.icon}
                                            alt={technology.name}
                                            className="h-8 w-8 object-contain"
                                        />

                                        <div className="min-w-0 flex-1">
                                            <p className="truncate text-sm font-medium text-slate-800">
                                                {technology.name}
                                            </p>

                                            <p className="text-xs text-slate-400">
                                                {technology.category}
                                            </p>
                                        </div>

                                        <button
                                            onClick={() =>
                                                removeFromStack(technology.id)
                                            }
                                            className="text-sm text-slate-400 transition-colors hover:text-red-500"
                                            aria-label={`Remove ${technology.name}`}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>

                            {/* Remove All */}
                            <button
                                onClick={removeAll}
                                className="mt-5 w-full rounded-lg border border-red-200 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50"
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