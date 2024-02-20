import './index.scss';

const BurgerButton = ({ handleClick }: any) => {
    return (
        <button onClick={handleClick} className="burgerButton">
            <div></div>
            <div></div>
            <div></div>
        </button>
    );
};

export default BurgerButton;
