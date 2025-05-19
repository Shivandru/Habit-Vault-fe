import { useState, useEffect } from "react";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { CheckCircle2, Plus, Trash2, XCircle } from "lucide-react";
import Card from "../components/ui/Card";
import { generalFunction } from "../configs/generalFunction";
import HabitModal from "../components/ui/HabitModal";
import EmptyState from "../components/ui/EmptyState";
import useLocalStorage from "../hooks/useLocalStorage";

const Home = () => {
  const [showNewHabitForm, setShowNewHabitForm] = useState(false);
  const [newHabit, setNewHabit] = useState({
    title: "",
    description: "",
    targetDays: "",
    customDays: [],
    startDate: "",
  });
  const [habits, setHabits] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const [userName] = useLocalStorage("userName", "");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  function toggleModal() {
    setIsModalOpen((prev) => !prev);
  }

  async function handleCreateHabit(e) {
    e.preventDefault();
    try {
      const { url } = generalFunction.createUrl("habit/create");
      const res = await fetch(url, {
        method: "POST",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newHabit),
      });
      const data = await res.json();
      console.log(data);
      await getHabits();
      setShowNewHabitForm(false);
      setNewHabit({
        title: "",
        description: "",
        targetDays: "",
        customDays: [],
        startDate: "",
      });
    } catch (error) {
      console.log("error", error);
    }
  }

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

  async function updateHabit(habitId, status) {
    const today = new Date();
    const date = today.toISOString().split("T")[0];
    const payload = {
      date,
      status,
    };
    try {
      const { url } = generalFunction.createUrl(`habit/update/${habitId}`);
      const res = await fetch(url, {
        method: "PATCH",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      await getHabits();
    } catch (error) {
      console.log("error", error);
    }
  }

  async function deleteHabit(habitId) {
    try {
      const { url } = generalFunction.createUrl(`habit/delete/${habitId}`);
      const res = await fetch(url, {
        mode: "cors",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        method: "DELETE",
      });
      await getHabits();
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getHabits();
  }, []);

  return (
    <div>
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <div>
            {/* <h1 className="text-2xl font-bold text-gray-900">My Habits</h1> */}
            <h1 className="text-2xl font-bold text-[var(--secondary-color)]">
              {userName ? `Welcome back, ${userName}!` : "My Habits"}
            </h1>
          </div>
          <Button onClick={() => setShowNewHabitForm(true)}>
            <Plus size={20} className="mr-2" />
            New Habit
          </Button>
        </div>

        {showNewHabitForm && (
          <Card className="mb-8">
            <form onSubmit={handleCreateHabit} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Habit Name
                </label>
                <input
                  type="text"
                  id="title"
                  value={newHabit.title}
                  onChange={(e) =>
                    setNewHabit({ ...newHabit, title: e.target.value })
                  }
                  className="mt-1 block w-full h-10 px-3 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description (optional)
                </label>
                <textarea
                  id="description"
                  value={newHabit.description}
                  onChange={(e) =>
                    setNewHabit({ ...newHabit, description: e.target.value })
                  }
                  className="mt-1 block w-full px-3 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  rows={3}
                />
              </div>
              <div>
                <label
                  htmlFor="targetDays"
                  className="block text-sm font-medium text-gray-700"
                >
                  Target Days
                </label>
                <select
                  id="targetDays"
                  value={newHabit.targetDays}
                  onChange={(e) =>
                    setNewHabit({ ...newHabit, targetDays: e.target.value })
                  }
                  className="mt-1 block w-full h-10 px-3 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="Every Day">Every Day</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              {newHabit.targetDays === "Custom" && (
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <label key={day} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={day}
                          checked={newHabit.customDays?.includes(day)}
                          onChange={(e) => {
                            const { checked, value } = e.target;
                            let updatedDays = newHabit.customDays || [];
                            if (checked) {
                              updatedDays = [...updatedDays, value];
                            } else {
                              updatedDays = updatedDays.filter(
                                (d) => d !== value
                              );
                            }
                            setNewHabit({
                              ...newHabit,
                              customDays: updatedDays,
                            });
                          }}
                        />
                        <span>{day}</span>
                      </label>
                    )
                  )}
                </div>
              )}

              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <input
                  type="date"
                  id="startDate"
                  value={newHabit.startDate}
                  onChange={(e) =>
                    setNewHabit({ ...newHabit, startDate: e.target.value })
                  }
                  className="mt-1 block w-full h-10 px-3 py-2 text-sm rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  variant="outline"
                  onClick={() => setShowNewHabitForm(false)}
                  type="button"
                >
                  Cancel
                </Button>
                <Button type="submit">Create Habit</Button>
              </div>
            </form>
          </Card>
        )}

        {habits?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {habits?.map((habit) => (
              <div
                onClick={() => {
                  setSelectedHabit(habit);
                  toggleModal();
                }}
                className="cursor-pointer"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--card-text)",
                }}
              >
                <Card key={habit._id} className="relative group p-4 space-y-3">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteHabit(habit._id);
                      }}
                      className="text-gray-400 hover:text-gray-600 cursor-pointer"
                      title="Delete habit"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {habit.title}
                  </h3>

                  {habit.description && (
                    <p className="text-gray-600 text-sm">{habit.description}</p>
                  )}

                  <div className="text-xs text-gray-500 space-y-1">
                    <p>
                      Started on:{" "}
                      {new Date(habit.startDate).toLocaleDateString("en-IN", {
                        weekday: "short",
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                    {habit.targetDays === "Custom" &&
                      habit.customDays.length > 0 && (
                        <p className="text-sm text-indigo-600 font-medium">
                          🗓️{" "}
                          {habit.customDays
                            .map((day) => day.slice(0, 3))
                            .join(", ")}
                        </p>
                      )}
                    {habit.targetDays === "Every Day" && (
                      <p className="text-sm text-indigo-600 font-medium">
                        🗓️ Every Day
                      </p>
                    )}
                    <p className="text-orange-500 font-medium text-sm">
                      🔥 {habit.streak.current} day
                      {habit.streak.current !== 1 ? "s" : ""} streak
                    </p>
                    <p className="text-green-600">
                      Longest streak: {habit.streak.longest} day
                      {habit.streak.longest !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <div className="flex items-center justify-end space-x-3 pt-2">
                    <button
                      className="text-green-500 hover:text-green-600 cursor-pointer"
                      title="Mark as complete"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateHabit(habit._id, "completed");
                      }}
                    >
                      <CheckCircle2 size={24} />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-600 cursor-pointer"
                      title="Skip today"
                      onClick={(e) => {
                        e.stopPropagation();
                        updateHabit(habit._id, "missed");
                      }}
                    >
                      <XCircle size={24} />
                    </button>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            toggleModal={() => setShowNewHabitForm((prev) => !prev)}
          />
        )}
      </Container>
      <HabitModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        habit={selectedHabit}
        setSelectedHabit={setSelectedHabit}
      />
    </div>
  );
};

export default Home;
