import ReactECharts from "echarts-for-react";
import { useState, useEffect } from "react";

const CompletionRatePie = ({ habits }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  let totalDays = 0;
  let completedDays = 0;
  let missedDays = 0;

  habits?.forEach((habit) => {
    habit?.history.forEach((entry) => {
      totalDays++;
      if (entry.status === "completed") completedDays++;
      if (entry.status === "missed") missedDays++;
    });
  });

  // const completionRate = ((completedDays / totalDays) * 100).toFixed(1) || 0;
  const completionRate = totalDays === 0 ? 0 : ((completedDays / totalDays) * 100).toFixed(1);

  const option = {
    title: {
      text: `Completion Rate\n${completionRate}%`,
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 30,
        color: "#9CA3AF" ,
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      backgroundColor: isDark ? "#334155" : "#f1f5f9",
      textStyle: {
        color: isDark ? "#f1f5f9" : "#1e293b",
      },
    },
    series: [
      {
        type: "pie",
        radius: ["50%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: completedDays,
            name: "Completed",
            itemStyle: { color: "#4ade80" },
          },
          {
            value: missedDays,
            name: "Missed",
            itemStyle: { color: "#f87171" },
          },
        ],
      },
    ],
  };
  return (
    <div>
      <div
        className="bg-white rounded-xl shadow p-6 w-full"
        style={{ backgroundColor: "var(--card-bg)", color: "var(--card-text)" }}
      >
        <ReactECharts option={option} style={{ height: "500px" }} />
      </div>
    </div>
  );
};

export default CompletionRatePie;
