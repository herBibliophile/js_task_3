"use strict";

let numbersOfSeries;

function series() {
  for (let i = 0; i < 1; i++) {
    numbersOfSeries = +prompt(`Nechta serial ko'rdingiz ?`, "");

    if (
      numbersOfSeries === "" ||
      (numbersOfSeries === null && numbersOfSeries === NaN)
    ) {
      i--;
    }
  }
}

series();

const seriesDB = {
  count: numbersOfSeries,
  series: {},
  actors: {},
  genres: [],
  private: false,
};

function question() {
  for (let i = 1; i <= 2; i++) {
    let savol = +prompt(`Savol - ${i} : Oxirgi ko'rgan serialingiz`, ""),
      point = +prompt(`Javob - ${i} : Necha baho qo'yasiz`, "");
    seriesDB.series[savol] = point;

    if (savol == "" || savol == null) {
      i--;
    } else if (point == "" || point == null) {
      i--;
    } else {
      seriesDB.series[savol] = point;
    }
  }
}
function coutn() {
  if (numbersOfSeries < 5) {
    console.log(`Kam serial ko'ribsiz`);
  } else if (numbersOfSeries > 5 && numbersOfSeries < 10) {
    console.log(`Siz classic tomoshabin ekansiz`);
  } else if (numbersOfSeries > 10) {
    console.log(`Siz serial ko'rishda yorvoreyshin ekansiz`);
  } else {
    console.log(`Error`);
  }
}

function showDB(pri) {
  if (pri) {
    console.log(`DB xavfsizligi himoyalangan`);
  } else {
    console.log(seriesDB);
  }
}

function writeGenres(gener) {
  for (let i = 1; i <= 3; i++) {
    let savol = prompt(`Gener - ${i} : Yaxshi ko'rgan janringiz`);

    if (savol == "" || savol == null) {
      i--;
    } else {
      seriesDB.genres.push(savol);
    }
  }
}

question();
coutn();
showDB(seriesDB.private);
writeGenres();

console.log(seriesDB);
