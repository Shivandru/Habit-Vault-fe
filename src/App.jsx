import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontFamily: "Figtree, sans-serif",
            fontSize: "14px",
          },
        }}
      />
      <AllRoutes />
    </div>
  );
}

export default App;
