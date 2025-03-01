const toggleButton = document.getElementById('darkModeToggle');
const moonIcon = document.getElementById('moonIcon');
const sunIcon = document.getElementById('sunIcon');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  moonIcon.style.display = moonIcon.style.display === 'none' ? 'block' : 'none';
  sunIcon.style.display = sunIcon.style.display === 'none' ? 'block' : 'none';
});




