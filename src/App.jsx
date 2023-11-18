import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener("resize", () => {
      if (window.innerWidth < 700) {
        setIsMobile((prev) => !prev);
      }
    });

    return () => removeEventListener("resize", listener);
  }, [window.innerWidth]);

  return (
    <>
      <Navbar isMobile={isMobile} setIsMobile={setIsMobile} />
      <HomePage isMobile={isMobile} />
    </>
  );
}

export default App;
