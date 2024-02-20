import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';
import { Outlet } from 'react-router-dom';
import useRWD from '../../hook/useRWD';
import './index.scss';

const BasicLayout = () => {
    const device = useRWD();

    return (
        <>
            <Sidebar />
            <Navbar />
            <div className="basicLayout__container">
                <Outlet />
            </div>
            {device === 'PC' && <Footer />}
        </>
    );
};

export default BasicLayout;
