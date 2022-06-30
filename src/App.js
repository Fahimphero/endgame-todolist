import logo from './logo.svg';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Calender from './Pages/Calender/Calender';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
