import './index.scss';

interface Props {
    click: any;
    shiftRight?: string;
    condidatePicture: string;
    condidateNumber: string;
}

const CondidateCard = ({
    click,
    shiftRight = '0px',
    condidatePicture,
    condidateNumber,
}: Props) => {
    return (
        <button className="candidateCard alingCenter" onClick={click}>
            <div className="alingCenter">
                <img
                    style={{ right: shiftRight }}
                    src={condidatePicture}
                    alt="候選人照片"
                />
            </div>
            <img src={condidateNumber} alt="候選人名字" />
        </button>
    );
};

export default CondidateCard;
