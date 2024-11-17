import ProprietyCards from '@/app/components/cards/categoryCards/ProprietyCards';
import HomeHero from "./components/heros/homeHero/HomeHero";
import CategoryCards from "./components/cards/categoryCards/CategoryCards";
import { WrapperCards } from './layout/housesWrapper/WrapperCards';

export default function Home() {
    return (
        <main className="min-h-screen space-y-20">
            <HomeHero
                headingH1='Descubra e Compartilhe'
                subHeading='Sua chance de conectar e negociar'
                description='Encontre novos usos para seus itens e junte-se a uma comunidade vibrante de trocas e oportunidades.'
                showButtons={true}
            />

             <WrapperCards/>

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
