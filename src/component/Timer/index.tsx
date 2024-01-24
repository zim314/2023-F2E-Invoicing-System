import './index.scss';
import timeIcon from '../../assets/images/footer_timeIcon.svg';

const Timer = () => {
    return (
        <div className="timer alingCenter">
            <img className="timer__icon" src={timeIcon} alt="倒數圖示" />
            <div>2024開票日倒數</div>
            <div className="timer__countdown">87</div>
            <div>天</div>
        </div>
    );
};

export default Timer;
