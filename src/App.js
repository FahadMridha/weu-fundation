import { Route, Routes } from 'react-router-dom';
import './App.css';
import AfterLogin from './pages/AfterLogin/AfterLogin';
import Home from './pages/Home/Home';
import Login from "./pages/login/Login";
import SignUp from './pages/Signup/SignUp';
// import BgVideo from './img/bg-1.mp4'
import BgVideo from './img/Sea - 33194.mp4'
import Navigation from './pages/shared/Navigation/Navigation';

import Scene from './pages/shared/bgAnimation/Scene';
import { Canvas, useFrame } from '@react-three/fiber'
import Cylinder3d from './pages/shared/bgAnimation/Cylinder3d';

function App() {
  return (
    <div className='' >
      <Navigation></Navigation>


      {/* <div className='overlay'>
        <video autoPlay loop muted className="bg-vid">
          <source src={BgVideo} type="video/mp4" />
        </video>

      </div> */}

      <section className='bg-gradient-to-r from-violet-500 to-fuchsia-500 overlay'>

        {/* Canvas 2 */}
        <Canvas>
          <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={0.5} />
          <Scene />
        </Canvas>


      </section>

      {/* <div className='h-[60vh]'>

        <Canvas camera={{ position: [0, 0, 5] }}>
          <Scene />
        </Canvas>
      </div> */}

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
