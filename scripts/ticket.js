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

// ***************how seats left from  total**************

    document.addEventListener("DOMContentLoaded", () => {
      let seatbooking = 0;
      const seatbookingelement = document.getElementById('seatbooking');
      seatbookingelement.innerText = seatbooking;


    let totalSeats = 40;  // Set total seats
    const totalSeatsDisplay = document.getElementById("totalSeats");
  // Update the display with the initial total
    totalSeatsDisplay.innerText = totalSeats;
    // selected all seats
    const seats = document.querySelectorAll(".seat");
 
    // Add click event listener to each seat
    seats.forEach(seat => {
      seat.addEventListener("click", () => {
        // Check if the seat is not already selected
        if (!seat.classList.contains("selected")) {
          seat.classList.add("selected");  // Add selected class (turns green)
          totalSeats--;  // Decrease the total seat count
          seatbooking++;
        }
       else {
        // Deselect the seat (if allowed)
        seat.classList.remove("selected");
        totalSeats++;
        seatbooking--;
      }
        // Update the total seat display
        totalSeatsDisplay.textContent = totalSeats;
        seatbookingelement.textContent = seatbooking;
      });
    });
  });


 

