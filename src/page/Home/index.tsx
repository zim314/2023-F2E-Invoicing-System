import './index.scss';
import Footer from '../../component/Footer';
import logo from '../../assets/images/logo.svg';
import CandidateCard from '../../component/CandidateCard';
import chuYuFullBody from '../../assets/images/chuYu_fullBody.png';
import chuYuNumberImg from '../../assets/images/chuYu_numberImage.png';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__LOGO">
                    <img src={logo} alt="LOGO" />
                    <p>總統大選開票</p>
                </div>
                <div>
                    <CandidateCard
                        condidatePicture={chuYuFullBody}
                        condidateNumber={chuYuNumberImg}
                    />
                </div>
                <button>開票地圖</button>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
