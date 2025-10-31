function updateDate(){
    let monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь","июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
    let date = new Date();
    document.querySelector("#hour").innerText = date.getHours();
    document.querySelector("#minute").innerText = date.getMinutes();
    document.querySelector("#second").innerText = date.getSeconds();
    document.querySelector("#day").innerText = date.getDay();
    document.querySelector("#month").innerText = `"${monthNames[date.getMonth()]}"`;
    document.querySelector("#year").innerText = date.getFullYear();
}
setInterval(updateDate,1000);
updateDate();