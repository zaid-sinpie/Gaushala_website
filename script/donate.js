'use strict';
/////////////////////////////////////////////////////////////////////////////////////////////

const countryListAlpha2 = {
    "AF": "Afghanistan",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua and Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas (the)",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia (Plurinational State of)",
    "BQ": "Bonaire, Sint Eustatius and Saba",
    "BA": "Bosnia and Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory (the)",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cabo Verde",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "KY": "Cayman Islands (the)",
    "CF": "Central African Republic (the)",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands (the)",
    "CO": "Colombia",
    "KM": "Comoros (the)",
    "CD": "Congo (the Democratic Republic of the)",
    "CG": "Congo (the)",
    "CK": "Cook Islands (the)",
    "CR": "Costa Rica",
    "HR": "Croatia",
    "CU": "Cuba",
    "CW": "Curaçao",
    "CY": "Cyprus",
    "CZ": "Czechia",
    "CI": "Côte d'Ivoire",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic (the)",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "SZ": "Eswatini",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (the) [Malvinas]",
    "FO": "Faroe Islands (the)",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories (the)",
    "GA": "Gabon",
    "GM": "Gambia (the)",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island and McDonald Islands",
    "VA": "Holy See (the)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran (Islamic Republic of)",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KP": "Korea (the Democratic People's Republic of)",
    "KR": "Korea (the Republic of)",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People's Democratic Republic (the)",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands (the)",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia (Federated States of)",
    "MD": "Moldova (the Republic of)",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands (the)",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger (the)",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands (the)",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestine, State of",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines (the)",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "MK": "Republic of North Macedonia",
    "RO": "Romania",
    "RU": "Russian Federation (the)",
    "RW": "Rwanda",
    "RE": "Réunion",
    "BL": "Saint Barthélemy",
    "SH": "Saint Helena, Ascension and Tristan da Cunha",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin (French part)",
    "PM": "Saint Pierre and Miquelon",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome and Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SX": "Sint Maarten (Dutch part)",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia and the South Sandwich Islands",
    "SS": "South Sudan",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan (the)",
    "SR": "Suriname",
    "SJ": "Svalbard and Jan Mayen",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania, United Republic of",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks and Caicos Islands (the)",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates (the)",
    "GB": "United Kingdom of Great Britain and Northern Ireland (the)",
    "UM": "United States Minor Outlying Islands (the)",
    "US": "United States of America (the)",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela (Bolivarian Republic of)",
    "VN": "Viet Nam",
    "VG": "Virgin Islands (British)",
    "VI": "Virgin Islands (U.S.)",
    "WF": "Wallis and Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AX": "Åland Islands"
};
const stateAbbrivations = [
    ["Andhra Pradesh", "AP"],
    ["Arunachal Pradesh", "AR"],
    ["Assam", "AS"],
    ["Bihar", "BR"],
    ["Chhattisgarh", "CG"],
    ["Goa", "GA"],
    ["Gujarat", "GJ"],
    ["Haryana", "HR"],
    ["Himachal Pradesh", "HP"],
    ["Jammu and Kashmir", "JK"],
    ["Jharkhand", "JH"],
    ["Karnataka", "KA"],
    ["Kerala", "KL"],
    ["Madhya Pradesh", "MP"],
    ["Maharashtra", "MH"],
    ["Manipur", "MN"],
    ["Meghalaya", "ML"],
    ["Mizoram", "MZ"],
    ["Nagaland", "NL"],
    ["Odisha", "OD"],
    ["Punjab", "PB"],
    ["Rajasthan", "RJ"],
    ["Sikkim", "SK"],
    ["Tamil Nadu", "TN"],
    ["Telangana", "TS"],
    ["Tripura", "TR"],
    ["Uttarakhand", "UK"],
    ["Uttar Pradesh", "UP"],
    ["West Bengal", "WB"],
    ["Andaman and Nicobar Islands", "AN"],
    ["Chandigarh", "CH"],
    ["Dadra and Nagar Haveli", "DN"],
    ["Daman and Diu", "DD"],
    ["Delhi", "DL"],
    ["Lakshadweep", "LD"],
    ["Puducherry", "PY"]
];

const countrySelector = document.getElementById('country');
const country = document.createElement('div');

const stateSelector = document.getElementById('state');
const state = document.createElement('div');

const payValue = document.querySelector('.btn');

const submitBtn = document.querySelector('.sub');

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const form = document.querySelector('form');

const container = document.querySelector('.container');

let donated = false;
/////////////////////////////////////////////////////////////////////////////////////////////


for (const [key, value] of Object.entries(countryListAlpha2)) {
    let html = `<option value="${key}">${value}</option>`;
    countrySelector.insertAdjacentHTML('beforeend', html);
}

for (const [value, key] of stateAbbrivations){
    // console.log(key, value);
    let html = `<option value="${key}">${value}</option>`;
    stateSelector.insertAdjacentHTML('beforeend', html);
}


//creating object from for entry
function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    
    const value = {
        fullName: data.get('name'),
        email: data.get('email'),
        panCardNumber:data.get('pan'),
        phone:data.get('phone'),
        address:data.get('address'),
        pincode:data.get('pincode'),
        country:data.get('country'),
        state:data.get('state'),
        amount:data.get('amount'),
    }

    //form data
    console.log({ value });
  }

//pop up appearing

payValue.addEventListener('click',function(e){
    e.preventDefault();
    // if(donated) alert('already donated')
    donated = true;
});


// payValue.addEventListener('click',function(e){
//     e.preventDefault()
//     //modal//
//     overlay.classList.remove('hidden')
//     modal.classList.remove('hidden')
//     //visiblethe submit btn//
//         submitBtn.classList.remove('hidden');
//         modal.scrollIntoView(20);
// });


form.addEventListener('submit',(event)=>{
    // Prevent submit
    event.preventDefault();
    // find inputs, textareas, and selects within the parent
    let children = event.target.querySelectorAll('input, textarea, select');
    // find if any of them are empty
    let findEmpty = Array.from(children).find((element)=>{
        if(element.value.length < 1){return true}
        return false
    });
    // check if found an empty child
    if(findEmpty){
        // if so alert
        alert(findEmpty.name);
    }else{
        // if not submit form
        if (!donated) alert('please donate first');
        if (donated) form.addEventListener('submit', handleSubmit);
    }
});

//////////////////////////////////////////////////////////////////////////////////////////

// overlay.addEventListener('click',function(){
//     overlay.classList.add('hidden')
//     modal.classList.add('hidden')
// })

document.addEventListener('keydown',(e) => {
    // console.log(e.key);
    if (e.key === 'Escape'){
        overlay.classList.add('hidden')
        modal.classList.add('hidden')
    }
})