// Get the cloud element
const cloud = document.querySelector('.cloud');

// Add an event listener to make the cloud move randomly
cloud.addEventListener('mouseover', () => {
  cloud.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
});
