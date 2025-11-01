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

let settingsOpened = false;

addEventListener("keydown",(i)=>{
    if(i.key == "s"){
        OpenCloseSettings();
    }
});

function OpenCloseSettings(){
    let settingsPanel = document.querySelector("#settingsPanel");
    settingsOpened = !settingsOpened;
    settingsPanel.style.transform = `translate(-35vw,${settingsOpened?0:-101}vh)`;
}


document.querySelector("#bgColor").addEventListener("input",()=>{
    changeColor("#Background","#bgColor");
});
document.querySelector("#textColor").addEventListener("input",()=>{
    changeColor(".Text","#textColor");
});
document.querySelector("#letColor").addEventListener("input",()=>{
    changeColor(".ReservedWord","#letColor");
});
document.querySelector("#intColor").addEventListener("input",()=>{
    changeColor(".Integer","#intColor");
});
document.querySelector("#strColor").addEventListener("input",()=>{
    changeColor(".String","#strColor");
});

function changeColor(elem,id){
    let element = document.querySelectorAll(elem);
    let color = document.querySelector(id);
    if(elem == "#Background"){
        element.style.backgroundColor = color.value;
    }else{
        element.forEach(i => {
            i.style.color = color.value;
        });
    }
}