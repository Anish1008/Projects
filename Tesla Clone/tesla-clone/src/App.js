import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
// import styled from 'styled-components';
import './App.css';
import Header from './components/header';
import Section from './components/section'
function App() {
  return (
    <div className="App">
      <Header/>
      <Section title="Model S"
              description="Order online for Touchless Delivery"
               image="model-s.jpg"/>
      <Section title="Model Y" 
              description="Order online for Touchless Delivery"
              image="model-y.jpg"/>
      <Section title="Model 3" 
              description="Order online for Touchless Delivery"
              image="model-3.jpg"/>
      <Section title="Model X" 
              description="Order online for Touchless Delivery"
              image="model-x.jpg"/>
      <Section title="Solar Panels" 
              description="Lowest cose solar panels in America"
              image="solar-panel.jpg"/>
      <Section title="Solar Roofs" 
              description="Produce clean energy from your roof"
              image="solar-roof.jpg"/>
      <Section title="Accessories" 
              description=""
              image="accessories.jpg"/>
    </div>
  );
}

export default App;
