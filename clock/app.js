setInterval(setclock, 1000);


const hourhand = document.querySelector('#hour');
const minutehand = document.querySelector('#minute');
const secondhand = document.querySelector('#second');

function setclock() {   
    const currentdate = new Date(); 
    const secondratio = currentdate.getSeconds() / 60;
    const minuteratio = (secondratio + currentdate.getMinutes()) / 60;
    const hourratio = (minuteratio + currentdate.getHours()) / 12;
    setRotation(secondhand, secondratio);
    setRotation(minutehand, minuteratio);
    setRotation(hourhand, hourratio);
}

function setRotation(elemento, rotationRatio) {
    elemento.style.setProperty('--rotation', rotationRatio*360);
  }

  setclock();