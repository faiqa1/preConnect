import './App.css';
import Home from './Components/Pages/HomePage/Home';
import Location from './Components/Pages/HomePage/Location';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
       
        <Routes>
        <Route index element={<Home/>}/>
         
          <Route path='/loc' element={<Location/>}/>
  </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
