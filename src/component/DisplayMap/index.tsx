import { useEffect, useRef } from 'react';
import { select, geoMercator, geoPath } from 'd3';

interface Props {
    geojson: any;
}

const index = ({ geojson }: Props) => {
    const mapRef = useRef(null);

    useEffect(() => {
        const map = select(mapRef.current);
        map.selectAll('*').remove();
        const pathGenerator = geoPath().projection(
            geoMercator().fitSize([500, 400], geojson)
        );

        map.selectAll('path')
            .data(geojson.features)
            .enter()
            .append('path')
            .attr('d', pathGenerator)
            .style('fill', 'steelblue')
            .style('stroke', 'white');
    }, [geojson]);

    return <svg ref={mapRef} width="500" height="400"></svg>;
};

export default index;
