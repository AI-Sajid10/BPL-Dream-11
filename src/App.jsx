
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';
import { useState } from 'react';

const playersPromise = fetch("/data.json")
.then((res) => res.json());

function App() {

  const [Coin, setCoin] = useState(500000);

  return (
    <>
      <Navbar Coin={Coin}></Navbar>
      <Banner></Banner>
      <Players playersPromise={playersPromise} setCoin={setCoin} Coin={Coin}></Players>
    </>
  )
}

export default App
