// console.log(); //now riting cl will show console.log

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 1; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     if (temps[i] > max) {
//       max = temps[i];
//     }
//     if (temps[i] < min) {
//       min = temps[i];
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitude = calcTempAmplitude([3, 7, 4, 12, 9, 3]);
// console.log(amplitude);

// //merge two arrays:
// const ar1 = ['a', 'b'];
// const ar2 = ['1', 2];
// const ar3 = ar1.concat(ar2);
// console.log(ar3);

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degree Celsius')),
//   };
//   //   console.log();
//   //   console.warn();
//   //   console.error();
//   //console.table(measurement)
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

const printForecast = (temps) => {
  for (let i = 0; i < temps.length; i++) {
    console.log(`${temps[i]}Deg C in ${i + 1} days ... `);
  }
};

printForecast([17, 21, 23]);

const printForecast1 = (temps) => {
  let str = '';
  for (let i = 0; i < temps.length; i++) {
    str += `${temps[i]}C in ${i + 1} days... `;
  }
  console.log('...' + str);
};
printForecast1([12, 5, -5, 0, 4]);
