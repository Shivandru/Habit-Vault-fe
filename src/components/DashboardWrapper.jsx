import { motion } from "framer-motion";
import { Layers, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardWrapper = ({ children }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("Get Started");
  const MotionLink = motion(Link);

  const navItems = [
    { label: "Get Started", path: "/" },
    // Future sections like:
    // { label: "Habits", path: "/habits" },
    // { label: "Stats", path: "/stats" },
    // { label: "Settings", path: "/settings" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-60 h-screen border-r border-[rgba(0,0,0,0.1)] flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center text-blue-600 font-bold text-xl">
            <Layers className="mr-2" />
            <span>Habit Vault</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6 flex flex-col gap-2 overflow-auto">
          {navItems.map(({ label, path }) => (
            <MotionLink
              key={label}
              to={path}
              onClick={() => setSelected(label)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`py-2.5 px-2 flex items-center gap-3 rounded-md transition-all ${
                selected === label
                  ? "bg-[#F4F4FF] shadow-[rgba(100,100,100,0.15)_0px_2px_8px]"
                  : "hover:bg-gray-100"
              }`}
            >
              <p
                className={`text-[1rem] leading-[1.5rem] font-medium ${
                  selected === label ? "text-[#0065ff]" : "text-[#696969]"
                }`}
              >
                {label}
              </p>
            </MotionLink>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-6 border-t border-gray-200">
          <motion.div
            className="flex items-center gap-3 cursor-pointer text-[#ED0A34] font-medium"
            onClick={() => navigate("/login")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </motion.div>
        </div>
      </aside>

      {/* Main content */}
      <main className="w-[calc(100vw-240px)] h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
