

// Function to change the passenger count
function changeCount(type, increment) {
    let countElement = document.getElementById(`${type}-count`);
    let count = parseInt(countElement.innerText);

    if (count + increment >= 0) {
        countElement.innerText = count + increment;
    }
}

// Event listener to toggle flight options visibility when searching
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('booking-form').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission from reloading the page

        // Hide the form after submission
        document.querySelector('.form-container').style.display = 'none';

        // Display the available flights section
        document.querySelector('.available-flights').style.display = 'block';
    });
});

// Handle flight selection and display the seat map
const flightButtons = document.querySelectorAll('.select-flight');
flightButtons.forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.available-flights').style.display = 'none';
        document.querySelector('.seat-map').style.display = 'block';
    });
});

// Seat selection logic
const seats = document.querySelectorAll('.seat.available');
const bookTicketsButton = document.querySelector('.book-tickets');

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected'); // Deselect seat if already selected
            bookTicketsButton.style.display = 'none'; // Hide the Book Tickets button if no seat is selected
        } else {
            document.querySelectorAll('.seat.selected').forEach(s => s.classList.remove('selected')); // Deselect any previous selection
            seat.classList.add('selected'); // Select the clicked seat
            bookTicketsButton.style.display = 'block'; // Show the Book Tickets button when a seat is selected
        }
    });
});

// Proceed to payment after selecting a seat and clicking Book Tickets
bookTicketsButton.addEventListener('click', () => {
    document.querySelector('.seat-map').style.display = 'none';
    document.querySelector('.payment-section').style.display = 'block';
});

// Process payment and show confirmation
document.getElementById('payment-form').addEventListener('submit', function (e) {
    e.preventDefault();

    document.querySelector('.payment-section').style.display = 'none';
    document.querySelector('.confirmation-section').style.display = 'block';

    const bookingRef = 'REF' + Math.floor(Math.random() * 1000000);
    const eTicket = 'ETK' + Math.floor(Math.random() * 1000000);

    document.getElementById('booking-ref').innerText = bookingRef;
    document.getElementById('e-ticket').innerText = eTicket;
});



