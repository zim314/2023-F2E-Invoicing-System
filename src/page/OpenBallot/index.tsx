import './index.scss';
import countryMap from '../../assets/map/countryMap.json';
import DisplayMap from '../../component/DisplayMap';
import { useRef, useState, useEffect, useContext } from 'react';
import Select from '../../component/Select';
import { counryData, distData } from '../../component/Select/optionData';
import * as d3 from 'd3';
import RatioBar from '../../component/RatioBar';
import candidateData from '../CandidateInfo/candidateData';
import presidentialElection from '../../assets/images/map_2020.png';
import ListButton from '../../component/ListButton';
import { explainPopupContext } from '../../layout/BasicLayout/index';
import useRWD from '../../hook/useRWD';

interface Votes {
    county: string;
    yingWen: number;
    guoYu: number;
    chuYu: number;
}

interface VoteShare {
    name: string;
    headShot: string;
    color: string;
    totalGetVotes: number;
}

const OpenBallpt = () => {
    const [county, setCounty] = useState('選擇縣市');
    const [district, setDistrict] = useState('選擇區域');
    const [showVoteShare, setShowVoteShare] = useState(false);
    const [showChangeYearButton, setShowChangeYearButton] = useState(true);
    const [mapSvgSize, setMapSvgSize] = useState({ width: 0, height: 0 });
    const [barSvgSize, setBarSvgSize] = useState({ width: 0, height: 0 });
    const [votesList, setVotesList] = useState<Votes[]>([]);
    const [voteShareList, setVoteShareList] = useState<VoteShare[]>();

    const device = useRWD();
    const controlPanelHeight =
        device === 'PC' ? '100%' : showVoteShare ? '401px' : '209px';
    const voteShareHeight =
        device === 'PC' ? '153px' : showVoteShare ? '333px' : '153px';
    const showExplainPopup = useContext(explainPopupContext);
    const mapContainerRef = useRef<HTMLDivElement>(null!);
    const voteShareContainerRef = useRef<HTMLDivElement>(null!);
    const barGraphContainerRef = useRef<HTMLDivElement>(null!);

    const handleControlPanelSwitch = () => {
        voteShareContainerRef.current.scrollIntoView();
        setShowVoteShare(!showVoteShare);
    };

    useEffect(() => {
        const data = candidateData.map((candidate) => ({
            name: candidate.chineseName,
            headShot: candidate.headShot,
            color: candidate.partisanColor,
            totalGetVotes: votesList.reduce(
                (accumulator, votes) =>
                    (accumulator += votes[candidate.candidate]),
                0
            ),
        }));
        setVoteShareList(data);
    }, [votesList]);

    useEffect(() => {
        (async () => {
            const votes = await d3
                .csv('../../../public/votesData.csv')
                .then((result) =>
                    result.map((votes) => ({
                        county: votes.county,
                        yingWen: parseInt(votes.yingWen.replace(/,/g, '')),
                        guoYu: parseInt(votes.guoYu.replace(/,/g, '')),
                        chuYu: parseInt(votes.chuYu.replace(/,/g, '')),
                    }))
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
                {device !== 'PC' && (
                    <>
                        <img src={presidentialElection} alt="" />
                        <div>
                            {showChangeYearButton && (
                                <ListButton changeState={() => {}} />
                            )}
                        </div>
                        <div>
                            <button
                                className="mapLayout__button"
                                onClick={() =>
                                    setShowChangeYearButton(
                                        !showChangeYearButton
                                    )
                                }
                            >
                                年份
                            </button>
                            <button
                                className="mapLayout__button"
                                onClick={showExplainPopup}
                            >
                                說明
                            </button>
                        </div>
                    </>
                )}

                <DisplayMap geojson={countryMap} svgSize={mapSvgSize} />
            </div>
            <div className="openBallpt__controlPanelContainer">
                <div
                    style={{ height: controlPanelHeight }}
                    className="controlPanel"
                >
                    {device !== 'PC' && (
                        <button
                            className="controlPanel__expandButton"
                            onClick={handleControlPanelSwitch}
                        >
                            <p
                                style={{
                                    transform: `rotate(${
                                        showVoteShare ? '0turn' : '0.5turn'
                                    })`,
                                }}
                            >
                                v
                            </p>
                        </button>
                    )}

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

                    <div
                        style={{
                            height: voteShareHeight,
                            overflow: showVoteShare ? 'scroll' : 'hidden',
                            transitionProperty: 'height',
                            transitionDuration: '0.5s',
                        }}
                    >
                        <div
                            className="voteShare__container"
                            ref={voteShareContainerRef}
                        >
                            {voteShareList
                                ?.sort(
                                    (a, b) => b.totalGetVotes - a.totalGetVotes
                                )
                                .map((voteShare) => (
                                    <div
                                        className="voteShare"
                                        key={voteShare.name}
                                    >
                                        <img
                                            style={{
                                                backgroundColor:
                                                    voteShare.color,
                                            }}
                                            src={voteShare.headShot}
                                            alt=""
                                        />
                                        <p>{voteShare.name}</p>
                                        <p
                                            style={{
                                                color: voteShare.color,
                                            }}
                                        >
                                            .............................................................................................................................................................................................................................
                                        </p>
                                        <p>
                                            {(
                                                (voteShare.totalGetVotes /
                                                    voteShareList.reduce(
                                                        (accumulator, votes) =>
                                                            (accumulator +=
                                                                votes.totalGetVotes),
                                                        0
                                                    )) *
                                                100
                                            ).toFixed(1) + '%'}
                                        </p>
                                    </div>
                                ))}
                        </div>

                        {device !== 'PC' && (
                            <div
                                className="barGraph"
                                ref={
                                    device !== 'PC'
                                        ? barGraphContainerRef
                                        : null
                                }
                            >
                                <div className="barGraph__title">
                                    <p>縣市</p>
                                    <p>得票佔比</p>
                                </div>
                                {votesList?.map((votes: Votes) => (
                                    <div
                                        className="barGraph__row"
                                        key={votes.county}
                                    >
                                        <div className="barGraph__county">
                                            {votes.county}
                                        </div>
                                        <RatioBar
                                            barSize={barSvgSize}
                                            greenPartisan={votes.yingWen}
                                            bluePartisan={votes.guoYu}
                                            orangePartisan={votes.chuYu}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {device === 'PC' && (
                        <div
                            className="barGraph"
                            ref={device === 'PC' ? barGraphContainerRef : null}
                        >
                            <div className="barGraph__title">
                                <p>縣市</p>
                                <p>得票佔比</p>
                            </div>
                            {votesList?.map((votes: Votes) => (
                                <div
                                    className="barGraph__row"
                                    key={votes.county}
                                >
                                    <div className="barGraph__county">
                                        {votes.county}
                                    </div>
                                    <RatioBar
                                        barSize={barSvgSize}
                                        greenPartisan={votes.yingWen}
                                        bluePartisan={votes.guoYu}
                                        orangePartisan={votes.chuYu}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OpenBallpt;
