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
            const convertSeat = parseInt(seatElement);
            const updateSeat = convertSeat - 1;
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
        
        // Append selected seat to the items
      const selectedSeat = document.getElementById('selected-seat');
      const div = document.createElement("div");
      div.classList.add('flex', 'justify-between', 'mx-7');
      const p1 = document.createElement("p");
      const p2 = document.createElement("p");
      const p3 = document.createElement("p");
      

        p1.innerText = seat.innerText;
        p2.innerText = 'economy';
        p3.innerText = '550'
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectedSeat.appendChild(div);
      
    })
}
 // coupon 
    function applyBtn(){
        const inputt = document.getElementById('input');
        const inputValue = inputt.value
        if(inputValue === 'NEW15'){
          const discount = grandTk.innerText * 0.15;
          const grandTotal = grandTk.innerText - discount;
          grandTk.innerText = grandTotal;
        //   hidden
          document.getElementById('coupon').style.display = 'none';
        }
        else if(inputValue === 'Couple 20'){
            const discount = grandTk.innerText * 0.20;
            const grandTotal = grandTk.innerText - discount;
            grandTk.innerText = grandTotal;
            // hidden
            document.getElementById('coupon').style.display = 'none';
        }

        else{
            alert('Invalid coupon..!')
        }
    }

    // hide the coupon section
    // document.getElementById('apply-btn').addEventListener('click', function(){
    //     console.log('clicke')
    // })
 


