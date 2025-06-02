// Intersection Observer for scroll animations
export const initIntersectionObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe all sections
  document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
  });
};
