import './App.css';
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoteState from './context/notes/Notestate';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {



  return (
    <>
      <NoteState>
        <div className="min-h-screen bg-slate-50 text-slate-900">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home  />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </BrowserRouter>
        </div>
      </NoteState>
    </>
  );
}

export default App;
