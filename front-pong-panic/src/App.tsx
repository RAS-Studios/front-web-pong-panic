import { Introduction } from '@/components/Introduction';
import { Features } from '@/components/Features';
import { GameplayVideo } from '@/components/GameplayVideo';
import { Gallery } from '@/components/Gallery';
import { Stats } from '@/components/Stats';
import { Team } from '@/components/Team';
import { Download } from '@/components/Download';
import { Login } from '@/components/Login';
import { Register } from '@/components/Register';
import { Profile } from '@/components/Profile';
import { AuthSuccess } from '@/components/AuthSuccess';
import { Leaderboard } from '@/components/Leaderboard';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function Home() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/auth-success" element={<AuthSuccess />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
    </Routes>
  );
}