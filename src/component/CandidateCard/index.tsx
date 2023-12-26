import './index.scss';

interface Props {
    condidatePicture: string;
    condidateNumber: string;
}

const CondidateCard = ({ condidatePicture, condidateNumber }: Props) => {
    return (
        <div className="candidateCard alingCenter">
            <img src={condidatePicture} alt="候選人照片" />
            <img src={condidateNumber} alt="候選人名字" />
        </div>
    );
};

export default CondidateCard;
