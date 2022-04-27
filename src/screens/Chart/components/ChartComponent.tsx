import React from 'react';
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryTheme,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from 'victory-native';
import { width } from 'utils/constants';

const ChartComponent: React.FC<{ chartData: any }> = ({ chartData }) => {
  const dataValuesArr = chartData.values.map(
    (val: { value: Object }) => val.value,
  );

  let yAxisMinValue = Math.min(...dataValuesArr);
  let yAxisMaxValue = Math.max(...dataValuesArr);
  const yAxisTicksLabels = [
    yAxisMinValue,
    yAxisMaxValue * 0.2,
    yAxisMaxValue * 0.4,
    yAxisMaxValue * 0.6,
    yAxisMaxValue * 0.8,
    yAxisMaxValue,
  ];

  return (
    <VictoryChart
      width={width - 16}
      domain={{ y: [yAxisMinValue, yAxisMaxValue] }}
      containerComponent={
        <VictoryVoronoiContainer
          voronoiDimension="y"
          labels={({ datum }) => datum._y}
          labelComponent={
            <VictoryTooltip
              cornerRadius={1}
              flyoutStyle={{ fill: 'black' }}
              style={{ fill: 'white' }}
            />
          }
        />
      }
      theme={VictoryTheme.material}
      domainPadding={{ y: [0, 20] }}>
      <VictoryAxis
        dependentAxis
        tickFormat={yAxisTicksLabels}
        style={{
          axis: { stroke: 'transparent', fill: 'transparent' },
          tickLabels: { color: 'white', fill: 'white' },
        }}
      />
      <VictoryLine
        animate={true}
        range={{ y: [0, yAxisMaxValue] }}
        data={dataValuesArr}
        scale={{ y: 'linear' }}
        labels={({ datum }) => datum.y}
        style={{
          data: { stroke: 'white', strokeWidth: 2 },
        }}
      />
    </VictoryChart>
  );
};

export default ChartComponent;
