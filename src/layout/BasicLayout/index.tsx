import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';
import { Outlet } from 'react-router-dom';
import useRWD from '../../hook/useRWD';
import { useState } from 'react';
import './index.scss';

const BasicLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const device = useRWD();

    const handleSidebar = () => setShowSidebar(!showSidebar);
    const handleCloseSidebar = () => setShowSidebar(false);

    return (
        <>
            {device !== 'PC' && (
                <Sidebar show={showSidebar} closeSidebar={handleCloseSidebar} />
            )}
            <Navbar controlSidebar={handleSidebar} />
            <div className="basicLayout__container">
                <Outlet />
            </div>
            {device === 'PC' && <Footer />}
        </>
    );
};

export default BasicLayout;
