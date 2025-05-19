import { useEffect, useState } from "react";
import { generalFunction } from "../configs/generalFunction";
import TotalHabitsCard from "../components/ui/TotalHabitsCard";
import CompletionRatePie from "../components/ui/CompletionRatePie";
import CompletionBarChart from "../components/ui/CompletionBarChart";
import BestHabitCard from "../components/ui/BestHabitCard";

const Analytics = () => {
  const [habits, setHabits] = useState([]);
  async function getHabits() {
    try {
      const { url } = generalFunction.createUrl("habit");
      const res = await fetch(url, {
        mode: "cors",
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setHabits(data.data);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    getHabits();
  }, []);
  return (
    <div className="p-6 flex flex-col gap-8 w-full">
      <div className="flex items-center justify-between w-full h-40">
        <TotalHabitsCard habits={habits} />
        <BestHabitCard habits={habits} />
      </div>
      <div className="flex items-center justify-between">
        <div className="w-[48%] h-auto">
          <CompletionRatePie habits={habits} />
        </div>
        <div className="w-[48%] h-auto">
          <CompletionBarChart habits={habits} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
