import { useEffect } from 'react';
import * as d3 from 'd3';

interface Props {
    barSize: Size;
    greenParty: number;
    blueParty: number;
    orangeParty: number;
}

interface Size {
    width: number;
    height: number;
}

const RatioBar = ({ barSize, greenParty, blueParty, orangeParty }: Props) => {
    const data = [
        { votes: greenParty, color: '#749c73' },
        { votes: blueParty, color: '#8bb5dc' },
        { votes: orangeParty, color: '#ffb086' },
    ];

    useEffect(() => {
        let cumulativeValue = 0;
        const svg = d3.select(`.ratioBar${greenParty}`).append('g');
        const x = d3
            .scaleLinear()
            .domain([0, d3.sum(data, (data) => data.votes)])
            .range([0, barSize.width]);

        svg.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', (data) => {
                const xValue = x(cumulativeValue);
                cumulativeValue += data.votes;
                return xValue;
            })
            .attr('width', (data) => x(data.votes))
            .attr('height', barSize.height)
            .style('fill', (data) => data.color);
    }, [barSize]);

    return (
        <svg
            style={{
                borderRadius: '99px',
                width: `${barSize.width}px`,
                height: `${barSize.height}px`,
            }}
            className={`ratioBar${greenParty}`}
        />
    );
};

export default RatioBar;
