function ticketPrice(ticketQuantity) {

    let f100Rate = 100;
    let s100Rate = 90;
    let restRate = 70;

    if (ticketQuantity <= 100) {
        let price = ticketQuantity * f100Rate
    }
    else if (ticketQuantity <= 200) {
        const f100prc = 100 * f100Rate;
        const restTicketQuantity = ticketQuantity - 100
        const restTicketPrice = restTicketQuantity * s100Rate;
        const totalPrice = f100prc + restTicketPrice;
    }

}