import './index.scss';

interface Props {
    handleClick: React.MouseEventHandler;
}

const BurgerButton = ({ handleClick }: Props) => {
    return (
        <button onClick={handleClick} className="burgerButton">
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default BurgerButton;
