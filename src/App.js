import './App.css';
import Layout from './Layout'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './sections/Home';
import Teaching from './sections/Teaching';
import Research from './sections/Research';
import Projects from './sections/Projects';
import Other from './sections/Other';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="projects" element={<Projects />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
