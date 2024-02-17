import './index.scss';
import countryMap from '../../assets/map/countryMap.json';
import DisplayMap from '../../component/DisplayMap';
import { useRef, useState, useEffect } from 'react';
import Select from '../../component/Select';
import { counryData, distData } from '../../component/Select/optionData';
import * as d3 from 'd3';
import RatioBar from '../../component/RatioBar';

interface Votes {
    county: string;
    yingWen: number;
    guoYu: number;
    chuYu: number;
}

const OpenBallpt = () => {
    const [county, setCounty] = useState('選擇縣市');
    const [district, setDistrict] = useState('選擇區域');
    const [mapSvgSize, setMapSvgSize] = useState({ width: 0, height: 0 });
    const [barSvgSize, setBarSvgSize] = useState({ width: 0, height: 0 });
    const [votesList, setVotesList] = useState<Votes[]>();

    const mapContainerRef = useRef<HTMLDivElement>(null!);
    const barGraphContainerRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        (async () => {
            const votes = await d3
                .csv('../../../public/votesData.csv')
                .then((result) =>
                    result.map((votes) => {
                        return {
                            county: votes.county,
                            yingWen: parseInt(votes.yingWen.replace(/,/g, '')),
                            guoYu: parseInt(votes.guoYu.replace(/,/g, '')),
                            chuYu: parseInt(votes.chuYu.replace(/,/g, '')),
                        };
                    })
                );
            setVotesList(votes);
        })();

        const updateSvgSize = () => {
            const { width: mapWidth, height: mapHeight } =
                mapContainerRef.current.getBoundingClientRect();
            const { width: barWidth } =
                barGraphContainerRef.current.getBoundingClientRect();

            //地圖上下留白各13px 13+13=26
            setMapSvgSize({ width: mapWidth, height: mapHeight - 26 });
            //bar要扣掉pidding跟county的width 20+20+18=58
            setBarSvgSize({ width: barWidth - 108, height: 18 });
        };
        updateSvgSize();
        window.addEventListener('resize', updateSvgSize);
        return () => window.removeEventListener('resize', updateSvgSize);
    }, []);

    return (
        <div className="openBallpt">
            <div className="openBallpt__mapContainer" ref={mapContainerRef}>
                <DisplayMap geojson={countryMap} svgSize={mapSvgSize} />
            </div>
            <div className="openBallpt__controlPanelContainer">
                <div className="controlPanel">
                    <button className="controlPanel__expandButton">v</button>
                    <div className="controlPanel__selectBar">
                        <Select
                            optionData={counryData}
                            selectValue={county}
                            updateSelect={setCounty}
                        />
                        <Select
                            optionData={distData}
                            selectValue={district}
                            updateSelect={setDistrict}
                        />
                    </div>
                    <div className="barGraph" ref={barGraphContainerRef}>
                        <div className="barGraph__title">縣市 得票佔比</div>
                        {votesList?.map((votes: Votes) => (
                            <div className="barGraph__row" key={votes.county}>
                                <div className="barGraph__county">
                                    {votes.county}
                                </div>
                                <RatioBar
                                    barSize={barSvgSize}
                                    greenParty={votes.yingWen}
                                    blueParty={votes.guoYu}
                                    orangeParty={votes.chuYu}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenBallpt;
