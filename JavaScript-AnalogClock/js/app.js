setInterval(setClock, 1000);

const hourHand = document.querySelector("#hourHand");
const minuteHand = document.querySelector("#minuteHand");
const secondHand = document.querySelector("#secondHand");

function setClock(){
    const currentDate = new Date();
    const secRatio = currentDate.getSeconds()/60;
    const minuteRatio = (secRatio + currentDate.getMinutes())/60;
    const hourRatio = (minuteRatio +currentDate.getHours())/12;

    console.log("Hello");
    setRotation(secondHand, secRatio);
    setRotation(minuteHand, minuteRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio*360);
}

setClock();