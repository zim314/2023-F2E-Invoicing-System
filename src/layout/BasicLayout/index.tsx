import Navbar from '../../component/Navbar';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';
import { Outlet } from 'react-router-dom';
import useRWD from '../../hook/useRWD';
import { useState, createContext } from 'react';
import ExplainPopup from '../../component/ExplainPopup';
import './index.scss';

export const explainPopupContext = createContext(() => {});

const BasicLayout = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showExplainPopup, setShowExplainPopup] = useState(false);

    const device = useRWD();

    const handleSidebar = () => setShowSidebar(!showSidebar);
    const handleCloseSidebar = () => setShowSidebar(false);
    const handleCloseExplainPopup = () => setShowExplainPopup(false);

    return (
        <>
            {showExplainPopup && (
                <ExplainPopup closeExplainPopup={handleCloseExplainPopup} />
            )}
            {device !== 'PC' && (
                <Sidebar show={showSidebar} closeSidebar={handleCloseSidebar} />
            )}
            <Navbar controlSidebar={handleSidebar} />
            <div className="basicLayout__container">
                <explainPopupContext.Provider
                    value={() => setShowExplainPopup(true)}
                >
                    <Outlet />
                </explainPopupContext.Provider>
            </div>
            {device === 'PC' && <Footer />}
        </>
    );
};

export default BasicLayout;
