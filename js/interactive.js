const seats = document.querySelectorAll('#A1, #A2, #A3, #A4, #B1, #B2, #B3, #B4, #C1, #C2, #C3, #C4');

let count = 0;
for (const seat of seats) {
    seat.addEventListener('click', function () {

        if (count < 4) {
            this.style.backgroundColor = '#1DD100';
            this.style.color = 'white';
            count++;

            // Seat Left function
            const seatLeft = document.getElementById('seatLeft');
            const seatElement = seatLeft.innerText;
            const seat = parseInt(seatElement);
            const updateSeat = seat - 1;
            seatLeft.innerText = updateSeat;


            // Seat add function
            const seatId = document.getElementById('selectedSeat');
            const seatValue = seatId.innerText;
            const seatAdd = parseInt(seatValue)
            const addedSeat = seatAdd + 1;
            seatId.innerText = addedSeat;


            // Payment add
            const payments = document.getElementById('totalPrice');
            const initialTk = payments.innerText;
            const initialTkInt = parseInt(initialTk);
            const currnetTk = 550 * addedSeat;
            payments.innerText = currnetTk;

            // Grand Total
            const grandTk = document.getElementById('grandTk');
            const grandPayment = grandTk.innerText;
            const validTk = parseInt(grandPayment);
            grandTk.innerText = currnetTk;
        }
        else {
            alert("It's not available to buy more than four tickets..")
        }
    })
}


