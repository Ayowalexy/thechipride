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
          left: -30,
          bottom: 0,
        }}
        barSize={10}
      >
        <XAxis
          opacity={1}
          fontWeight={600}
          fontFamily=" 'Ambit', sans-serif"
          dataKey="name"
          color={"#000"}
          display={"block"}
        />
        <YAxis
          opacity={1}
          fontWeight={600}
          fontFamily=" 'Ambit', sans-serif"
          color={"#000"}
        />

        <Bar dataKey="pv" fill="#5446FD" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BixialChart;
