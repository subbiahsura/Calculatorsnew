function Convert(event) {
    event.preventDefault();
    
    var indianRupees = parseFloat(document.getElementById("indian").value);
    if(isNaN(indianRupees) ){
        document.getElementById("output").value = "Please Enter a valid Rupees";
    }else{
    var currency = document.getElementById("currencies").value;
    var dollar = 0.012;
    var Euro =0.011;
    var riyals =0.044;
    var srilankarupees = 3.85;
    
 switch(currency){
    case "Dollars":
        result = indianRupees *dollar;
        break;
        case "Srilankan Rupees":
        result = indianRupees *srilankarupees;
        break;
        case "riyals":
        result = indianRupees *riyals;
        break;
        case "Euro":
        result = indianRupees *Euro;
        break;
 }
    
    document.getElementById("output").value = result;
}
}

function CheckBMI(){
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);
    var bmi = weight / (height * height) ;
    document.getElementById("result").value = bmi.toFixed(2);
    var bmicategory= checkBmiCategory(bmi);
    document.getElementById("Category").innerHTML=bmicategory;
    
}
function  checkBmiCategory(bmi){
    if (bmi < 18.5) {
        return "Underweight , please Try to Eat";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight ,maintain ";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight ,start Exercise ";
    } else {
        return "Obese";
    }
}

function calculateTip(){
    var BillAmount = parseFloat(document.getElementById("BillAmount").value);
    var Services = parseFloat(document.getElementById("Services").value);
    var noofPersons = parseFloat(document.getElementById("noofPersons").value);
    if(isNaN(BillAmount) || Services =="Select"){
        document.getElementById("tipOutput").innerHTML = "Please enter the valid Value";
        return;
    }
    var tipresult = (BillAmount*Services) / noofPersons;
    document.getElementById("tipOutput").innerHTML =`for Each &#x20B9 ${tipresult}`;

}
function calculateSalePrice(){
    var originalPrice = parseFloat(document.getElementById("OriginalPrice").value);
    var discount = parseFloat(document.getElementById("discount").value);
    if(isNaN(originalPrice) || discount>=100.01){
        document.getElementById("saleprice").innerHTML="Please enter a valid value";
        return;
    }
    var salepriceresult = originalPrice - (originalPrice * discount / 100)
    document.getElementById("saleprice").innerHTML=` &#x20B9 ${salepriceresult}`;
}

function startTimer(){
    var countertime=1000;
    var clocktimer = document.querySelector(".timer");
    var button = document.getElementById("myButton");
    var messagebox = document.getElementById("message");
    var incbtn = document.getElementById("incbtn");
    messagebox.innerHTML = "Now click the button to start the count"
    button.disabled = true;
    incbtn.disabled=false;
    var count = document.getElementById("count") ;
    count.disabled =false;
    setInterval(()=>{
        if(countertime > 0){
            countertime--;
            clocktimer.innerHTML = countertime;
            if(countertime == 0){
                incbtn.disabled= true;
                alert(`Timesup you clicked ${clickcount} times`)
                button.disabled = false;
            }
        }
    },1)
    
}
var clickcount = 0;
function Increment(){ 
    clickcount++;
    console.log(clickcount);
        var countresult = document.querySelector("#count") ;
        countresult.value= clickcount;
    
}