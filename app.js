document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  // Checkbox functionality
  const checkboxes = document.querySelectorAll('.ingredients input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      console.log(`${checkbox.checked ? 'Checked' : 'Unchecked'}`);
    });
  });

  // Print button functionality
  const printButton = document.querySelector('.print-button');
  printButton.addEventListener('click', () => {
    window.print();
  });
});