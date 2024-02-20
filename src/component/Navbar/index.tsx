import './index.scss';
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import BurgerButton from 'component/BurgerButton';
import useRWD from 'hook/useRWD';

interface Props {
    controlSidebar: React.MouseEventHandler;
}

const Navbar = ({ controlSidebar }: Props) => {
    const device = useRWD();

    return (
        <div className="navbar">
            <Link className="navbar__title" to="/">
                <img src={logo} alt="logo" />
                {device === 'PC' && <p>總統大選開票</p>}
            </Link>
            {device === 'PC' && (
                <div className="navbar__content">
                    <Link to="/openballpt">即時開票地圖</Link>
                    <Link to="/">首頁</Link>
                </div>
            )}
            {device !== 'PC' && <BurgerButton handleClick={controlSidebar} />}
        </div>
    );
};

export default Navbar;
