// Smooth scroll to a specific element
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80, // Adjust for header height
      behavior: 'smooth'
    });
  }
};

// Scroll to top of the page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export default scrollToSection;
