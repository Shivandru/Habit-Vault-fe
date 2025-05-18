import {
  BarChart3,
  Bell,
  CheckCircle,
  Flame,
  Tags,
  Trophy,
} from "lucide-react";
import { FEATURES } from "../../constants";
import Card from "../ui/Card";
import Container from "../ui/Container";

const iconMap = {
  CheckCircle: <CheckCircle className="text-blue-500" size={24} />,
  Flame: <Flame className="text-orange-500" size={24} />,
  BarChart3: <BarChart3 className="text-purple-500" size={24} />,
  Tags: <Tags className="text-green-500" size={24} />,
  Trophy: <Trophy className="text-yellow-500" size={24} />,
  Bell: <Bell className="text-red-500" size={24} />,
};

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Build Better Habits
          </h2>
          <p className="text-lg text-gray-600">
            Powerful tools designed to help you create, track, and maintain
            habits that stick.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div key={index} className="transition-all duration-300 group">
              <Card hover className="h-full border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[feature.icon]}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Start building better habits today
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have transformed their routines and
            achieved their goals with Habit Vault.
          </p>
          <a
            href="#"
            className="inline-block bg-white text-blue-600 font-medium py-3 px-8 rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Try Free for 14 Days
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Features;
