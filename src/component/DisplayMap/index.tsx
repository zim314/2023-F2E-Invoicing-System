import { useEffect, useRef } from 'react';
import { select, geoMercator, geoPath, GeoPath } from 'd3';

interface Props {
    geojson: any;
    svgSize: Size;
}

interface Size {
    width: number;
    height: number;
}

const index = ({ geojson, svgSize }: Props) => {
    const { width, height } = svgSize;
    const mapRef = useRef(null);

    useEffect(() => {
        const map = select(mapRef.current);
        map.selectAll('*').remove();
        const pathGenerator: GeoPath<any, any> = geoPath().projection(
            geoMercator().fitSize([width, height], geojson)
        );

        map.selectAll('path')
            .data(geojson.features)
            .enter()
            .append('path')
            .attr('d', pathGenerator)
            .attr('id', (_, i) => geojson.features[i].properties.COUNTYNAME)
            .style('fill', 'steelblue')
            .style('stroke', 'white');
    }, [geojson, width, height]);

    return <svg ref={mapRef} width={width} height={height} />;
};

export default index;
