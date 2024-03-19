// {
//     function yearDays(year) {
//       if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
//         return `${year} has 366 days`;
//       } else {
//         return `${year} has 365 days`;
//       }
//     }
// }

// {
//     function distanceBetweenPillars(numPillars, distanceBetween, width) {
//       // Calculate total distance covered by pillars (including width)
//       var totalDistance = (numPillars - 1) * distanceBetween;
//       // Calculate total width covered by pillars
//       var totalWidth = numPillars * width - width;
//       // Calculate distance between the first and last pillars (excluding width)
//       var distance = totalDistance + totalWidth;
//       return distance;
//     }
//     console.log(distanceBetweenPillars(3,20,3));
// }
// {
//   function positiveSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {

//       if (arr[i] > 0) {
//         sum += arr[i];
//       }

//     }
//     return sum;
//   }
//   console.log(positiveSum([1,4,3]));
// }
// {
//   function countPositivesSumNegatives(input) {
//     if (!input || input.length === 0) {
//       return [];
//     }

//     let countPositives = 0;
//     let sumNegatives = 0;

//     for (let i = 0; i < input.length; i++) {
//       if (input[i] > 0) {
//         countPositives++;
//       } else if (input[i] < 0) {
//         sumNegatives += input[i];
//       }
//     }

//     return [countPositives, sumNegatives];
//   }
// }
