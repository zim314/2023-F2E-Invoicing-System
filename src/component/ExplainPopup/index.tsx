import useOnClickOutSide from 'hook/useOnClickOutside';
import { useRef } from 'react';
import './index.scss';

interface Props {
    closeExplainPopup: () => void;
}

const ExplainPopup = ({ closeExplainPopup }: Props) => {
    const explainPopupRef = useRef(null!);
    useOnClickOutSide(explainPopupRef, () => closeExplainPopup());

    return (
        <div className="explainPopup__wrapper">
            <div className="explainPopup" ref={explainPopupRef}>
                <button onClick={closeExplainPopup} />
                <h5>使用說明</h5>
                <p>
                    下方的表格與上方的地是圖互相連動的，請放心從任何一邊進入有興趣的區域查看詳細選情。資訊會自動隨著地區的層級改變，地圖的「回全國」按鈕，即可隨時回到最上層觀看最全面的選情動態。
                </p>
                <h5>政黨代表色</h5>
                <div>
                    <div className="explainPopup__partisanInfo">
                        <div className="explainPopup__point--blue" />
                        <div>藍汪黨</div>
                    </div>
                    <div className="explainPopup__partisanInfo">
                        <div className="explainPopup__point--green" />
                        <div>綠喵黨</div>
                    </div>
                    <div className="explainPopup__partisanInfo">
                        <div className="explainPopup__point--orange" />
                        <div>橘喵黨</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplainPopup;
