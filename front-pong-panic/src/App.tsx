import { Introduction } from '@/components/Introduction';
import { Features } from '@/components/Features';
import { GameplayVideo } from '@/components/GameplayVideo';
import { Gallery } from '@/components/Gallery';
import { Stats } from '@/components/Stats';
import { Team } from '@/components/Team';
import { Download } from '@/components/Download';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    document.title = 'Pong Panic VR - The Ultimate VR Ping-Pong Experience';
  }, []);

  return (
    <div className="app">
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