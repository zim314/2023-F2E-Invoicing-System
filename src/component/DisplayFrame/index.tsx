import './index.scss';

interface Props {
    click: any;
    shiftRight?: string;
    shiftLeft?: string;
    condidatePicture: string;
}

const DisplayFrame = ({
    click,
    shiftRight,
    shiftLeft,
    condidatePicture,
}: Props) => {
    return (
        <button
            style={shiftRight ? { right: shiftRight } : { left: shiftLeft }}
            className="displayFrame"
            onClick={click}
        >
            <img src={condidatePicture} alt="候選人照片" />
        </button>
    );
};

export default DisplayFrame;
