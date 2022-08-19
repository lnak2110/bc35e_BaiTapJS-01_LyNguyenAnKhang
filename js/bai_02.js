/**
 * Đầu vào:
 *  + soThuc1 = 3
 *  + soThuc2 = 3
 *  + soThuc3 = 3
 *  + soThuc4 = 3
 *  + soThuc5 = 3
 *
 * Xử lí:
 *  + tongCacSoThuc = soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5
 *  + giaTriTrungBinh = tongCacSoThuc / 5
 *
 * Đầu ra:
 *  + Hiển thị giaTriTrungBinh
 */

// Đầu vào:
var soThuc1 = 1;
var soThuc2 = 5;
var soThuc3 = -2;
var soThuc4 = 0;
var soThuc5 = 8;
var tongCacSoThuc = 0;
var giaTriTrungBinh = 0;

// Xử lí:
tongCacSoThuc = soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5;
giaTriTrungBinh = tongCacSoThuc / 5;

// Đầu ra:
console.log('(Bài 2) Giá trị trung bình của 5 số thực là: ' + giaTriTrungBinh);
