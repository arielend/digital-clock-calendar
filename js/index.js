//Declaración de variables
const dayOfWeeks = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

let hourDecenDigit = document.getElementById("hDecenDigit");
let hourUnitDigit = document.getElementById("hUnitDigit");
let minuteDecenDigit = document.getElementById("mDecenDigit");
let minuteUnitDigit = document.getElementById("mUnitDigit");
let secondDecenDigit = document.getElementById("sDecenDigit");
let secondUnitDigit = document.getElementById("sUnitDigit");

let dayWeek = document.getElementById("dayWeek");
let dateDecenDigit = document.getElementById("dateDecenDigit");
let dateUnitDigit = document.getElementById("dateUnitDigit");

let monthDecenDigit = document.getElementById("monthDecenDigit");
let monthUnitDigit = document.getElementById("monthUnitDigit");

let yearMilDigit = document.getElementById("yearMilDigit");
let yearCentDigit = document.getElementById("yearCentDigit");
let yearDecenDigit = document.getElementById("yearDecenDigit");
let yearUnitDigit = document.getElementById("yearUnitDigit");

//Agrega un cero delante de los string hasta completar la longitud requerida para normalizar la información mostrada
function padStart(value, length){
    return String(value).padStart(length, "0");
}

//Modifica la ruta del archivo de imagen mostrado en cada digito del calendario y del reloj
function modifyPath(str){
    return "assets/img/" + str +".png";
}

function steps(){
    const myDate = new Date();
    const [
        years, months, date, day, hours, minutes, seconds, 
    ] = [
        myDate.getFullYear(), myDate.getMonth()+1, myDate.getDate(), myDate.getDay(), myDate.getHours(), myDate.getMinutes(), myDate.getSeconds(),
        ];
    
    let strYears = padStart(years, 4);
    let strMonths = padStart(months, 2);
    let strDate = padStart(date, 2);
    let strHours = padStart(hours, 2);
    let strMinutes = padStart(minutes, 2);
    let strSeconds = padStart(seconds, 2);

    switch(day){
        case 0:
            dayWeek.setAttribute("src", "assets/img/dom.png");
            break;
        
        case 1:
            dayWeek.setAttribute("src", "assets/img/lun.png");
            break;

        case 2:
            dayWeek.setAttribute("src", "assets/img/mar.png");
            break;
        
        case 3:
            dayWeek.setAttribute("src", "assets/img/mie.png");
            break;
        
        case 4:
            dayWeek.setAttribute("src", "assets/img/jue.png");
            break;
        
        case 5:
            dayWeek.setAttribute("src", "assets/img/vie.png");
            break;
        
        case 6:
            dayWeek.setAttribute("src", "assets/img/sab.png");
            break;
        
        default:
            return false;
    }

    dateDecenDigit.setAttribute("src", modifyPath(strDate[0]));
    dateUnitDigit.setAttribute("src", modifyPath(strDate[1]));

    monthDecenDigit.setAttribute("src", modifyPath(strMonths[0]));
    monthUnitDigit.setAttribute("src", modifyPath(strMonths[1]));

    yearMilDigit.setAttribute("src", modifyPath(strYears[0]));
    yearCentDigit.setAttribute("src", modifyPath(strYears[1]));
    yearDecenDigit.setAttribute("src", modifyPath(strYears[2]));
    yearUnitDigit.setAttribute("src", modifyPath(strYears[3]));

    hourDecenDigit.setAttribute("src", modifyPath(strHours[0]));
    hourUnitDigit.setAttribute("src", modifyPath(strHours[1]));

    minuteDecenDigit.setAttribute("src", modifyPath(strMinutes[0]));
    minuteUnitDigit.setAttribute("src", modifyPath(strMinutes[1]));

    secondDecenDigit.setAttribute("src", modifyPath(strSeconds[0]));
    secondUnitDigit.setAttribute("src", modifyPath(strSeconds[1]));
}

steps();
setInterval(steps, 1000);