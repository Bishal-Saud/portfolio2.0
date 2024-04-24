import { useEffect, useState } from "react";

export default function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const userPref = window.localStorage.getItem("theme");
      return (
        userPref ||
        (window.matchMedia(preferDarkQuery).matches ? "dark" : "light")
      );
    } else {
      // Handle server-side rendering or non-browser environment
      return "light"; // or any default value
    }
  });

  const handleChange = (newMode) => {
    setMode(newMode);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", newMode);
      document.documentElement.classList.toggle("dark", newMode === "dark");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia(preferDarkQuery);

      const handleMediaChange = (e) => {
        handleChange(e.matches ? "dark" : "light");
      };

      handleMediaChange(mediaQuery);
      mediaQuery.addEventListener("change", handleMediaChange);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaChange);
      };
    }
  }, []);

  return [mode, handleChange];
}
