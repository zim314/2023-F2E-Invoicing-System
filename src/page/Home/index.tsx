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
                    {device === 'mobile' && (
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
                </div>
                {device === 'mobile' && (
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
