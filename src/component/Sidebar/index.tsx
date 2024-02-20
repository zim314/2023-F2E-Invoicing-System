import './index.scss';
import { useNavigate } from 'react-router-dom';
import useOnClickOutside from '../../hook/useOnClickOutside';
import React, { useRef } from 'react';

interface Props {
    show: Boolean;
    closeSidebar: () => void;
}

const Sidebar = ({ show, closeSidebar }: Props) => {
    const navigate = useNavigate();
    const sidebarRef = useRef(null!);
    const handleJumpPage = (e: React.MouseEvent<HTMLButtonElement>) => {
        closeSidebar();
        navigate(e.currentTarget.value);
    };

    useOnClickOutside(sidebarRef, () => closeSidebar());

    return (
        <div
            style={{
                zIndex: show ? '3' : '-1',
                backgroundColor: `rgba(5, 11, 27,${show ? '0.60' : '0'})`,
            }}
            className="sidebar__wrapper"
        >
            <div
                style={{ right: show ? '0px' : '-269px' }}
                className="sidebar"
                ref={sidebarRef}
            >
                <button
                    onClick={closeSidebar}
                    className="sidebar__closeButton"
                />
                <div className="sidebar__blockLine" />
                <button onClick={handleJumpPage} value="/openballpt">
                    <h5>即時開票地圖</h5>
                </button>
                <div className="sidebar__blockLine" />
                <button onClick={handleJumpPage} value="/">
                    <h5>首頁</h5>
                </button>
                <div className="sidebar__blockLine" />
                <h6>認識候選人</h6>
                <button onClick={handleJumpPage} value="/candidateinfo/chuYu">
                    <h5>01 喵楚魚</h5>
                </button>
                <button onClick={handleJumpPage} value="/candidateinfo/yingWen">
                    <h5>02 喵英文</h5>
                </button>
                <button onClick={handleJumpPage} value="/candidateinfo/guoYu">
                    <h5>03 汪國魚</h5>
                </button>
                <div className="sidebar__blockLine" />
            </div>
        </div>
    );
};

export default Sidebar;
