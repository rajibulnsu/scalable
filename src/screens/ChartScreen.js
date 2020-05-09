import React from 'react';
import {Chart as ChartJs} from 'chart.js';
import useTimeSeries from '../hooks/useTimeSeries';

class ChartScreen extends React.Component {
    componentDidMount() {
        this.drawChart()
    }

    drawChart() {
        const { riskLevel, initialSum, cones} = this.props;
        const { labels, dataBad, dataMedian, dataGood } = useTimeSeries(riskLevel, initialSum, cones);

        const data = {
            datasets: [
                {
                    data: dataGood,
                    label: 'Good performance',
                    borderColor: 'rgba(100, 255, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                },
                {
                    data: dataMedian,
                    label: 'Median performance',
                    borderColor: 'rgba(100, 100, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                },
                {
                    data: dataBad,
                    label: 'Bad performance',
                    borderColor: 'rgba(255, 100, 100, 0.2)',
                    fill: false,
                    pointRadius: 0
                }
            ],
            labels
        };

        const options = {
            responsive: false,
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Years'
                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Valuation (EUR)'
                    }
                }]
            }
        };

        const config = {
            type: 'line',
            data,
            options
        };

        const canvas = this.canvas;
        const context = canvas.getContext("2d");
        new ChartJs(context, config);
    }

    render() {
        return (
            <div>
                <canvas
                    ref={ref => this.canvas = ref}
                    width={600}
                    height={400}
                />
            </div>
        );
    }
}

export default ChartScreen;
