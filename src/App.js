import {useState} from 'React'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Login from './components/Login'


function App() {
  const [user, setUser] = useState(null);

  if(user){
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    );
  }else{
    return (
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }
  
}

export default App;
