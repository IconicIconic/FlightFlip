document.getElementById("sellTicketForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page from refreshing

    // Get user input
    let ticket = {
        from: document.getElementById("sellFrom").value,
        to: document.getElementById("sellTo").value,
        date: document.getElementById("sellDate").value,
        price: document.getElementById("sellPrice").value,
        airline: document.getElementById("sellAirline").value
    };

    // Get existing tickets or initialize an empty array
    let tickets = JSON.parse(localStorage.getItem("userTickets") || "[]");

    // Add the new ticket
    tickets.push(ticket);

    // Save back to localStorage
    localStorage.setItem("userTickets", JSON.stringify(tickets));

    alert("Your ticket has been listed!");
    document.getElementById("sellTicketForm").reset(); // Clear form
});
