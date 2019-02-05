// Your code goes here
function discount(){
    var moneySum = parseFloat(prompt("Enter amount of money:"));
    var discount = parseFloat(prompt ("Enter discount: "));
  if(moneySum <= 0){
        (alert("Invalid input data"))
    }else if(isNaN(moneySum)){
        (alert("Invalid input data"))
    }else if(moneySum === ""){
        (alert("Invalid input data"))
    }else if(moneySum > 9999999){
        (alert("Invalid input data"))
    }else if(isNaN(discount)){
        (alert("Invalid input data"))
    }else if(discount > 99){
        (alert("Invalid input data"))
    }else if(discount < 0){
        (alert("Invalid input data"))
    }else if(discount === ""){
        (alert("Invalid input data"))
    }else if(moneySum > 0 || moneySum < 9999999 || discount > 0 || discount < 99){
        var savemoney = moneySum/100*discount;
        var saleprice = moneySum-savemoney;
        (alert("Full price: " + moneySum+"$"));
        (alert("Discount: " + discount+"%"));
        (alert("Price with discount: " +Math.floor( saleprice* 100) / 100 +"$"));
        (alert("Saved money:  " +Math.floor( savemoney* 100) / 100 +"$"));
    }
}
discount();
