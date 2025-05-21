import { useEffect, useState } from "react";
import "./App.css";
import { AppRoute } from "./routes/AppRoute";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="spinner-container">
          <div className="spinner" />
        </div>
      ) : (
        <AppRoute />
      )}
    </>
  );
}

export default App;
