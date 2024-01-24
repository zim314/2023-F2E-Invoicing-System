import Navbar from '../component/Navbar';
import { Outlet } from 'react-router-dom';
import useRWD from '../hook/useRWD';
import Footer from '../component/Footer';

const BasicLayout = () => {
    const device = useRWD();

    return (
        <>
            <Navbar />
            <Outlet />
            {device === 'PC' && <Footer />}
        </>
    );
};

export default BasicLayout;
