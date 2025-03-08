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

// disabling ctrl + u
document.addEventListener("contextmenu", function (event) {
    event.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key.toLowerCase() === "u") {
        event.preventDefault(); // Disable Ctrl + U
        alert("View Source is disabled!");
    }
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
        event.preventDefault(); // Disable Ctrl + Shift + I (DevTools)
        alert("Developer tools are disabled!");
    }
    if (event.key === "F12") {
        event.preventDefault(); // Disable F12 (DevTools)
        alert("Developer tools are disabled!");
    }
});
