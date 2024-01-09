document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements that will be animated
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const bio = document.getElementById('bio');
    const aspiring = document.getElementById('aspiring');
    const dataAnalyst = document.getElementById('data-analyst');
  
    // Function to add a class to an element to start its animation, after a specified delay
    function animateElement(element, className, delay) {
      setTimeout(() => {
        element.classList.add(className);
      }, delay);
    }
  
    // Start the animations at the specified intervals
    animateElement(firstName, 'slide-in', 1200); // RIYA slides in 1.2s after page load
    animateElement(lastName, 'slide-in', 2200); // MATHUR slides in 1s after RIYA
    animateElement(bio, 'fade-in', 3200); // Description fades in immediately after MATHUR
    animateElement(aspiring, 'fade-in', 4200); // ASPIRING fades in after the description
    animateElement(dataAnalyst, 'fade-in', 4700); // DATA ANALYST fades in shortly after ASPIRING
  });
  