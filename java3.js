let valueDisplays=document.querySelectorAll(".number");
let interval=4000;

valueDisplays.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration=Math.floor(interval/endValue);
    let counter=setInterval(function(){
        startValue+=5;
        valueDisplay.textContent=startValue;
        if (startValue==endValue){
            clearInterval(counter);
        }
    },duration);
});