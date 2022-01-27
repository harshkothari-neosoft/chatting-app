import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import Addpost from './components/Addpost';

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/addpost" element={<Addpost/>}/>
          <Route path="*" element={<img width="100%" height="657px" src="./images/notfound.gif" alt="not found"/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
