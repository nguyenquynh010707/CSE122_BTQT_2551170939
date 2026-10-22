function kiemTra(id, dung, loi) {
  var o = document.getElementById(id);
  var tb = document.getElementById("tb-" + id);

  o.className = dung ? "dung" : "sai";                 
  tb.className = "thong-bao " + (dung ? "hop-le" : "loi");
  tb.textContent = dung ? "✓ Hợp lệ" : "✗ " + loi;
  return dung;
}

document.getElementById("form-dang-ky").addEventListener("submit", function (e) {
  e.preventDefault();  

  var hoTen = document.getElementById("ho-ten").value.trim();
  var email = document.getElementById("email").value.trim();
  var matKhau = document.getElementById("mat-khau").value;
  var xacNhan = document.getElementById("xac-nhan").value;

  var a = kiemTra("ho-ten", hoTen != "", "Họ tên không được để trống");
  var b = kiemTra("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), "Email không hợp lệ");
  var c = kiemTra("mat-khau", matKhau.length >= 6, "Mật khẩu phải có ít nhất 6 ký tự");
  var d = kiemTra("xac-nhan", xacNhan != "" && xacNhan == matKhau, "Mật khẩu xác nhận không khớp");

  if (a && b && c && d) {
    alert("Đăng ký thành công!");
  }
});