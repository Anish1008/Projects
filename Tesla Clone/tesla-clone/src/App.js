import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/header';
import Section from './components/section'
function App() {
  return (
    <div className="App">
      <Header/>
      <Section title="Model S"
              description="Order online for Touchless Delivery"
               image="model-s.jpg"
               leftbtntxt="Custom Order"
               rightbtntxt="Existing Order"
               />
      <Section title="Model Y" 
              description="Order online for Touchless Delivery"
              image="model-y.jpg"
              leftbtntxt="Custom Order"
               rightbtntxt="Existing Order"
              />
      <Section title="Model 3" 
              description="Order online for Touchless Delivery"
              image="model-3.jpg"
              leftbtntxt="Custom Order"
               rightbtntxt="Existing Order"
              />
      <Section title="Model X" 
              description="Order online for Touchless Delivery"
              image="model-x.jpg"
              leftbtntxt="Custom Order"
               rightbtntxt="Existing Order"
              />
      <Section title="Solar Panels" 
              description="Lowest cose solar panels in America"
              image="solar-panel.jpg"
              leftbtntxt="Order Now"
               rightbtntxt="Learn More"
              />
      <Section title="Solar Roofs" 
              description="Produce clean energy from your roof"
              image="solar-roof.jpg"
              leftbtntxt="Order Now"
               rightbtntxt="Learn More"
              />
      <Section title="Accessories" 
              description=""
              image="accessories.jpg"
              leftbtntxt="Shop Now"
               rightbtntxt=""
              />
    </div>
  );
}

export default App;
