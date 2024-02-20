import './index.scss';
import { useState, useRef } from 'react';
import useOnClickOutSide from 'hook/useOnClickOutside';

const Select = ({ optionData, selectValue, updateSelect }: any) => {
    const [openOption, setOpenOption] = useState(false);

    const selectRef = useRef(null);

    const handleChangeSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOpenOption(false);
        updateSelect(e.currentTarget.value);
    };

    useOnClickOutSide(selectRef, () => setOpenOption(false));

    return (
        <div className="select__container" ref={selectRef}>
            <div style={{ zIndex: openOption ? '1' : '0' }} className="select">
                <button
                    style={{
                        borderRadius: openOption ? '6px 6px 0px 0px' : '6px',
                        backgroundColor: openOption ? '#fff4d9' : 'white',
                    }}
                    className="select__value"
                    onClick={() => setOpenOption(!openOption)}
                >
                    <p>{selectValue}</p>
                    <p>▾</p>
                </button>
                {openOption &&
                    optionData.map((option: any) => (
                        <button
                            key={option.value}
                            value={option.value}
                            onClick={handleChangeSelect}
                        >
                            {option.name}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default Select;
