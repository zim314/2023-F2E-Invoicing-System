import './index.scss';
import { useParams, Link } from 'react-router-dom';
import candidateData from './candidateData';

const CandidateInfo = () => {
    const { candidate } = useParams();

    const info = candidateData.filter(
        (data) => data.candidate === candidate
    )[0];

    const otherCandidate = candidateData.filter(
        (data) => data.candidate !== candidate
    );

    return (
        <div className="candidateInfo">
            <h6>中華民國第十五任總統暨副總統選舉 / {info.chineseName}</h6>
            <img
                className="candidateInfo__photo"
                src={info.fullBodyPhoto}
                alt=""
            />
            <h3>
                <div className="candidateInfo__number">{info.number}</div>
                {info.chineseName}
            </h3>
            <h4>政黨</h4>
            <div className="candidateInfo__content">
                <img
                    className="candidateInfo__icon"
                    src={info.partisanIcon}
                    alt=""
                />
                {info.partisan}
            </div>
            <h4>競選搭檔</h4>
            <div className="candidateInfo__content">{info.partner}</div>
            <h4>背景</h4>
            <div className="candidateInfo__content">{info.background}</div>
            <h4>學歷</h4>
            <div className="candidateInfo__content">
                {info.learningPortfolio.map((portfolio) => (
                    <li>{portfolio}</li>
                ))}
            </div>
            <h4>經歷</h4>
            <div className="candidateInfo__content">
                {info.experience.map((experience) => (
                    <li>{experience}</li>
                ))}
            </div>
            <h5>看其他候選人</h5>
            <div className="candidateInfo__footer">
                {otherCandidate.map((candidate) => (
                    <Link
                        className="candidateInfo__card"
                        to={`/CandidateInfo/${candidate.candidate}`}
                    >
                        <img src={candidate.headShot} alt="" />
                        <p>{candidate.chineseName}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CandidateInfo;
