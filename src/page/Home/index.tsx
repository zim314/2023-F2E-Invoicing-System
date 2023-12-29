import './index.scss';
import useRWD from '../../hook/useRWD';
import Footer from '../../component/Footer';
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

const Home = () => {
    const device = useRWD();

    return (
        <div className="home">
            <div className="home__container">
                <div className="home__LOGO">
                    <img src={logo} alt="LOGO" />
                    <p>總統大選開票</p>
                </div>
                <div className="home__content">
                    {(device === 'mobile' || device === 'tablet') && (
                        <>
                            <CandidateCard
                                click={() => console.log('1')}
                                condidatePicture={chuYuPicture}
                                condidateNumber={chuYuNumber}
                            />
                            <CandidateCard
                                click={() => console.log('2')}
                                shiftRight={'30px'}
                                condidatePicture={yingWenPicture}
                                condidateNumber={yingWenNumber}
                            />
                            <CandidateCard
                                click={() => console.log('3')}
                                shiftRight={'10px'}
                                condidatePicture={guoYuPicture}
                                condidateNumber={guoYuNumber}
                            />
                        </>
                    )}
                    {device === 'PC' && (
                        <>
                            <DisplayFrame
                                click={() => console.log('1')}
                                shiftLeft={'78px'}
                                condidatePicture={chuYuFrame}
                            />
                            <DisplayFrame
                                click={() => console.log('2')}
                                condidatePicture={yingWenFrame}
                            />
                            <DisplayFrame
                                click={() => console.log('3')}
                                shiftRight={'84px'}
                                condidatePicture={guoYuFrame}
                            />
                            <button
                                className="alingCenter home__button"
                                onClick={() => console.log('4')}
                            >
                                <img src={PCButton} alt="" />
                            </button>
                        </>
                    )}
                </div>
                {(device === 'mobile' || device === 'tablet') && (
                    <button className="alingCenter home__button">
                        <img src={taiwanIcon} alt="icon" />
                        <p>開票地圖 ➞</p>
                    </button>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Home;
