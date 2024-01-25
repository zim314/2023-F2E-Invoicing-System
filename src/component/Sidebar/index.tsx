import './index.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar__wrapper">
            <div className="sidebar">
                <button className="sidebar__closeButton" />
                <div className="sidebar__blockLine" />
                <Link to="/openballpt">
                    <h5>即時開票地圖</h5>
                </Link>
                <div className="sidebar__blockLine" />
                <Link to="/">
                    <h5>首頁</h5>
                </Link>
                <div className="sidebar__blockLine" />
                <h6>認識候選人</h6>
                <Link to="/candidateinfo/chuYu">
                    <p>01 喵楚魚</p>
                </Link>
                <Link to="/candidateinfo/yingWen">
                    <p>02 喵英文</p>
                </Link>
                <Link to="/candidateinfo/guoYu">
                    <p>03 汪國魚</p>
                </Link>
                <div className="sidebar__blockLine" />
            </div>
        </div>
    );
};

export default Sidebar;
