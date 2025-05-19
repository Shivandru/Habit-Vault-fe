import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useLocalStorage("theme", false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="w-10 h-10 flex items-center justify-center gap-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
      title="Toggle theme"
    >
      {isDark ? (
        <>
          <Sun className="w-5 h-5 text-yellow-500" />
        </>
      ) : (
        <>
          <Moon className="w-5 h-5 text-gray-800" />
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
