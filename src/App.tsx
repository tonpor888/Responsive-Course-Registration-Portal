import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import CourseRegistrationPage from './pages/CourseRegistrationPage';
import ClassSchedulePage from './pages/ClassSchedulePage';
export function App() {
  return <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course-registration" element={<CourseRegistrationPage />} />
          <Route path="/class-schedule" element={<ClassSchedulePage />} />
          <Route path="*" element={<div className="p-8 text-center">Page under construction</div>} />
        </Routes>
      </Layout>
    </Router>;
}