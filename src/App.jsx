import './App.css';
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/project' element={<Project />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
