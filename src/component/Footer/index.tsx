import './index.scss';
import timeIcon from '../../assets/images/footer_timeIcon.svg';

const footer = () => {
    return (
        <div className="footer alingCenter">
            <img className="footer__icon" src={timeIcon} alt="倒數圖示" />
            <div>2024開票日倒數</div>
            <div className="footer__countdown">87</div>
            <div>天</div>
        </div>
    );
};

export default footer;
