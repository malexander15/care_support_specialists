const observerOptions = {
  threshold: 0.2 // Trigger when 20% of the card is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Optional: Stop watching once it has appeared
      observer.unobserve(entry.target); 
    }
  });
}, observerOptions);

// Start watching all elements with your class
document.querySelectorAll('.reveal-on-scroll').forEach(card => {
  observer.observe(card);
});
