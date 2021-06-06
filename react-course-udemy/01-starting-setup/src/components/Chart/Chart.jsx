import React from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {
  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        /> //TODO : null 값 고쳐주기
      ))}
    </div>
  );
};

export default Chart;
