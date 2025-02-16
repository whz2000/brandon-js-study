// for (var i = 1; i <= 3; i++) {
//   (function(i) {
//     setTimeout(function() {
//       console.log(i); // 输出: 1, 2, 3
//     }, 1000);
//   })(i);
// }

for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}