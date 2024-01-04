import './index.scss';
import { useParams } from 'react-router-dom';
import Navbar from '../../component/Navber';

const CandidateInfo = () => {
    const { candidate } = useParams();

    console.log('candidate', candidate);

    return (
        <div>
            <Navbar />
            <div>照片</div>
            <div>1.喵楚魚</div>
            <div>政黨</div>
            <div>橘喵黨</div>
            <div>競選搭檔</div>
            <div>魚喵喵(無黨籍)</div>
            <div>背景</div>
            <div>政治界：公職、國際關西研究員</div>
            <div>學歷</div>
            <div>國立政治大學外交系畢業</div>
            <div>經歷</div>
            <div>行政院簡任秘書</div>
            <div>看其他候選人</div>
            <div>喵英文</div>
            <div>汪國魚</div>
        </div>
    );
};

export default CandidateInfo;
