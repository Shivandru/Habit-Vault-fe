import {
  ArrowUpCircle,
  CalendarCheck,
  LineChart,
  PlusCircle,
} from "lucide-react";
import { HOW_IT_WORKS } from "../../constants";
import Container from "../ui/Container";

const iconMap = {
  PlusCircle: <PlusCircle className="text-blue-500" size={32} />,
  CalendarCheck: <CalendarCheck className="text-green-500" size={32} />,
  LineChart: <LineChart className="text-purple-500" size={32} />,
  ArrowUpCircle: <ArrowUpCircle className="text-orange-500" size={32} />,
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple Path to Better Habits
          </h2>
          <p className="text-lg text-gray-600">
            Habit Vault makes building consistent routines easy and rewarding.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block transform -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-0 relative">
            {HOW_IT_WORKS.map((step, index) => (
              <div
                key={index}
                className="md:grid md:grid-cols-2 gap-8 md:gap-16 items-center relative"
              >
                {/* Number indicator */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl items-center justify-center z-10">
                  {index + 1}
                </div>

                {/* Content positioning based on even/odd index */}
                <div
                  className={`${
                    index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4">
                        {iconMap[step.icon]}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Empty div for positioning in grid */}
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;
