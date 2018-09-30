// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }else if(currency<=0){
        return {};
    }else{
    let half = 0;
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    while(currency>=50){
        currency-=50;
        half++;
    }
    while(currency>=25){
        currency-=25;
        quarter++;
    }
    while(currency>=10){
        currency-=10;
        dime++;
    }
    while(currency>=5){
        currency-=5;
        nickel++;
    }
    while(currency>0){
        currency-=1;
        penny++;
    }
    return {"H:":half, "Q:":quarter, "D:": dime, "N":nickel, "P:":penny};
    }
}
