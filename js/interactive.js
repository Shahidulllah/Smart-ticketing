const seats = document.querySelectorAll('#A1, #A2, #A3, #A4, #B1, #B2, #B3, #B4');

let count = 0;
for(const seat of seats){
    seat.addEventListener('click', function(){

        if(count < 4){
            this.style.backgroundColor='#1DD100';
            this.style.color='white';
            count++;
        }
        else{
            alert("It's not available to buy more than four tickets..")
        }
    })
}