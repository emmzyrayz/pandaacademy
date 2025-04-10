"use client";
import React, {useState, useEffect, useRef} from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define data structure
interface DataItem {
  day: string;
  Mentoring: number;
  "Self Improve": number;
  Student: number;
  gap1: number;
  gap2: number;
}

// Define custom payload structure
interface CustomTooltipPayload {
  dataKey: string;
  name: string;
  value: number;
  color: string;
}

// Define custom tooltip props
interface CustomTooltipProps {
  active?: boolean;
  payload?: CustomTooltipPayload[];
  label?: string;
}

const dummyData: DataItem[] = [
  {
    day: "Mon",
    Mentoring: 50,
    "Self Improve": 25,
    Student: 85,
    gap1: 3, // Add a gap key with a small value
    gap2: 3, // Add a gap key with a small value
  },
  {
    day: "Tue",
    Mentoring: 75,
    "Self Improve": 25,
    Student: 85,
    gap1: 3,
    gap2: 3,
  },
  {
    day: "Wed",
    Mentoring: 25,
    "Self Improve": 15,
    Student: 50,
    gap1: 3,
    gap2: 3,
  },
  {
    day: "Thu",
    Mentoring: 25,
    "Self Improve": 15,
    Student: 65,
    gap1: 3,
    gap2: 3,
  },
  {
    day: "Fri",
    Mentoring: 25,
    "Self Improve": 25,
    Student: 50,
    gap1: 3,
    gap2: 3,
  },
  {
    day: "Sat",
    Mentoring: 25,
    "Self Improve": 15,
    Student: 45,
    gap1: 3,
    gap2: 3,
  },
  {
    day: "Sun",
    Mentoring: 45,
    "Self Improve": 15,
    Student: 85,
    gap1: 3,
    gap2: 3,
  },
];

// Custom tooltip component that's more responsive
const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    const filteredPayload = payload.filter(
      (entry) => entry.dataKey !== "gap1" && entry.dataKey !== "gap2"
    );

    return (
      <div className="bg-white p-2 shadow-md rounded border border-gray-200 text-xs sm:text-sm">
        <p className="font-bold mb-1">{`${label}`}</p>
        {filteredPayload.map((entry, index) => (
          <p
            key={`item-${index}`}
            style={{color: entry.color}}
            className="mb-1 "
          >
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BREAKPOINTS = {
  sm: 640,
  md: 768,
};

export const ProductivityChart: React.FC = () => {
  const isMounted = useRef(true);

  const [chartParams, setChartParams] = useState({
    barSize: 10,
    margin: {
      top: 10,
      right: 20,
      left: 0,
      bottom: 0,
    },
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  // Set chart parameters based on screen size
  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;

    const handleResize = () => {
      if (!isMounted.current) return;

      const width = window.innerWidth;

      if (width < BREAKPOINTS.sm) {
        // sm breakpoint
        setChartParams({
          barSize: 6,
          margin: {top: 10, right: 5, left: 0, bottom: 0},
        });
      } else if (width < BREAKPOINTS.md) {
        // md breakpoint
        setChartParams({
          barSize: 8,
          margin: {top: 10, right: 15, left: 0, bottom: 0},
        });
      } else {
        setChartParams({
          barSize: 10,
          margin: {top: 10, right: 20, left: 0, bottom: 0},
        });
      }
    };

    const debouncedResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (isMounted.current) {
          handleResize();
        }
      }, 100);
    };

    handleResize();

    window.addEventListener("resize", debouncedResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", debouncedResize);
    };
  }, []);

  const barKeys = {
    mentoring: "Mentoring",
    gap1: "gap1",
    selfImprove: "Self Improve",
    gap2: "gap2",
    student: "Student",
  };

  return (
    <div className="w-full h-[300px] sm:h-[250px] xl:h-[400px] bg-gray-100 p-2 m-0 rounded-lg shadow-sm text-[10px] sm:text-[12px] md:text-[14px] xl:text-[16px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={dummyData}
          margin={chartParams.margin}
          barSize={chartParams.barSize}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="day" tick={{fontSize: "0.8rem"}} tickMargin={5} />
          <YAxis tick={{fontSize: "0.8rem"}} width={35} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{fontSize: "0.8rem", paddingTop: "10px"}}
            iconSize={8}
            iconType="circle"
          />
          <Bar
            key="bar-mentoring"
            dataKey={barKeys.mentoring}
            stackId="a"
            fill="#c4b5fd"
            radius={[5, 5, 5, 5]}
          />
          {/* Add a transparent gap bar */}
          <Bar
            key="bar-gap1"
            dataKey={barKeys.gap1}
            stackId="a"
            fill="transparent"
            legendType="none"
          />
          <Bar
            key="bar-selfimprove"
            dataKey={barKeys.selfImprove}
            stackId="a"
            fill="black"
            radius={[5, 5, 5, 5]}
          />
          {/* Add a transparent gap bar */}
          <Bar
            key="bar-gap2"
            dataKey={barKeys.gap2}
            stackId="a"
            fill="transparent"
            legendType="none"
          />
          <Bar
            key="bar-student"
            dataKey={barKeys.student}
            stackId="a"
            fill="#60a5fa"
            radius={[5, 5, 5, 5]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
