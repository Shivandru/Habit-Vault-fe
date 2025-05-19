import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/ui/Container";
import Button from "../components/ui/Button";
import { generalFunction } from "../configs/generalFunction";
import toast from "react-hot-toast";
import useLocalStorage from "../hooks/useLocalStorage";
import Loader from "../components/ui/Loader"

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [userName, setUserName] = useLocalStorage("userName", "");
  const [userCredentials, setUserCredentials] = useLocalStorage(
    "userCredentials",
    ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { url } = generalFunction.createUrl("user/login");
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        toast.error("Login failed!");
        return;
      }
      const data = await res.json();
      const user = data?.user;
      if (user) {
        setUserName(user.name);
        setUserCredentials(user.email);
      }
      toast.success("Login successful!");
      setFormData({
        email: "",
        password: "",
      });
      setIsLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4 pt-24 pb-12">
      {isLoading && <Loader />}
      <Container className="max-w-md w-full bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
          Log in to Habit Vault
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>

          <Button type="submit" className="w-full">
            Log in
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-blue-600 font-medium hover:underline cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </Container>
    </section>
  );
};

export default Login;
