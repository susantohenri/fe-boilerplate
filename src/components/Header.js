import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="main-header navbar navbar-expand navbar-light navbar-white">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <h2><span className="brand-text font-weight-light"><b>Prototype</b>App</span></h2>
                </Link>
                <Link to="logout">Logout</Link>
            </div>
        </nav>
    )
}