import { Route, Routes } from 'react-router-dom';
import './App.css';
import AfterLogin from './pages/AfterLogin/AfterLogin';
import Home from './pages/Home/Home';
import Login from "./pages/login/Login";
import Navigation from './pages/shared/Navigation/Navigation';
import SignUp from './pages/Signup/SignUp';

function App() {
  return (
    <div className='' >
      {/* <Navigation></Navigation> */}
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
