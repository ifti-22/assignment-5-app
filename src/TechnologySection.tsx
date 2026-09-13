import technologies from "./data/technologies.json";
import TechnologyCard from "./TechnologyCard";

const TechnologySection = () => {
    return (
        <section className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="text-3xl font-bold text-slate-800">
                Explore the Technologies
            </h2>

            <p className="mt-2 text-sm text-slate-500">
                Pick one technology per category to build your ideal stack.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {technologies.map((technology) => (
                    <TechnologyCard
                        key={technology.id}
                        technology={technology}
                    />
                ))}
            </div>
        </section>
    );
};

export default TechnologySection;