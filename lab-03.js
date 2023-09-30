// d. Viết hàm tính giá cước điện thoại của một hộ gia đình với các thông tin như sau:
// - Phí thuê bao bắt buộc là 25 ngìn đồng
// - 600 đồng cho mỗi phút gọi của 50 phút đầu tiên

// - 400 đồng cho mỗi phút gọi của 150 phút tiếp theo
// - 200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên
// - Số phút gọi điện thoại của gia đình sẽ được nhập vào từ tham số của hàm
// function tinhgiacuoc(sophut){
//     const phicodinh = 25000
//     let tonggiacuoc = 0
//     let chiphi = 0

//     if (sophut > 0 && sophut <= 50){
//         chiphi = sophut * 600
//     }
//     else if (sophut > 50 && sophut <= 200){
//         chiphi = 50 * 600 + (sophut-50) * 400
//     }
//     else if (sophut > 200){
//         chiphi = 50 * 600 + 400 * 150 + (sophut - 200) * 200
//     }

//     tonggiacuoc = phicodinh + chiphi

//     return tonggiacuoc
// }
arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var elementToInsert = 117;
// // Tạo một mảng mới với phần tử mới chèn vào đầu
// var newArr = [elementToInsert];
// // Duyệt qua mảng ban đầu và chèn các phần tử vào mảng mới
// for (var i = 0; i < arr.length; i++) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);


//h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay khôn

 arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// var kiemtratangdan = true;
// for( var i = 0 ; i < arr.length - 1; i++) {
//     if(arr[i] > arr[i + 1]) {
//         kiemtratangdan = false;
//         break;
//     }
// }
// if (kiemtratangdan) {
//     console.log("nay la mot day so tang dan.");
// } else{
//     console.log("nay la mot day so khong tang dan.");
// }

var arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
var n = arr.length;

for (var i = 0; i < n - 1; i++) {
  for (var j = 0; j < n - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      // Hoán đổi phần tử arr[j] và arr[j + 1]
      var temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log("Mảng sau khi sắp xếp tăng dần: " + arr);