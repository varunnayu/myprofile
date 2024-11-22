// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Reveal Animations for Sections
const revealElements = document.querySelectorAll('.home, .about, .skills, .projects, .experience, .contact');

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight / 1.25;
    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < triggerPoint) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();  // Initial check on page load


// Function to handle form submission
function submitForm() {
    // Prevent the form from actually submitting
    event.preventDefault();

    // Hide the form and display the "Thank You" message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';

    // Optionally, you can clear the form fields (uncomment the line below to enable)
    // document.getElementById('contactForm').reset();

    return false; // Prevent the form from reloading the page
}





const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});




//preloader
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");
  
    // Show the preloader for 3 seconds
    setTimeout(() => {
      preloader.classList.add("hidden"); // Hide the preloader
      content.style.display = "block";  // Show the main content
    }, 1000);
  });
  