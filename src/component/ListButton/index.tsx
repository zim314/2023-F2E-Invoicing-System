import React from 'react';
import './index.scss';

interface Props {
    changeState?: () => void;
}

const ListButton = ({ changeState }: Props) => {
    return (
        <div className="listButton">
            <div></div>
            <div>
                <div className="listButton__button">
                    <div className="listButton__point">●</div>
                    <button value="20" onClick={changeState}>
                        2020
                    </button>
                </div>
                <div className="listButton__button">
                    <div className="listButton__point">●</div>
                    <button value="2016" onClick={changeState}>
                        2016
                    </button>
                </div>
                <div className="listButton__button">
                    <div className="listButton__point">●</div>
                    <button value="2012" onClick={changeState}>
                        2012
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListButton;
