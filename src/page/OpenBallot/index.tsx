import './index.scss';
import countryMap from '../../assets/map/countryMap.json';
import DisplayMap from '../../component/DisplayMap';

const OpenBallpt = () => {
    return (
        <div>
            <DisplayMap geojson={countryMap} />
        </div>
    );
};

export default OpenBallpt;
