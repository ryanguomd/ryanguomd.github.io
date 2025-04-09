// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

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
