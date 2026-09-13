import { useState } from "react";
import technologies from "./data/technologies.json";
import TechnologyCard from "./TechnologyCard";

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
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

    const addToStack = (technology: Technology) => {
        const alreadyAdded = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            alert(`${technology.name} is already in your stack.`);
            return;
        }

        setSelectedTechnologies([...selectedTechnologies, technology]);
    };

    const removeFromStack = (id: string) => {
        setSelectedTechnologies(
            selectedTechnologies.filter((technology) => technology.id !== id)
        );
    };

    return (
        <section className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
                <div>
                    <h2 className="text-3xl font-bold text-slate-800">
                        Explore the Technologies
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Pick one technology per category to build your ideal stack.
                    </p>

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
                </div>

                <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-20">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Your Stack
                        </h2>

                        <span className="text-sm text-slate-500">
                            {selectedTechnologies.length} Technology
                            {selectedTechnologies.length !== 1 ? "ies" : "y"} Selected
                        </span>
                    </div>

                    {selectedTechnologies.length === 0 ? (
                        <p className="mt-8 text-center text-sm text-slate-400">
                            Your stack is empty. Add technologies to build your stack.
                        </p>
                    ) : (
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
                                        onClick={() => removeFromStack(technology.id)}
                                        className="text-sm text-slate-400 transition-colors hover:text-red-500"
                                        aria-label={`Remove ${technology.name}`}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </aside>
            </div>
        </section>
    );
};

export default TechnologySection;