// script.js

function toggleMode() {
    document.body.classList.toggle("dark-mode");
  
    // Save mode to localStorage
    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "light");
    }
  }
  
  // Load saved mode on page load
  window.onload = function () {
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      document.body.classList.add("dark-mode");
    }
  };
  