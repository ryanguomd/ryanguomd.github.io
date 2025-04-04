// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  
    // ======== DARK MODE TOGGLE ========
  
    // Check localStorage to see if "dark-mode" was previously enabled
    if (localStorage.getItem("darkModeEnabled") === "true") {
      document.body.classList.add("dark-mode");
    }
  
    // Listen for toggle button clicks
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
  
      // Save the user's preference to localStorage
      if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkModeEnabled", "true");
      } else {
        localStorage.setItem("darkModeEnabled", "false");
      }
    });
  
    // ======== SCROLL TO TOP BUTTON ========
    window.addEventListener("scroll", function () {
      // Show the button after scrolling down 300px
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
      } else {
        scrollToTopBtn.style.display = "none";
      }
    });
  
    // When the user clicks the button, scroll to the top of the document
    scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  