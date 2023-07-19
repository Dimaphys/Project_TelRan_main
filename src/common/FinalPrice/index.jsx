
function DiscontValue(price, discont_price) {
     return Math.round(((price - discont_price) / price) * 100);
}

function FinalPrice(el) {
    return el.discont_price ? el.discont_price : el.price;
}

export {DiscontValue, FinalPrice}