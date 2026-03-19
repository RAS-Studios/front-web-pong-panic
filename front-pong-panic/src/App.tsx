import { Introduction } from '@/components/Introduction';
import { Features } from '@/components/Features';
import { GameplayVideo } from '@/components/GameplayVideo';
import { Gallery } from '@/components/Gallery';
import { Stats } from '@/components/Stats';
import { Team } from '@/components/Team';
import { Download } from '@/components/Download';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-['Poppins']">
      <Introduction />
      <Features />
      <GameplayVideo />
      <Gallery />
      <Stats />
      <Team />
      <Download />
    </div>
  );
}
