import { useEffect, useState } from "react";
import { generalFunction } from "../configs/generalFunction";
import TotalHabitsCard from "../components/ui/TotalHabitsCard";
import CompletionRatePie from "../components/ui/CompletionRatePie";
import CompletionBarChart from "../components/ui/CompletionBarChart";
import BestHabitCard from "../components/ui/BestHabitCard";
import Loader from "../components/ui/Loader";
import EmptyState from "../components/ui/EmptyState";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  async function getHabits() {
    setIsLoading(true);
    try {
      const { url } = generalFunction.createUrl("habit");
      const res = await fetch(url, {
        mode: "cors",
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      setHabits(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log("error", error);
    }
  }
  useEffect(() => {
    getHabits();
  }, []);
  return (
    <div className="p-6 flex flex-col gap-8 w-full">
      {isLoading && <Loader />}
      {habits?.length > 0 && !isLoading ? (
        <div className="flex items-center justify-between w-full h-40">
          <TotalHabitsCard habits={habits} />
          <BestHabitCard habits={habits} />
        </div>
      ) : (
        <EmptyState toggleModal={() => navigate("/dashboard")} />
      )}
      {habits?.length > 0 && !isLoading && (
        <div className="flex items-center justify-between">
          <div className="w-[48%] h-auto">
            <CompletionRatePie habits={habits} />
          </div>
          <div className="w-[48%] h-auto">
            <CompletionBarChart habits={habits} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
