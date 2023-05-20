const toggleBtn = document.querySelector('.toggle-btn');
const popupSection = document.querySelector('.popup-section');

toggleBtn.addEventListener('click', () => {
  popupSection.style.display = (popupSection.style.display === 'none') ? 'block' : 'none';
});
