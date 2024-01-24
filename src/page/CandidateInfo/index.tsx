import './index.scss';
import useRWD from '../../hook/useRWD';
import { useParams, Link } from 'react-router-dom';
import candidateData from './candidateData';
import Li from 'component/LiLabal';

const CandidateInfo = () => {
    const { candidate } = useParams();
    const device = useRWD();

    const info = candidateData.filter(
        (data) => data.candidate === candidate
    )[0];

    const otherCandidate = candidateData.filter(
        (data) => data.candidate !== candidate
    );

    return (
        <>
            <div className="candidateInfo ">
                <h6>中華民國第十五任總統暨副總統選舉 / {info.chineseName}</h6>
                <div>
                    <div className="candidateInfo__container">
                        <div className="candidateInfo__photo">
                            <img src={info.fullBodyPhoto} alt="" />
                        </div>
                        <div>
                            <h3>
                                <div className="candidateInfo__number">
                                    {info.number}
                                </div>
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
                            <div className="candidateInfo__content">
                                {info.partner}
                            </div>
                            <h4>背景</h4>
                            <div className="candidateInfo__content">
                                {info.background}
                            </div>
                            <h4>學歷</h4>
                            <div className="candidateInfo__content">
                                {info.learningPortfolio.map((portfolio) => (
                                    <Li>{portfolio}</Li>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4>經歷</h4>
                            <div className="candidateInfo__content">
                                {info.experience.map((experience) => (
                                    <Li>{experience}</Li>
                                ))}
                            </div>
                        </div>

                        <div>
                            {device === 'mobile' && <h5>看其他候選人</h5>}
                            <div className="candidateInfo__change">
                                {otherCandidate.map((candidate) => (
                                    <Link
                                        className="candidateInfo__button"
                                        to={`/CandidateInfo/${candidate.candidate}`}
                                    >
                                        <img src={candidate.headShot} alt="" />
                                        <p>{candidate.chineseName}</p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {device === 'PC' && (
                <div className="candidateInfo__footer">
                    Copyright©2023 總統即時開票全台地圖本網站 The F2E所有
                </div>
            )}
        </>
    );
};

export default CandidateInfo;
