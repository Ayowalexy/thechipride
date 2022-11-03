import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { bixial } from "./data";

const CustomizedAxisTick = (props: any) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#000"
        fontFamily="Ambit"
        fontWeight={600}
        fontSize="13px"
      >
        {Number(payload.value === 0) ? null : payload.value + "00"}
      </text>
    </g>
  );
};

const CustomizedYAxisTick = (props: any) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#000"
        fontFamily="Ambit"
        fontWeight={600}
        fontSize="13px"
      >
        {payload.value}
      </text>
    </g>
  );
};

const BixialChart = () => {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart
        width={500}
        height={300}
        data={bixial}
        margin={{
          top: 20,
          right: 0,
          left: -15,
          bottom: 0,
        }}
        barSize={10}
      >
        <XAxis
          axisLine={false}
          opacity={1}
          tickLine={false}
          fontWeight={600}
          tick={<CustomizedYAxisTick />}
          fontFamily=" 'Ambit', sans-serif"
          dataKey="name"
          color={"#000"}
          display={"block"}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={<CustomizedAxisTick />}
          opacity={1}
          fontWeight={600}
          fontFamily=" 'Ambit', sans-serif"
          color={"#000"}
        />

        <Bar dataKey="pv" fill="#5446FD" radius={[20, 20, 0, 0]} background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BixialChart;
