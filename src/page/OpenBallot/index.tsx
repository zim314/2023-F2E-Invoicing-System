import './index.scss';
import countryMap from '../../assets/map/countryMap.json';
import DisplayMap from '../../component/DisplayMap';
import { useRef, useState, useEffect } from 'react';
import Select from '../../component/Select';
import { counryData, distData } from '../../component/Select/optionData';

import * as d3 from 'd3';

const OpenBallpt = () => {
    const [counry, setCounry] = useState('選擇縣市');
    const [dist, setDist] = useState('選擇區域');
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });

    const mapContainerRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const updateSvgSize = () => {
            const { width, height } =
                mapContainerRef.current.getBoundingClientRect();
            //地圖上下留白各13px 13+13=26
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

                    <div className="barGraph">
                        <div className="barGraph__title">縣市 得票佔比</div>
                        <div className="barGraph__row">
                            <div>台北</div>
                            <div>///////------------</div>
                        </div>
                        <div>新北</div>
                        <div>////////-----------</div>
                        <div>高雄</div>
                        <div>///////////--------</div>
                        <div>台北</div>
                        <div>///////------------</div>
                        <div>新北</div>
                        <div>////////-----------</div>
                        <div>高雄</div>
                        <div>///////////--------</div>
                        <div>台北</div>
                        <div>///////------------</div>
                        <div>新北</div>
                        <div>////////-----------</div>
                        <div>高雄</div>
                        <div>///////////--------</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenBallpt;
