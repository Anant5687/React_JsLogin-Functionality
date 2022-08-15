import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
