import { Route, Routes } from 'react-router-dom';
import './App.css';
import AfterLogin from './pages/AfterLogin/AfterLogin';
import Home from './pages/Home/Home';
import Login from "./pages/login/Login";
import SignUp from './pages/Signup/SignUp';
// import BgVideo from './img/bg-1.mp4'
import BgVideo from './img/Sea - 33194.mp4'
import Navigation from './pages/shared/Navigation/Navigation';

function App() {
  return (
    <div className='' >
      <Navigation></Navigation>


      <div className='overlay'>
        <video autoPlay loop muted className="bg-vid">
          <source src={BgVideo} type="video/mp4" />
        </video>
      </div>


      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/fqa' element={<AfterLogin />}></Route>
      </Routes>

    </div>
  )
}

export default App;
