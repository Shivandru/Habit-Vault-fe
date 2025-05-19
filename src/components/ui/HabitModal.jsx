import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const HabitModal = ({ isOpen, onClose, habit, setSelectedHabit }) => {
  if (!isOpen || !habit) return null;

  const historyMap = new Map(
    habit.history.map((entry) => [
      new Date(entry.date).toDateString(),
      entry.status,
    ])
  );

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      const status = historyMap.get(date.toDateString());
      if (status === "completed") return "calendar-completed";
      if (status === "missed") return "calendar-missed";
    }
    return null;
  };

  const completedCount = habit.history.filter(
    (h) => h.status === "completed"
  ).length;
  const missedCount = habit.history.filter((h) => h.status === "missed").length;
  const totalTracked = habit.history.length;
  const completionRate =
    totalTracked > 0 ? Math.round((completedCount / totalTracked) * 100) : 0;

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    //   <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 relative">
    //     <button
    //       onClick={() => {
    //         onClose();
    //         setSelectedHabit(null);
    //       }}
    //       className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
    //     >
    //       ✕
    //     </button>
    //     <h2 className="text-2xl font-bold mb-4">{habit.title}</h2>
    //     <Calendar tileClassName={tileClassName} />
    //     <div className="mt-4 text-sm text-gray-600 flex gap-4">
    //       <div className="flex items-center gap-1">
    //         <span className="w-4 h-4 bg-green-400 inline-block rounded-full" />{" "}
    //         Completed
    //       </div>
    //       <div className="flex items-center gap-1">
    //         <span className="w-4 h-4 bg-red-400 inline-block rounded-full" />{" "}
    //         Missed
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl p-6 relative">
        <button
          onClick={() => {
            onClose();
            setSelectedHabit(null);
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">{habit.title}</h2>

        <Calendar tileClassName={tileClassName} />

        {/* Legend */}
        <div className="mt-4 text-sm text-gray-600 flex gap-4">
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 bg-green-400 inline-block rounded-full" />{" "}
            Completed
          </div>
          <div className="flex items-center gap-1">
            <span className="w-4 h-4 bg-red-400 inline-block rounded-full" />{" "}
            Missed
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Start Date:</strong>{" "}
            {new Date(habit.startDate).toLocaleDateString()}
          </div>
          <div>
            <strong>Total Days Tracked:</strong> {totalTracked}
          </div>
          <div>
            <strong>Completed:</strong> {completedCount}
          </div>
          <div>
            <strong>Missed:</strong> {missedCount}
          </div>
          <div>
            <strong>Completion Rate:</strong> {completionRate}%
          </div>
          <div>
            <strong>Current Streak:</strong> 🔥 {habit.streak.current} day
            {habit.streak.current !== 1 ? "s" : ""}
          </div>
          <div>
            <strong>Longest Streak:</strong> {habit.streak.longest} day
            {habit.streak.longest !== 1 ? "s" : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HabitModal;
