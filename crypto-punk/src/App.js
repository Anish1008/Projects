import React from 'react';
import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
function App() {
  return (
      <div className='app'>
      <Header />
      <CollectionCard id="1" image="https://ipfs.thirdweb.com/ipfs/QmZ5fD3UTRh8ALZCpMdypHkhMQSXyi4yyCz3Ea19kPmtXg/0.jpg" name="Banana Punk" traits={[{'value':10}]}/>
      </div>
  );
}

export default App;
