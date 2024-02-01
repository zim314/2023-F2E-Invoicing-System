import './index.scss';
import { useState } from 'react';

const Select = ({ optionData, selectValue, updateSelect }: any) => {
    const [openOption, setOpenOption] = useState(false);

    const handleChangeSelect = (e: any) => {
        setOpenOption(false);
        updateSelect(e.target.value);
    };

    return (
        <div className="select__container">
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
