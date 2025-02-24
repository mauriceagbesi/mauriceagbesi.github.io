/* Navbar*/

/* Hero */
document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed(".typed", {
    strings: [ "Invicible", "UI/UX Designer", "Freelancer", "Web-Developer"],
    typeSpeed: 150,
    backSpeed: 60,
    backDelay: 3000,
    loop: true,
  });
});

/* video speed */
document.getElementById("myVideo").playbackRate = 4; // Plays at 2x speed

 // Show the button when scrolling down

 document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("backToTopBtn");

  if (!backToTopButton) {
    console.error("Back to Top button not found!");
    return;
  }

  // Check when the user scrolls
  window.addEventListener("scroll", function () {
    console.log("Scrolling..."); // Debugging log

    if (window.scrollY > 300) {
      backToTopButton.style.display = "flex"; // Show button
    } else {
      backToTopButton.style.display = "none"; // Hide button
    }
  });
});

// Function to scroll smoothly to the top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
