import React from "react";

const BestHabitCard = ({ habits }) => {
  if (!habits?.length) return null;
  let bestHabit = null;
  let bestCompletionRate = 0;
  habits.forEach((habit) => {
    const totalDays = habit?.history.length;
    if (totalDays === 0) return;
    const completedDays = habit?.history.filter(
      (entry) => entry.status === "completed"
    ).length;
    const completionRate = completedDays / totalDays;

    if (!bestHabit || completionRate > bestCompletionRate) {
      bestHabit = habit;
      bestCompletionRate = completionRate;
    }
  });

  if (!bestHabit) return <div>No habit data available</div>;

  const completionPercent = (bestCompletionRate * 100).toFixed(1);
  return (
    <div
      className="rounded-xl shadow p-6 w-full max-w-md h-full"
      style={{ backgroundColor: "var(--card-bg)", color: "var(--card-text)" }}
    >
      <h3
        className="text-xl font-bold mb-2"
        style={{ color: "var(--card-heading)" }}
      >
        Best Performing Habit
      </h3>
      <h4
        className="text-lg font-semibold mb-1"
        style={{ color: "var(--card-subheading)" }}
      >
        {bestHabit.title}
      </h4>
      <p>
        Longest Streak:{" "}
        <span className="font-medium">
          {bestHabit.streak.longest} day
          {bestHabit.streak.longest !== 1 ? "s" : ""}
        </span>
      </p>
      <p>
        Completion Rate:{" "}
        <span className="font-medium">{completionPercent}%</span>
      </p>
    </div>
  );
};

export default BestHabitCard;
