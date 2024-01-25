import Navbar from '../component/Navbar';
import Sidebar from '../component/Sidebar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';
import useRWD from '../hook/useRWD';

const BasicLayout = () => {
    const device = useRWD();

    return (
        <>
            <Sidebar />
            <Navbar />
            <Outlet />
            {device === 'PC' && <Footer />}
        </>
    );
};

export default BasicLayout;
