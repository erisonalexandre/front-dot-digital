import React from 'react'
import { Home } from './Components/Home'
import './App.css';
import { Carousel } from './Components/Carousel';
import { About } from './Components/About';
import { Accordion } from './Components/Accordion';
import { Form } from './Components/Form';
import { Footer } from './Components/Footer';

function App() {
  return (
    <main>
      <Home />
      <Carousel />
      <About />
      <Accordion />
      <Form />
      <Footer />
    </main>
  );
}

export default App;
