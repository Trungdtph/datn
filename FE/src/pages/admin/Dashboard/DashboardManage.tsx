import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
  Cell,
} from "recharts";
import {
  useCalculateTotalAmountDayMutation,
  useCalculateTotalAmountMonthMutation,
  useGetTotalStatusQuery,
} from "../../../api";
import { useEffect, useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const DashboardManage = () => {
  const [demo, setStatic] = useState("date");
  const [amountDay, setAmountDay] = useState([]);
  const [amountMonth, setAmountMonth] = useState([]);
  const [totalAmountDay] = useCalculateTotalAmountDayMutation();
  const [totalAmountMonth] = useCalculateTotalAmountMonthMutation();
  const { data: totalStatus } = useGetTotalStatusQuery("");

  const onChange = (_value: any, dateString: [string, string] | string) => {
    const date = {
      startDate: dateString[0],
      endDate: dateString[1],
    };

    console.log(date);

    const month = {
      startYear: moment(dateString[0]).format("YYYY"),
      endYear: moment(dateString[1]).format("YYYY"),
    };

    totalAmountDay(date)
      .unwrap()
      .then((response) => {
        setAmountDay(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    totalAmountMonth(month)
      .unwrap()
      .then((response) => {
        setAmountMonth(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-gray-300">
          <p className="label">{`Tổng : ${payload[0].value}`}</p>
          <p className="label">{`Thời gian : ${label}`}</p>
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    const currentDate = new Date();

    const firstDay = moment(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    ).format("YYYY/MM/DD");

    const lastDay = moment(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
    ).format("YYYY/MM/DD");

    const firstMonth = currentDate.getFullYear() - 1;
    const lastMonth = currentDate.getFullYear();

    const dateBase = {
      startDate: firstDay,
      endDate: lastDay,
    };

    const monthBase = {
      startYear: firstMonth,
      endYear: lastMonth,
    };

    totalAmountDay(dateBase)
      .unwrap()
      .then((response: any) => {
        setAmountDay(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    totalAmountMonth(monthBase)
      .unwrap()
      .then((response) => {
        setAmountMonth(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>
        <RangePicker onChange={onChange} className="mb-10" allowClear={false} />

        <div className="flex gap-1 mb-4">
          <button
            className="font-bold text-xl"
            onClick={() => setStatic("date")}
          >
            Theo ngày
          </button>

          <button
            className="font-bold text-xl"
            onClick={() => setStatic("month")}
          >
            Theo tháng
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div>
          {demo === "date" && (
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={amountDay}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={true}
                  tickFormatter={(value) => value}
                />
                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Bar
                  dataKey="total"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        <div>
          {demo === "month" && (
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={amountMonth}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={true}
                  tickFormatter={(value) => value}
                />
                <Tooltip content={<CustomTooltip />} />
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <Bar
                  dataKey="total"
                  fill="currentColor"
                  radius={[4, 4, 0, 0]}
                  className="fill-primary"
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>

        {totalStatus && totalStatus.data && (
          <ResponsiveContainer width="100%" height={350}>
            <PieChart width={400} height={400}>
              <Pie
                data={totalStatus?.data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {totalStatus?.data.map((_entry: any, index: any) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
};

export default DashboardManage;
