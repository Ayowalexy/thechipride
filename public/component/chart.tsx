import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Margin } from "recharts/types/util/types";
import { data } from "./data";

const CustomizedAxisTick = (props: any) => {

      const { x, y, stroke, payload } = props;
  
      return (
        <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#000" fontFamily="Ambit" fontWeight={600} fontSize='13px'>
          {Number(payload.value === 0) ? null : payload.value + '00k'}
        </text>
      </g>
      );
    
  }

  const CustomizedYAxisTick = (props: any) => {

    const { x, y, stroke, payload } = props;

    return (
      <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#000" fontFamily="Ambit" fontWeight={600} fontSize='13px'>
        {payload.value}
      </text>
    </g>
    );
  
}

const Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={180}>
      <AreaChart
        margin={{ top: 20, right: 0, left: -15, bottom: 0 }}
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#05C38A" stopOpacity={1} />
            <stop offset="95%" stopColor="#05C38A" stopOpacity={0} />
          </linearGradient>
        </defs>
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
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          strokeWidth={0}
          stroke="#651940"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Chart;
