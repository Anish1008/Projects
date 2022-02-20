import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import ProductListing from './components/ProductListing'
import ProductComponents from './components/ProductComponents'
import ProductDetails from './components/ProductDetails'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
      <Routes>
        <Route exact path="/" element={<ProductListing/>} />
        <Route exact path="/product/:productId" element={<ProductDetails/>} />
      </Routes>
      </Router>
     
     {/* <ProductComponents/> */}
     
    </div>
  );
}

export default App;
