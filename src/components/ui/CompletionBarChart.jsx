import ReactECharts from "echarts-for-react";
import { useEffect, useState } from "react";

const CompletionBarChart = ({ habits }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  const isDarkMode = document.documentElement.classList.contains("dark");
  setIsDark(isDarkMode);

  return () => observer.disconnect();
    
  }, []);


  const habitTitles = habits?.map((habit) => habit.title);
  const completedCounts = habits?.map(
    (habit) =>
      habit.history.filter((entry) => entry.status === "completed").length || 0
  );
  
  const missedCounts = habits?.map(
    (habit) =>
      habit.history.filter((entry) => entry.status === "missed").length || 0
  );

  const option = {
    backgroundColor: isDark ? "#1e293b" : "#ffffff",
    title: {
      text: "Days per Habit",
      left: "center",
      textStyle: {
        fontSize: 18,
        fontWeight: "bold",
        color: isDark ? "#e5e7eb" : "#1e293b",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: isDark ? "#334155" : "#f1f5f9",
      textStyle: {
        color: isDark ? "#f1f5f9" : "#1e293b",
      },
      formatter: (params) => {
        const lines = params.map(
          (item) => `${item.seriesName}: ${item.value} days`
        );
        return `${params[0].name}<br/>${lines.join("<br/>")}`;
      },
    },
    xAxis: {
      type: "category",
      data: habitTitles,
      axisLabel: {
        rotate: 30,
        interval: 0,
        fontSize: 12,
        color: isDark ? "#e5e7eb" : "#374151",
      },
      axisLine: {
        lineStyle: {
          color: isDark ? "#e5e7eb" : "#374151",
        },
      },
    },
    yAxis: {
      type: "value",
      name: "Days",
      minInterval: 1,
      axisLabel: {
        color: isDark ? "#e5e7eb" : "#374151",
      },
      axisLine: {
        lineStyle: {
          color: isDark ? "#e5e7eb" : "#374151",
        },
      },
      splitLine: {
        lineStyle: {
          color: isDark ? "#334155" : "#e5e7eb",
        },
      },
    },

    series: [
      {
        name: "Completed",
        type: "bar",
        stack: "status",
        data: completedCounts,
        itemStyle: {
          color: "#4ade80",
        },
      },
      {
        name: "Missed",
        type: "bar",
        stack: "status",
        data: missedCounts,
        itemStyle: {
          color: "#f87171",
        },
      },
    ],
  };
  return (
    <div
      className="bg-white rounded-xl shadow p-6 w-full"
      style={{ backgroundColor: "var(--card-bg)", color: "var(--card-text)" }}
    >
      <ReactECharts option={option} style={{ height: "500px" }} />
    </div>
  );
};

export default CompletionBarChart;
