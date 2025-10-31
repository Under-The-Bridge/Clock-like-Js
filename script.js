function updateDate(){
    let month = ["январь", "февраль", "март", "апрель", "май", "июнь","июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    let weekDay = ["пн","вт","ср","чт","пт","сб","вс"];
    let date = new Date();
    document.querySelector("#hour").innerText = date.getHours();
    document.querySelector("#minute").innerText = date.getMinutes();
    document.querySelector("#second").innerText = date.getSeconds();
    document.querySelector("#weekDay").innerText = `"${weekDay[date.getDay()-1]}"`;
    document.querySelector("#day").innerText = date.getDate();
    document.querySelector("#month").innerText = `"${month[date.getMonth()]}"`;
    document.querySelector("#year").innerText = date.getFullYear();
}
setInterval(updateDate,1000);
updateDate();