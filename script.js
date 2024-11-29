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
  
  const query = new URLSearchParams(window.location.search).get('data');

//google sheets

    fetch('https://script.google.com/macros/s/AKfycbzGbYa10byzSnHXMY-c3mWEM40L_-s-uHN7-tT35Gz58-wQPTeUGcngWOHbFRal6jb68g/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    });
    
//dark mode toggle
    document.getElementById('toggle-dark-mode').addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    
        // Optionally save the user's preference in localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Apply the saved theme on page load
    window.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    });
    


//scroll animation or bhevaior
// Throttle function to improve performance
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
// Check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
}

// Apply the 'visible' class when an element comes into view
function handleScrollAnimation() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        if (isInViewport(el)) {
            el.classList.add('visible');
        }
    });
}

// Throttle scroll event listener for better performance
const throttledScroll = throttle(handleScrollAnimation, 200);

// Run on scroll and on page load
window.addEventListener('scroll', throttledScroll);
window.addEventListener('load', handleScrollAnimation);
