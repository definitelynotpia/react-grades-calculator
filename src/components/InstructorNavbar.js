import { Routes, Route, NavLink } from 'react-router-dom';
import eduportal from '../eduportal.svg';
import '../App.css';

export default function StudentNavbar() {
    return <>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    <img src={eduportal} alt="EduPortal" width="50" className="d-inline-block align-text-top" id="fa-school" />
                    EduPortal
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/courses">Subjects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/grades">Grades</NavLink>
                        </li>
                    </ul>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" id="searchButton" type="submit">Search</button>
                    </form>

                    <button className="btn btn-info ms-5" id="loginButton" type="button"><b>Login</b></button>
                </div>
            </div>
        </nav>
    </>
}