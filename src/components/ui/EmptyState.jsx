import { Inbox } from "lucide-react";

const EmptyState = ({ toggleModal }) => {
  return (
    <div
      className="flex flex-col items-center justify-center text-center rounded-xl shadow p-6 w-full max-w-md mx-auto"
      style={{
        backgroundColor: "var(--card-bg)",
        color: "var(--card-text)",
      }}
    >
      <Inbox size={96} className="mb-4 opacity-60" />
      <h2
        className="text-xl font-semibold mb-2"
        style={{ color: "var(--card-heading)" }}
      >
        No Habits Yet
      </h2>
      <p className="text-sm mb-4" style={{ color: "var(--card-subtext)" }}>
        Start building better habits by creating your first one!
      </p>
      <button
        className="px-4 py-2 rounded-lg font-medium shadow cursor-pointer"
        style={{
          backgroundColor: "var(--btn-bg)",
          color: "var(--btn-text)",
        }}
        onClick={toggleModal}
      >
        + Add Habit
      </button>
    </div>
  );
};

export default EmptyState;
