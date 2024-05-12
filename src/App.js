import './App.css';
import Layout from './Layout'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './sections/Home';
import Teaching from './sections/Teaching';
import Research from './sections/Research';
import Projects from './sections/Projects';
import Other from './sections/Other';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="research" element={<Research />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="projects" element={<Projects />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function routeHandler(id) {
  const selectedClassName = "selected";
  const selectedElements = document.getElementsByClassName(selectedClassName);

  for (const o of selectedElements) {
    o.classList.remove(selectedClassName);
  }
  const elementToSelect = document.getElementById(id);

  if (elementToSelect) {
    elementToSelect.classList.add(selectedClassName);
  }
  
  return;
}

export default App;
