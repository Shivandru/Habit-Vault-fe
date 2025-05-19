import { ArrowRight, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Container from "../ui/Container";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
              Track habits. <br />
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                Build consistency.
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Habit Vault helps you build positive routines, track your
              progress, and achieve your goals with beautiful insights and
              motivating streaks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                size="lg"
                className="group"
                onClick={() => navigate("/login")}
              >
                Get Started Free
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate("/login")}>
                See How It Works
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span className="text-gray-700">No credit card required</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span className="text-gray-700">Free 14-day trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={18} />
                <span className="text-gray-700">Cancel anytime</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative mx-auto w-72 sm:w-80 md:w-96 aspect-[1/2] bg-gradient-to-br from-blue-50 to-blue-100 rounded-[2.5rem] p-4 shadow-xl rotate-1 transform-gpu">
                <div className="absolute inset-2 bg-white rounded-[2.2rem] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
                    <div className="p-6 border-b border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-900">
                        My Habits
                      </h3>
                      <p className="text-sm text-gray-500">Today, May 25</p>
                    </div>

                    <div className="p-4">
                      {[
                        {
                          name: "Morning Meditation",
                          time: "6:30 AM",
                          completed: true,
                          streak: 24,
                        },
                        {
                          name: "Read 20 Pages",
                          time: "7:15 AM",
                          completed: true,
                          streak: 18,
                        },
                        {
                          name: "Workout",
                          time: "6:00 PM",
                          completed: false,
                          streak: 12,
                        },
                        {
                          name: "Evening Journal",
                          time: "9:30 PM",
                          completed: false,
                          streak: 30,
                        },
                      ].map((habit, index) => (
                        <div
                          key={index}
                          className="mb-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-medium text-gray-800">
                                {habit.name}
                              </h4>
                              <p className="text-xs text-gray-500">
                                {habit.time}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                  habit.completed
                                    ? "bg-green-500"
                                    : "border-2 border-gray-300"
                                }`}
                              >
                                {habit.completed && (
                                  <CheckCircle
                                    size={14}
                                    className="text-white"
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center">
                            <div className="text-xs font-medium text-orange-500">
                              🔥 {habit.streak} day streak
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
