import '../App.css'
import logo from '../assets/nav-logo.svg'

export default function NavBar() {
    return (
        <div className="nav">
            <img src={logo} alt="logo" className="nav-logo" />
            <h1 className="nav-heading">my travel journal</h1>
        </div>
    );
}