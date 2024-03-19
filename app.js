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