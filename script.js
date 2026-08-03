/*-----------------------------Login form-------------------------------*/
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();
        if(username==="" || phone==="" || password===""){
            alert("Please fill in all the login details.");
            return;
        }
        alert("Login Successful!");
        loginForm.reset();
        window.location.href="booking.html";
    });
}
    /*-------------------------------Booking Form------------------------------*/
const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const destination = document.getElementById("destination").value;
        const start = document.getElementById("start").value.trim();
        const date = document.getElementById("date").value;
        const tickets = document.getElementById("tickets").value;
        const confirmationMessage = document.getElementById("confirmationMessage");
        if (!destination || start === "" || date === "" || tickets === "") {
            alert("Please fill in all the booking details.");
            return;
        }
        confirmationMessage.innerHTML = `
            <strong>🎉 Booking Confirmed!</strong><br><br>
            Destination: <b>${destination.value}</b><br>
            Starting Point: <b>${start}</b><br>
            Travel Date: <b>${date}</b><br>
            Number of Tickets: <b>${tickets}</b><br><br>
            Thank you for choosing <b>VP Wander Wings</b>.<br>
            Have a safe and happy journey! ✈️
        `;
        bookingForm.reset();
    });
}
/*=========================================
        MINIMUM DATE
=========================================*/
const dateInput = document.getElementById("date");
if (dateInput) {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    dateInput.min = today.toISOString().split("T")[0];
}