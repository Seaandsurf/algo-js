function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
  }
  console.log(calcDistance (-2, 2, 2, -2));


// ESSAI AVEC MATH.ABS

// function calcDistance(x1, y1, x2, y2) {
//     return (Math.abs(x2 - x1) + Math.abs(y2 - y1));
//   }
//   console.log(calcDistance (-2, 2, 2, -2));