import './App.css';
import {BrowserRouter,Routes, Route } from 'react-router-dom'; //Switch fue reemplazado por Routes

// importo los Components
import LandingPage from './components/LandingPage.jsx'
import Home from './components/Home.jsx';
import DogCreate from './components/DogCreate';

const App = () => {
  return (
    // <BrowserRouter>
    <div className="App">
      {/* <h1>Dogs Application</h1>
      <h2>By Marcos Dacunda</h2>  */}
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route path='/dogs' element={<DogCreate/>}/>
        {/* <Route exact path='/home/:id' element={<Detail/>}/> */}
      </Routes>      
    </div>
    //  </BrowserRouter>
  );
}

export default App;