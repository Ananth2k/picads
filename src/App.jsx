import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import { Routes ,Route} from 'react-router-dom';
import Reports from './pages/Reports';
import Help from './pages/Help';
import Settings from './pages/Settings';
import Feedback from './pages/FeedBack';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reports' element={<Reports/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/feedback' element={<Feedback/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
  )
}

export default App