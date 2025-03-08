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

// Disabling ctrl + u
 document.addEventListener("contextmenu", function(event) {
        event.preventDefault(); // Disable right-click
    });

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "u" || event.key === "U" || event.key === "s" || event.key === "S")) {
            event.preventDefault(); // Disable Ctrl + U (View Source) and Ctrl + S (Save Page)
            alert("Viewing source is disabled!");
        }
        if (event.ctrlKey && event.shiftKey && (event.key === "i" || event.key === "I")) {
            event.preventDefault(); // Disable Ctrl + Shift + I (DevTools)
            alert("Developer tools are disabled!");
        }
        if (event.key === "F12") {
            event.preventDefault(); // Disable F12 (DevTools)
            alert("Developer tools are disabled!");
        }
    });
