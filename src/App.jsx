import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section>
        <Card />
      </section>
    </div>
  );
}
