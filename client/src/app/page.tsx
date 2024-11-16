import ProprietyCards from '@/app/components/cards/categoryCards/ProprietyCards';
import HomeHero from "./components/heros/homeHero/HomeHero";
import CategoryCards from "./components/cards/categoryCards/CategoryCards";

export default function Home() {
    return (
        <main className="min-h-screen space-y-20">
            <HomeHero />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bodyPadding">
                <ProprietyCards />
                <ProprietyCards />
                <ProprietyCards />
                <ProprietyCards />
            </div>

            <section aria-label="Categorias" className="flex flex-wrap gap-12 justify-center">
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />
                <CategoryCards />


            </section>
        </main>
    );
}
