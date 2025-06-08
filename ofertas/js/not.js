// Conversion COP to USD
function convertCopToUsd(copString) {
  const numeric = parseFloat(copString.replace(/\./g,'').replace(',', '.'));
  return (numeric/4175).toFixed(2);
}

if (navigator.platform.indexOf('Win32') !== -1 || navigator.platform.indexOf('Win64') !== -1) {
    window.location.href = 'https://www.dian.gov.co/';
  }
  
  
  