import './index.scss';
import countryMap from '../../assets/map/countryMap.json';
import DisplayMap from '../../component/DisplayMap';
import { useRef, useState, useEffect } from 'react';
import Select from '../../component/Select';
import { counryData, distData } from '../../component/Select/optionData';

const OpenBallpt = () => {
    const [counry, setCounry] = useState('選擇縣市');
    const [dist, setDist] = useState('選擇區域');
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

    const mapContainerRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const updateSvgSize = () => {
            const { width, height } =
                mapContainerRef.current.getBoundingClientRect();
            //上下留白各13px 13+13=26
            setSvgSize({ width, height: height - 26 });
        };
        updateSvgSize();
        window.addEventListener('resize', updateSvgSize);
        return () => window.removeEventListener('resize', updateSvgSize);
    }, []);

    return (
        <div className="openBallpt">
            <div className="openBallpt__mapContainer" ref={mapContainerRef}>
                <DisplayMap geojson={countryMap} svgSize={svgSize} />
            </div>
            <div className="openBallpt__controlPanelContainer">
                <div className="controlPanel">
                    <button className="controlPanel__expandButton">v</button>
                    <div className="controlPanel__selectBar">
                        <Select
                            optionData={counryData}
                            selectValue={counry}
                            updateSelect={setCounry}
                        />
                        <Select
                            optionData={distData}
                            selectValue={dist}
                            updateSelect={setDist}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenBallpt;
