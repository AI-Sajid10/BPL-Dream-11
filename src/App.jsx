
import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Players from './components/Players/Players';

const playersPromise = fetch("/data.json")
.then((res) => res.json());

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Players playersPromise={playersPromise}></Players>
    </>
  )
}

export default App
