import './index.scss';
import countryMap from '../../assets/map/countryMap.json';
import DisplayMap from '../../component/DisplayMap';
import { useRef, useState, useEffect } from 'react';

const OpenBallpt = () => {
    const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
    const mapContainerRef = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const updateSvgSize = () => {
            const { width, height } =
                mapContainerRef.current.getBoundingClientRect();
            setSvgSize({ width, height });
        };
        updateSvgSize();
        window.addEventListener('resize', updateSvgSize);
        return () => window.removeEventListener('resize', updateSvgSize);
    }, []);

    return (
        <div>
            <div
                style={{ width: '600px', height: '600px' }}
                ref={mapContainerRef}
            >
                <DisplayMap geojson={countryMap} svgSize={svgSize} />
            </div>
        </div>
    );
};

export default OpenBallpt;
