// Event listener for "BUY NOW" buttons
document.querySelectorAll('.buy-now, .buy-now-footer').forEach(button => {
  button.addEventListener('click', () => {
      window.open('https://your-buy-link.com', '_blank');
  });
});

// Event listener for "CHART" button
document.querySelector('.chart').addEventListener('click', () => {
  window.open('https://your-chart-link.com', '_blank');
});

// Event listener for "JOIN US" button in the about section
document.querySelector('.join-us').addEventListener('click', () => {
  window.open('https://your-join-us-link.com', '_blank');
});

// Event listener for "CONTRACT ADDRESS" button in the suinomics section
document.querySelector('.contract-address').addEventListener('click', () => {
  // Copy the contract address to the clipboard
  const contractAddress = '0xYourContractAddress';
  navigator.clipboard.writeText(contractAddress)
      .then(() => {
          alert('Contract address copied to clipboard!');
      })
      .catch(err => {
          console.error('Failed to copy: ', err);
      });
});

// Smooth scroll functionality for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add a simple loading animation for content (optional)
window.addEventListener('load', () => {
  document.querySelector('body').classList.add('loaded');
});
