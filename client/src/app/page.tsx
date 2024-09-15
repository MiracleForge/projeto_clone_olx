import Image from "next/image";
import ProprietyCards from '@/app/components/cards/categoryCards/ProprietyCards';
import HomeHero from "./components/heros/homeHero/HomeHero";

export default function Home() {
  return (
    <main className="min-h-screen space-y-20">

      <HomeHero/>
      <ProprietyCards />
    </main>
  );
}
