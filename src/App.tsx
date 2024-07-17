import './App.css';
import Layout from './Layout.tsx'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './sections/Home.tsx';
import Teaching from './sections/Teaching.tsx';
import Research from './sections/Research.tsx';
import Projects from './sections/Projects.tsx';
import Other from './sections/Other.tsx';
import React from 'react';

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
