document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.add(savedTheme);
    themeSwitch.checked = savedTheme === "light-mode";
  }
  // Toggle theme on switch change

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      document.body.classList.add("light-mode");

      document.body.classList.remove("dark-mode");

      localStorage.setItem("theme", "light-mode");
    } else {
      document.body.classList.add("dark-mode");

      document.body.classList.remove("light-mode");

      localStorage.setItem("theme", "dark-mode");
    }
  });
});

//menu
const menuIcon = document.getElementById("menu");

const sideMenu = document.getElementById("side-menu");

menuIcon.addEventListener("click", () => {
  // Toggle the side menu
  sideMenu.classList.toggle("open");

  // Slide in additional content
  additionalContent.classList.toggle("show");
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent immediate navigation

    // Add a class to trigger slide-out animation
    document.body.classList.add('slide-out');
    
    // Get the target URL
    const targetUrl = this.getAttribute('data-href');
    
    // Wait for animation to complete, then navigate
    setTimeout(() => {
      window.location.href = targetUrl;
    }, 10); // Adjust timeout to match animation duration
  });
});



// JavaScript for "down-to-up" animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.study');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
});
//visitor
// Get the counter value from localStorage or initialize it
let visitorCount = parseInt(localStorage.getItem('visitorCount')) || 0;

// Increment the visitor count
visitorCount++;

// Save the updated count back to localStorage
localStorage.setItem('visitorCount', visitorCount);

// Function to display the count in number boxes
function displayCount(count) {
  const digits = String(count).padStart(3, '0').split('');
  digits.forEach((digit, index) => {
    const box = document.getElementById(`digit-${index + 1}`);
    box.textContent = digit;
  });
}

// Display the updated count
displayCount(visitorCount);

document.addEventListener("DOMContentLoaded", () => {
  ScrollReveal().reveal('.study', {
    origin: 'bottom', // Animation from bottom
    distance: '50px', // Move 50px before appearing
    duration: 1000, // Animation duration (in ms)
    easing: 'ease-in-out', // Smooth animation
    reset: false // Elements reveal only once
  });

  ScrollReveal().reveal('.feature', {
    origin: 'left',
    distance: '80px',
    duration: 1200,
    easing: 'ease-in-out',
    reset: false
  });

  ScrollReveal().reveal('.card', {
    origin: 'right',
    distance: '60px',
    duration: 1000,
    easing: 'ease-in-out',
    reset: false
  });
});


