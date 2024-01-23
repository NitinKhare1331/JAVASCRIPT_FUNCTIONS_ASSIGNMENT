function Tax(income){
    if(income <= 300000) {
        console.log("No Tax applicable");
    }
    else if(income>=300001 && income <= 600000){
        let val = (5*income)/100;
        console.log("5% tax is applicable and tax amount is",val);
    }
    else if(income>=600001 && income <=900000){
        let val = (10*income)/100;
        console.log("10% tax is applicable and tax amount is",val);
    }
    else if(income>=900001 && income <=1200000){
        let val = (15*income)/100;
        console.log("15% tax is applicable and tax amount is",val);
    }
    else if(income>=1200001 && income <=1500000){
        let val = (20*income)/100;
        console.log("20% tax is applicable and tax amount is",val);
    }
    else {
        let val = (30*income)/100;
        console.log("30% tax is applicable and tax amount is",val);
    }
    return ("Thankyou")
}
console.log(Tax(1250000));