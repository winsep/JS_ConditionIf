// 9.1
var linebreak = "<br />";
function kiemTraSoNguyen() {
    // Nhập số từ người dùng
    var soNguyen = prompt("Nhập vào một số nguyên:")
    
    // Chuyển đổi nhập liệu thành số nguyên
    soNguyen = parseInt(soNguyen);
  
    // Kiểm tra và in kết quả
    if (isNaN(soNguyen)) {
      document.write("Vui lòng nhập một số nguyên hợp lệ!")
    } else if (soNguyen > 0) {
        document.write("Số bạn nhập là số nguyên dương.")
    } else if (soNguyen < 0) {
        document.write("Số bạn nhập là số nguyên âm.")
    } else {
        document.write("Số bạn nhập là số 0.")
    }
  }

  kiemTraSoNguyen()
  
  document.write(linebreak)
 //9.2
function kiemTraChiaHetCho3Hoac5() {
    // Nhập số nguyên từ người dùng
    var n = prompt("Nhập vào một số nguyên:");
  
    // Chuyển đổi nhập liệu thành số nguyên
    n = parseInt(n);
  
    // Kiểm tra và in kết quả
    if (isNaN(n)) {
        document.write("Vui lòng nhập một số nguyên hợp lệ!")
    } else {
      if (n % 3 === 0 && n % 5 === 0) {
        document.write(n + " chia hết cho cả 3 và 5.")
      } else if (n % 3 === 0) {
        document.write(n + " chia hết cho 3.")
      } else if (n % 5 === 0) {
        document.write(n + " chia hết cho 5.")
      } else {
        document.write(n + " không chia hết cho 3 hoặc 5.")
      }
    }
  }
  
  kiemTraChiaHetCho3Hoac5()

// 9.3

function inNgayCuaThang() {
    var n = prompt("Nhap thang:");
  
    n = parseInt(n);


}