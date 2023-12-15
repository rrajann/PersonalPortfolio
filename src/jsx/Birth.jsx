import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMePage from './AboutMePage';
import App from './App';
import ProjectPage from './ProjectPage';

export default function Birth() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App></App>} />
        <Route path="/project-page" element={<ProjectPage></ProjectPage>} />
        <Route path="/about-me" element={<AboutMePage></AboutMePage>}/>
      </Routes>
    </Router>
  )
}