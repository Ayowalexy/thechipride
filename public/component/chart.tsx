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
import {data} from './data'

const Chart = () => {
  return (
    <ResponsiveContainer width={'100%'} height={180}>
      <AreaChart
        margin={{ top: 20, right: 0, left: -35, bottom: 0 }}
        data={data}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#05C38A" stopOpacity={1} />
            <stop offset="95%" stopColor="#05C38A" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          opacity={1}
          fontWeight={600}
          fontFamily=" 'Ambit', sans-serif"
          dataKey="name"
          color={'#000'}
          display={"block"}
        />
        <YAxis 
         opacity={1}
         fontWeight={600}
         fontFamily=" 'Ambit', sans-serif"
         color={'#000'}
        />
        {/* <CartesianGrid strokeDasharray="10" vertical={false} /> */}
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


export default Chart