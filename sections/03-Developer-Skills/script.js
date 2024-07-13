// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const maxTemps = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let forecast = '';
  for (let i = 0; i < maxTemps.length; i++) {
    forecast += `... ${maxTemps[i]}ºC in ${i + 1} days `;
  }
  console.log(forecast + '...');
}

printForecast(maxTemps);
