/**
 * Destinations setup
 * 
 */
let inputDates = document.querySelector('#datepicker');
let datepicker = new HotelDatepicker(inputDates, {
    inline: true,
    showTopbar: false,
    onDayClick: () =>{
        if(info.flightInfo.travel_type === 2){
            formatDateForLabel(document.querySelector('.datepicker__month-day--first-day-selected').getAttribute('time'), null, 'label-dates');
            hideModal('select-dates');
        }
    },
    onSelectRange: () =>{
        formatDateForLabel(document.querySelector('.datepicker__month-day--first-day-selected').getAttribute('time'), document.querySelector('.datepicker__month-day--last-day-selected').getAttribute('time'), 'label-dates');
        hideModal('select-dates');
    }
});
/*
const tokenn = KJUR.jws.JWS.sign(null, { alg: "HS256" }, {message: 'P1'}, JWT_SIGN);

fetch(`${API_URL}/api/bot/status`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({token: tokenn})
});
*/

const airports = [
    {
        city: "Arauca",
        country: "",
        code: "",
        name: 'Santiago Pérez Quiroz'
    },
    {
        city: "Arequipa",
        country: "",
        code: "JUL",
        name: 'El Eden Intl.'
    },
    {
        city: "Barrancabermeja",
        country: "",
        code: "YOA",
        name: 'Yaguiríez'
    },
    {
        city: "Trujillo",
        country: "",
        code: "CHM",
        name: 'Ernesto Cortissoz'
    },
    {
        city: "Lima",
        country: "",
        code: "LIM",
        name: 'El Dorado Intl.'
    },
    {
        city: "Cusco",
        country: "",
        code: "HUU",
        name: 'Palonegro Intl.'
    },
    {
        city: "Iquitos",
        country: "",
        code: "TRU",
        name: 'Alfonso Bonilla Aragón'
    },
    {
        city: "Chiclayo",
        country: "",
        code: "AQP",
        name: 'Rafael Nuñez Intl.'
    },
    {
        city: "Huancayo",
        country: "",
        code: "TPP",
        name: 'Camilo Daza'
    },
    {
        city: "Florencia",
        country: "",
        code: "FLA",
        name: 'Gustavo Paredes'
    },
    {
        city: "Ayacucho",
        country: "",
        code: "JAU",
        name: 'Perales'
    },
    {
        city: "Ipiales",
        country: "",
        code: "IPI",
        name: 'San Luis'
    },
    {
        city: "Leticia",
        country: "",
        code: "PIU",
        name: 'Alfredo Vásques Cobo Intl.'
        
    },
    {
        city: "Juliaca",
        country: "",
        code: "",
        name: 'La Nubia'
    },
    {
        city: "Piura",
        country: "",
        code: "CUZ",
        name: 'José María Córdova Intl.'
    },
    {
        city: "Tarapoto",
        country: "",
        code: "MTR",
        name: 'Los Garzones'
    },
    {
        city: "Tumbes",
        country: "",
        code: "TBP",
        name: 'Benito Salas Vargas'
    },
    {
        city: "Huaraz",
        country: "",
        code: "SMG",
        name: 'Antonio Nariño'
    },
    {
        city: "Tacna",
        country: "",
        code: "PCL",
        name: 'Matecaña Intl.'
    },
    {
        city: "Moquegua",
        country: "",
        code: "MZA",
        name: 'Guillermo León Valencia'
    },
    {
        city: "Pucallpa",
        country: "",
        code: "CIX",
        name: 'Almirante Padilla Intl.'
    },
    {
        city: "San Andrés",
        country: "",
        code: "",
        name: 'Gustavo Rojas P. Intl.'
    },
    {
        city: "Puno",
        country: "",
        code: "IQT",
        name: 'Simón Bolivar Intl.'
    },
    {
        city: "Tumaco",
        country: "",
        code: "AYP",
        name: 'La Florida'
    },
    {
        city: "Chimbote",
        country: "",
        code: "ATA",
        name: 'Alfonso López Pumarejo'
    },
    {
        city: "Cajamarca",
        country: "",
        code: "",
        name: 'Vanguardia'
    },
    {
        city: "Yopal",
        country: "",
        code: "RIJ",
        name: 'El Yopal Intl.'
    }
];





/**
 * Index Setup
 * 
 */
let modalFlag = false;
document.addEventListener('DOMContentLoaded', () =>{
    updateDOM();
});





/**
 * Modal Handler
 * 
 */
const showModal = (modalId) =>{
    modalFlag = modalId;
    document.getElementById(modalId).classList.remove('hiding');
    document.getElementById(modalId).classList.add('d-flex');
    document.getElementById(modalId).classList.add('showing');
    try{
        document.querySelector('body').classList.add('overflow-disabled');
    }catch(e){console.log(e)}
}

const hideModal = (modalId) =>{
    document.getElementById(modalId).classList.remove('showing');
    document.getElementById(modalId).classList.add('hiding');
    try{
        document.querySelector('body').classList.remove('overflow-disabled');
    }catch(e){console.log(e)}
    updateDOM();
}

document.querySelectorAll('.modal').forEach(e =>{
    e.addEventListener('animationend', (e) => {
        if (e.animationName === 'slideOutToRight') {
            e.target.classList.remove('d-flex');
            e.target.classList.remove('hiding');
        }
    });
});






/**
 * Buttons Handler
 * 
 */
const btnSuccessHandler = (buttonId)=>{
    if(buttonId === 'btn-travel-type'){
        if(document.querySelector('#go-back').checked === true){
            info.flightInfo.travel_type = 1;
        }else if(document.querySelector('#just-go').checked === true){
            info.flightInfo.travel_type = 2;
            info.flightInfo.flightDates[1] = 0;
            info.flightInfo.origin.ticket_sched = 0;
            info.flightInfo.destination.ticket_sched = 0;
        }else{
            console.log('Err: opt not selected');
        }
    }else if(buttonId === 'btn-seat-type'){
        if(document.querySelector('#eco').checked === true){
            info.flightInfo.seat_type = 1;
        }else if(document.querySelector('#premium-eco').checked === true){
            info.flightInfo.seat_type = 2;
        }else if(document.querySelector('#premium-business').checked === true){
            info.flightInfo.seat_type = 3;
        }else{
            console.log('Err: opt not selected');
        }
    }

    updateLS();
    updateDOM();
    hideModal(modalFlag);
}






/**
 * Passengers Handler
 * 
 */
const passengersHandler = (passType, action) =>{
    if(action === '+' && info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies < 9){
        info.flightInfo[passType] += 1;
        info.passengersInfo[passType].push({
            name: '',
            surname: '',
            cc: ''
        });
        console.log(info.flightInfo[passType]);
    }else if(action === '-' && info.flightInfo[passType] >=1 && info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies > 1){
        info.flightInfo[passType] -= 1;
        info.passengersInfo[passType].pop();
        console.log(info.flightInfo[passType]);
    }else{
        console.log('Err: passHandler');
    }

    updateLS();
    updateDOM();
}






/**
 * Utils
 * 
 */
const updateDOM = ()=>{
    /*
    * Travel Type
    */
    if(info.flightInfo.travel_type === 1){
        document.querySelector('#go-back').checked = true;
        document.querySelector('#label-travel-type').textContent = 'Ida y Vuelta';
    }else{
        document.querySelector('#just-go').checked = true;
        document.querySelector('#label-travel-type').textContent = 'Solo Ida';
    }


    /*
    * Seat Type
    */
    if(info.flightInfo.seat_type === 1){
        document.querySelector('#eco').checked = true;
        document.querySelector('#label-seat-type').textContent = 'Economy';
    }else if(info.flightInfo.seat_type === 2){
        document.querySelector('#premium-eco').checked = true;
        document.querySelector('#label-seat-type').textContent = 'Premium Economy';
    }else{
        document.querySelector('#premium-business').checked = true;
        document.querySelector('#label-seat-type').textContent = 'Premium Business';
    }


    /*
    * Origin & Destination Labels
    */
    if(info.flightInfo.origin !== ''){
        document.querySelector('#label-origin').innerHTML = `<p><b>${info.flightInfo.origin.city}</b> ${info.flightInfo.origin.code} - ${info.flightInfo.origin.country}</p>`
    }
    if(info.flightInfo.destination !== ''){
        document.querySelector('#label-destination').innerHTML = `<p><b>${info.flightInfo.destination.city}</b> ${info.flightInfo.destination.code} - ${info.flightInfo.destination.country}</p>`

        /*
        * Show the rest of options if necessary
        */
        if(info.flightInfo.origin !== '' && info.flightInfo.destination !== ''){
            document.querySelector('#cont-destination').classList.remove('pb-5');
            document.querySelector('.index-background').style.height = '630px';
            document.querySelector('#rest-options').classList.remove('d-none');
        }
    }


    /*
    * Set dates labels if necessary
    */
    if(info.flightInfo.flightDates[0] !== 0 && info.flightInfo.flightDates[1] === 0){
        formatDateForLabel(info.flightInfo.flightDates[0], null, 'label-dates');
    }else if(info.flightInfo.flightDates[1] !== 0){
        formatDateForLabel(info.flightInfo.flightDates[0], info.flightInfo.flightDates[1], 'label-dates');
    }
    

    /*
    * Passengers
    */
    document.querySelector('#adults-number').textContent = info.flightInfo.adults;
    document.querySelector('#children-number').textContent = info.flightInfo.children;
    document.querySelector('#babies-number').textContent = info.flightInfo.babies;
    const labelPassengers = document.querySelector('#label-passengers');
    labelPassengers.innerHTML = '';
    if(info.flightInfo.adults !== 0){
        labelPassengers.innerHTML += `${info.flightInfo.adults} ${info.flightInfo.adults > 1 ? 'Adultos' : 'Adulto'}`;
    }
    if(info.flightInfo.children !== 0){
        labelPassengers.innerHTML += `, ${info.flightInfo.children} ${info.flightInfo.children > 1 ? 'Niños' : 'Niño'}`;
    }
    if(info.flightInfo.babies !== 0){
        labelPassengers.innerHTML += `, ${info.flightInfo.babies} ${info.flightInfo.babies > 1 ? 'Bebés' : 'Bebé'}`;
    }


    /**
     * Flight cost
     */
    document.querySelector('#flight-cost').textContent = PRECIO_BASE.toLocaleString('es-Es');
}


const searchAirports = (inputSearch, type) =>{
    const searchResultsDiv = document.querySelector(`#search-results-${type}`);

    const clearAirports = () =>{ searchResultsDiv.innerHTML = '';}
    const printAirports = (results) =>{
        results.forEach(airport =>{
            if(type === 'origin'){
                searchResultsDiv.innerHTML += `
                <div class="search-item d-flex align-items-center p-1" onclick="setAirport('${airport.code}', 'origin')">
                    <img class="pr-2 pl-2" src="./assets/media/takeoff_icon.png" width="15px">
                    <div>
                        <p class="m-0 fs-3 tc-ocean">${airport.city}, ${airport.code} - ${airport.country}</p>
                        <p class="m-0 fs-5 tc-ocean">${airport.name}</p>
                    </div>
                </div>
                `;
            }else if(type === 'destination'){
                searchResultsDiv.innerHTML += `
                <div class="search-item d-flex align-items-center p-1" onclick="setAirport('${airport.code}', 'destination')">
                    <img class="pr-2 pl-2" src="./assets/media/takeoff_icon.png" width="15px">
                    <div>
                        <p class="m-0 fs-3 tc-ocean">${airport.city}, ${airport.code} - ${airport.country}</p>
                        <p class="m-0 fs-5 tc-ocean">${airport.name}</p>
                    </div>
                </div>
                `;
            }else{
                console.log('puta');
            }
        });
    }

    clearAirports();

    if(inputSearch === ''){
        clearAirports();
    }else{
        let searchResults = [];

        airports.forEach(destination => {
            if (searchResults.length < 5 && (destination.country.toLowerCase().includes(inputSearch.toLowerCase()) || destination.city.toLowerCase().includes(inputSearch.toLowerCase()) || destination.code.toLowerCase().includes(inputSearch.toLowerCase()))) {
                searchResults.push(destination);
            }
        });
        
        printAirports(searchResults);
    }
}


const setAirport = (airportCode, type) =>{
    airports.forEach(airport =>{
        if(airport.code === airportCode){
            document.getElementById(type).value = `${airport.city}, ${airport.code} - ${airport.country}`
            if(type === 'origin'){
                info.flightInfo.origin = airport;
            }else if(type === 'destination'){
                info.flightInfo.destination = airport;
            }else{
                console.log('puta2');
            }

            updateLS();
            updateDOM();
        }
    });
}


const formatDateForLabel = (date, date2=null, labelId)=>{
    const labelDiv = document.getElementById(labelId);

    if(date2 === null){
        let format = new Date(parseInt(date));
        let finalDateFormat = `<p><span class="fw-light text-italic tc-gray-smoke">${dayDic[format.getDay() - 1]} </span><b>${format.toString().split(' ')[2]} De ${monthDic[format.getMonth()]}</b>`;
        labelDiv.innerHTML = finalDateFormat;
    }else{
        let format = new Date(parseInt(date));
        let format2 = new Date(parseInt(date2));
        let finalDateFormat = `<p><span class="fw-light text-italic tc-gray-smoke">${dayDic[format.getDay() - 1]} </span><b>${format.toString().split(' ')[2]} De ${monthDic[format.getMonth()]}</b> a ${dayDic[format2.getDay() - 1]} </span><b>${format2.toString().split(' ')[2]} De ${monthDic[format2.getMonth()]}</b>`;
        labelDiv.innerHTML = finalDateFormat;

    }

    //* Reset datepicker */
    datepicker.start = false;
    datepicker.end = false;
    inputDates.value = '';


    // //* Save info */
    info.flightInfo.flightDates[0] = date;
    date2 !== null ? info.flightInfo.flightDates[1] = date2: 0;
    updateLS();
}



const nextStep = () =>{
    if(info.flightInfo.flightDates[0] !== 0){
        if(info.flightInfo.travel_type === 2){
            window.location.href = 'select-flight-go.html';
            return;
        }else if(info.flightInfo.travel_type === 1  && info.flightInfo.flightDates[1] !== 0 ){
            window.location.href = 'select-flight-go.html';
        }else{
            alert('Elige una fecha para volver.');
        }
    }
}