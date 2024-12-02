// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript is connected!');

  // Add interactivity to checkboxes
  const checkboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      // Log which checkbox was clicked
      console.log(`${checkbox.value} was ${checkbox.checked ? 'checked' : 'unchecked'}`);
    });
  });

  // Example feature: Add a toggle for light/dark mode
  const toggleButton = document.querySelector('#theme-toggle');
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      console.log('Dark mode toggled!');
    });
  }
});