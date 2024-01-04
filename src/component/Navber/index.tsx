import './index.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <button className="navbar__menu">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    );
};

export default Navbar;
