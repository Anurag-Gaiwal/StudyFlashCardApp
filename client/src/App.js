import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home'
import AddCard from './AddCard'
import UpdateCard from './UpdateCard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/addcard' element={<AddCard/>}></Route>
          <Route path='/update' element={<UpdateCard/>}></Route>
        </Routes>
      </BrowserRouter>
      <center>
        <footer className='mt-8'>Made with ❤️ By Anurag Gaiwal</footer>

      </center>
    </>
  );
}

export default App;
