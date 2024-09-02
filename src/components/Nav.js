import { Routes, Route, Link } from "react-router-dom"
function Nav(){
    return (
        <nav>
            <ul>
                <li><Link to="/" className="nav-item">Homepage</Link></li>
                <li><Link to="/booking" className="nav-item">Booking table</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;