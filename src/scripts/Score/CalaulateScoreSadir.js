function script_scoreSadir(rows) {
  let rates = getRatesFromRows(rows);
  let ratesBySubject = orderBySubject(rates);
  console.log(ratesBySubject);
}

function getRatesFromRows(rows) {
  let rates = rows.map((row) => {
    return row._rawData[2];
  });
  return rates;
}

function orderBySubject(rates) {
  let newRates = [rates[0]];
  let index = 0;
  rates.forEach((rate) => {
    if (rate !== rates[index]) {
      newRates.push(rate);
    }
    index++;
  });

  return newRates;
}
export { script_scoreSadir };
