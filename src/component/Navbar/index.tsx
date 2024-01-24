import './index.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import BurgerButton from 'component/BurgerButton';
import useRWD from 'hook/useRWD';

const Navbar = () => {
    const device = useRWD();

    return (
        <div className="navbar">
            <Link className="navbar__title" to="/">
                <img src={logo} alt="logo" />
                {device !== 'mobile' && <p>總統大選開票</p>}
            </Link>
            {device !== 'mobile' && (
                <div className="navbar__content">
                    <Link to="/openballpt">即時開票地圖</Link>
                    <Link to="/">首頁</Link>
                </div>
            )}
            {device === 'mobile' && <BurgerButton />}
        </div>
    );
};

export default Navbar;
