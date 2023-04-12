import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Card from '../components/Card';
import data from '../data';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {data.map((data) => (
          <Card key={data.id} card={data} />
        ))}
      </section>
    </div>
  );
}
