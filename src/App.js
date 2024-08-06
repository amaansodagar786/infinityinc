import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import About from './Componants/AboutUs/About';
import Footer from './Componants/Footer/Footer';
import Gototop from './Componants/Gototop/Gototop';

function App() {
  return (
    <>
    <BrowserRouter>
  <Gototop/>
    <Header />

    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/aboutus" element={<About/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
