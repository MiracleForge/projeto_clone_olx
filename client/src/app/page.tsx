import Image from "next/image";
import ProprietyCards from '@/app/components/cards/categoryCards/ProprietyCards';
export default function Home() {
  return (
    <main className="h-screen p-3"><ProprietyCards/></main>
  );
}
