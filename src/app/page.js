'use client'


import { Slider } from "./components/slider";

import slides from './mock.json';

// css
import './style.css'

export default function Home() {
  
  return (
    <main>
      <Slider slides={slides} />
    </main>
  );
}
