const TotalHabitsCard = ({ habits }) => {
  return (
    <div
      className="rounded-xl shadow p-6 w-full text-center max-w-md h-full"
      style={{ backgroundColor: "var(--card-bg)", color: "var(--card-text)" }}
    >
      <h2
        className="text-lg font-semibold"
        style={{ color: "var(--card-heading)" }}
      >
        Total Habits
      </h2>
      <p
        className="text-3xl font-bold mt-2"
        style={{ color: "var(--card-number)" }}
      >
        {habits?.length || 0}
      </p>
    </div>
  );
};

export default TotalHabitsCard;
