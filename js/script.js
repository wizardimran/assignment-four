function flightsTicket( category,isIncrease ){
        const inputs = document.getElementById( category + "-input" );
        const counts = parseInt(inputs.value);
        
        let newCounts = counts;
        if( isIncrease == true ){
            newCounts = counts + 1;
        }else if(isIncrease == false && counts > 0){
            newCounts = counts - 1;
        }
        inputs.value = newCounts;

        let TicketPrice = 0 ;
        if( category == 'class' ){
            TicketPrice = newCounts * 150;
        }else if(category == 'economy'){
            TicketPrice = newCounts * 100;
        }
        PriceChargeCalculation();
        }


function PriceChargeCalculation(){
    const classInput = document.getElementById( "class-input" ).value;
    const firstClass = parseInt( classInput );

    const economyInput = document.getElementById("economy-input").value;
    const economyClass = parseInt(economyInput);

    const subTotal = firstClass * 150 + economyClass * 100; 
    document.getElementById("sub-total").innerText ='$' + subTotal;

    const vat = subTotal * 0.1 ;
    document.getElementById("vat-total").innerText ='$' + vat;

    const grandTotal = subTotal + vat;
    document.getElementById("grand-total").innerText ='$' + grandTotal;
}