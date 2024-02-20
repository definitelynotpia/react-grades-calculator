import "./App.css";
import { Routes, Route } from 'react-router-dom';

import StudentNavbar from "./components/StudentNavbar";
import Grades from "./components/Grades";
import Login from "./components/Login";

export default function App() {
  return (
    <div className="App">
      <StudentNavbar />
    </div>
  );
}