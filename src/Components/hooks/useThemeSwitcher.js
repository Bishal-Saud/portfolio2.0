import React, { useEffect, useState } from "react";

// export default function useThemeSwitcher() {
//   const preferDarkQuery = "(prefer-color-scheme:dark)";
//   const [mode, setMode] = useState("");

//   useEffect(() => {
//     const mediaQuery = window.matchMedia(preferDarkQuery);
//     const userPref = window.localStorage.getItem("theme");

//     const handleChange = () => {
//       if (userPref) {
//         let check = userPref === "dark" ? "dark" : "light";
//         setMode(check);
//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       } else {
//         let check = mediaQuery.matches ? "dark" : "light";
//         setMode(check);
//         if (check === "dark") {
//           document.documentElement.classList.add("dark");
//         } else {
//           document.documentElement.classList.remove("dark");
//         }
//       }
//     };
//     handleChange();
//     mediaQuery.addEventListener("change", handleChange);
//     return () => mediaQuery.removeEventListener("change", handleChange);
//   }, []);

//   useEffect(() => {
//     if (mode === "dark") {
//       window.localStorage.setItem("theme", "dark");
//       document.documentElement.classList.add("dark");
//     }
//     if (mode === "light") {
//       window.localStorage.setItem("theme", "light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, [mode]);

//   return [mode, setMode];
// }

export default function useThemeSwitcher() {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState(() => {
    const userPref = window.localStorage.getItem("theme");
    return (
      userPref ||
      (window.matchMedia(preferDarkQuery).matches ? "dark" : "light")
    );
  });

  const handleChange = (newMode) => {
    setMode(newMode);
    window.localStorage.setItem("theme", newMode);
    document.documentElement.classList.toggle("dark", newMode === "dark");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const handleMediaChange = (e) => {
      handleChange(e.matches ? "dark" : "light");
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  return [mode, handleChange];
}
