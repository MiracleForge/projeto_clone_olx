import ProprietyCards from '@/app/components/cards/categoryCards/ProprietyCards';
import HomeHero from "./components/heros/homeHero/HomeHero";
import CategoryCards from "./components/cards/categoryCards/CategoryCards";

export default function Home() {
    return (
        <main className="min-h-screen space-y-20">
            <HomeHero
                headingH1='Descubra e Compartilhe'
                subHeading='Sua chance de conectar e negociar'
                description='Encontre novos usos para seus itens e junte-se a uma comunidade vibrante de trocas e oportunidades.'
                showButtons={true}
            />

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full bodyPadding">
                <ProprietyCards />
                <ProprietyCards />
                <ProprietyCards />
                <ProprietyCards />
            </section>

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
