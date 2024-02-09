import "./App.css";
import Grades from "./components/Grades";
import Login from "./components/Login";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/grades-calc" element={<Grades />} />
        </Routes>
      </header>
    </div>
  );
}