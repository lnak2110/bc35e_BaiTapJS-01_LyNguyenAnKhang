/**
 * Đầu vào:
 *  + so = 72
 *
 * Xử lí:
 *  + soHangDonvi = so % 10
 *  + soHangChuc = so / 10
 *  + tong2KySo = soHangDonvi + soHangChuc
 *
 * Đầu ra:
 *  + Hiển thị tong2KySo
 */

// Đầu vào:
var so = 72;
var soHangDonvi = 0;
var soHangChuc = 0;
var tong2KySo = 0;

// Xử lí:
soHangDonvi = so % 10;
soHangChuc = Math.floor(so / 10);
tong2KySo = soHangDonvi + soHangChuc;

// Đầu ra:
console.log('(Bài 5) Tổng 2 ký số là: ' + tong2KySo);
