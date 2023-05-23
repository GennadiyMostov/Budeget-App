import React from 'react';
import ChartBars from './ChartBars';
import './Chart.css';

const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  const totalMaximum = Math.max(...valueArray);
  return (
    <div className='chart'>
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBars
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
