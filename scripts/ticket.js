// "Buy Tickets" button scroll to the ticket-buying section

  document.addEventListener('DOMContentLoaded', function() {
    // Get the button and the target section
    const buyTicketsButton = document.getElementById('buyTicketsButton');
    const mainSection = document.getElementById('mainSection');

    // Add event listener to the button
    buyTicketsButton.addEventListener('click', () => {
      // Scroll to the ticket section smoothly
      mainSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
