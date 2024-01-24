import './index.scss';
import useRWD from '../../hook/useRWD';
import Timer from '../../component/Timer';
import logo from '../../assets/images/logo.svg';
import CandidateCard from '../../component/CandidateCard';
import chuYuPicture from '../../assets/images/chuYu_fullBody.png';
import chuYuNumber from '../../assets/images/chuYu_number.png';
import yingWenPicture from '../../assets/images/yingWen_fullBody.png';
import yingWenNumber from '../../assets/images/yingWen_number.png';
import guoYuPicture from '../../assets/images/guoYu_fullBody.png';
import guoYuNumber from '../../assets/images/guoYu_number.png';
import taiwanIcon from '../../assets/images/button_taiwanIcon.svg';
import DisplayFrame from 'component/DisplayFrame';
import chuYuFrame from '../../assets/images/chuYu_frame.png';
import yingWenFrame from '../../assets/images/yingWen_frame.png';
import guoYuFrame from '../../assets/images/guoYu_frame.png';
import PCButton from '../../assets/images/button_home_PC.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const device = useRWD();
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__LOGO">
                    <img src={logo} alt="LOGO" />
                    {(device === 'mobile' || device === 'tablet') && (
                        <p>總統大選開票</p>
                    )}
                </div>
                <div className="home__content">
                    {(device === 'mobile' || device === 'tablet') && (
                        <>
                            <CandidateCard
                                click={() => navigate('candidateinfo/chuYu')}
                                condidatePicture={chuYuPicture}
                                condidateNumber={chuYuNumber}
                            />
                            <CandidateCard
                                click={() => navigate('candidateinfo/yingWen')}
                                shiftRight={'30px'}
                                condidatePicture={yingWenPicture}
                                condidateNumber={yingWenNumber}
                            />
                            <CandidateCard
                                click={() => navigate('candidateinfo/guoYu')}
                                shiftRight={'10px'}
                                condidatePicture={guoYuPicture}
                                condidateNumber={guoYuNumber}
                            />
                        </>
                    )}
                    {device === 'PC' && (
                        <>
                            <DisplayFrame
                                click={() => navigate('candidateinfo/chuYu')}
                                shiftLeft={'78px'}
                                condidatePicture={chuYuFrame}
                            />
                            <DisplayFrame
                                click={() => navigate('candidateinfo/yingWen')}
                                condidatePicture={yingWenFrame}
                            />
                            <DisplayFrame
                                click={() => navigate('candidateinfo/guoYu')}
                                shiftRight={'84px'}
                                condidatePicture={guoYuFrame}
                            />
                            <button
                                className="alingCenter home__button"
                                onClick={() => navigate('openballpt')}
                            >
                                <img src={PCButton} alt="" />
                            </button>
                        </>
                    )}
                </div>
                {(device === 'mobile' || device === 'tablet') && (
                    <button
                        onClick={() => navigate('openballpt')}
                        className="alingCenter home__button"
                    >
                        <img src={taiwanIcon} alt="icon" />
                        <p>開票地圖 ➞</p>
                    </button>
                )}
            </div>
            <Timer />
        </div>
    );
};

export default Home;
