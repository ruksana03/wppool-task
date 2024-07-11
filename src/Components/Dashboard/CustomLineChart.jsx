import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', WPOOL: 30, Google: 40, Microsoft: 50, Twitter: 20 },
  { name: 'Feb', WPOOL: 40, Google: 30, Microsoft: 45, Twitter: 25 },
  { name: 'Mar', WPOOL: 50, Google: 35, Microsoft: 60, Twitter: 30 },
  { name: 'Apr', WPOOL: 60, Google: 50, Microsoft: 70, Twitter: 40 },
  { name: 'May', WPOOL: 70, Google: 65, Microsoft: 80, Twitter: 50 },
  { name: 'Jun', WPOOL: 80, Google: 70, Microsoft: 90, Twitter: 60 },
  { name: 'Jul', WPOOL: 90, Google: 80, Microsoft: 100, Twitter: 70 },
];

const CustomLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="WPOOL" stroke="#ff7300" />
        <Line type="monotone" dataKey="Google" stroke="#387908" />
        <Line type="monotone" dataKey="Microsoft" stroke="#8884d8" />
        <Line type="monotone" dataKey="Twitter" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default CustomLineChart;
