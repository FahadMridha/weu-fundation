import './App.css';
import AfterLogin from './pages/AfterLogin/AfterLogin';
import Login from "./pages/login/Login";

function App() {
  return (
    <div className='bg-black' >
      <Login />
      <AfterLogin></AfterLogin>
    </div>
  )
}

export default App;
