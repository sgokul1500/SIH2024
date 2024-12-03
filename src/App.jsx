import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Image from '../assets/images/...'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/notifications" element={<NotifPage />} />
      </Routes>
    </Router>
  );
}