import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Layers, LogOut, LayoutDashboard, BarChart2 } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ui/ThemeToggle";

const DashboardWrapper = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState("Dashboard");
  const MotionLink = motion(Link);

  const navItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Analytics", path: "/analytics", icon: BarChart2 },
  ];

  useEffect(() => {
    const path = location?.pathname;
    console.log(path);
    if (path.includes("dashboard")) {
      setSelected("Dashboard");
    } else if (path.includes("analytics")) {
      setSelected("Analytics");
    }
  }, [location?.pathname]);

  return (
    <div className="flex">
      <aside className="w-60 h-screen border-r border-[var(--primary-borderColor)] flex flex-col">
        <div className="p-6">
          <div
            className="flex items-center text-[var(--primary-text)] font-bold text-xl cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Layers className="mr-2" />
            <span>Habit Vault</span>
          </div>
        </div>
        <nav className="flex-1 p-6 flex flex-col gap-2 overflow-auto">
          {navItems.map(({ label, path, icon: Icon }) => (
            <MotionLink
              key={label}
              to={path}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`py-2.5 px-2 flex items-center gap-3 rounded-md transition-all ${
                selected === label
                  ? "bg-[#F4F4FF] shadow-[rgba(100,100,100,0.15)_0px_2px_8px]"
                  : "hover:bg-gray-100"
              }`}
            >
              <Icon
                className={`w-5 h-5 ${
                  selected === label ? "text-[#0065ff]" : "text-[#696969]"
                }`}
              />
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

        <div className="p-6 border-t border-[var(--primary-borderColor)] flex flex-col gap-4">
          <motion.div
            className="flex items-center justify-start w-full px-0 gap-3 font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ThemeToggle />
          </motion.div>
          {/* <motion.div
            className="flex items-center gap-3 cursor-pointer text-[#ED0A34] font-medium"
            onClick={() => navigate("/login")}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <LogOut size={18} />
            <span>Logout</span>
          </motion.div> */}
        </div>
      </aside>
      <div className="w-[calc(100vw - 15rem)] h-screen flex flex-col">
        <div className="w-full h-16 p-4 border-b border-[var(--primary-borderColor)] text-[var(--secondary-color)]">
          {selected}
        </div>
        <main className="w-[calc(100vw-240px)] h-full overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardWrapper;
