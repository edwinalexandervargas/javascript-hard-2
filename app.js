// 1.) show rating

// showRating(4) -> "* * * * "

// function showRating(rating) {
//   let ratings = "";
//   for (let i = 0; i < rating; ++i) {
//     ratings = ratings + "*"
//     if (i !== rating - 1) {
//         ratings = ratings + " "
//     }
//   }
//   return ratings;
// }
// console.log(showRating(4));

// showRating(4.5 ) -> "* * * * ."

// function showRating(rating) {
//   let ratings = "";
//   for (let i = 0; i < Math.floor(rating); ++i) {
//     ratings += "*"
//     if (i !== Math.floor(rating) - 1) {
//         ratings += " "
//     }
//   }

//   if (!Number.isInteger(rating)) {
//     ratings += " .";
//   }
//   return ratings;
// }

// console.log(showRating(4.5));

// 2.) sort by lowest to highest price

// sortLowToHigh([20, 40, 10, 30, 50, 10]) -> [10, 10, 20, 30, 40, 50]

// function sortLowToHigh(numbers) {
//   return numbers.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]));

// 3.) sort by highest to lowest price
// sortHighToLow ([
//     {id: 1, price: 50},
//     {id: 2, price: 30},
//     {id: 3, price: 60},
//     {id: 4, price: 10},
// ])


// function sortHighToLow(numbers) {
//     return numbers.sort((a, b) => b.price - a.price);
// }

// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 30 },
//     { id: 3, price: 60 },
//     { id: 4, price: 10 },
//   ]),
// );
