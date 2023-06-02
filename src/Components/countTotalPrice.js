export const countTotalPrice = orderData =>{
    let subTotal = 0;
    orderData.forEach(order => {
        subTotal = subTotal + order.totalPrice
    });

    return subTotal
}
