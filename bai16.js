function capNhatSoDem() {
  var tongViec = document.querySelectorAll("#danh-sach li").length;
  var viecConLai = document.querySelectorAll("#danh-sach li:not(.xong)").length;

  var chu;
  if (tongViec == 0) {
    chu = "Chưa có việc nào.";
  } else if (viecConLai == 0) {
    chu = "Đã hoàn thành tất cả!";
  } else {
    chu = "Còn " + viecConLai + " việc chưa hoàn thành";
  }
  document.getElementById("so-con").textContent = chu;
}
function themViec(noiDung, daXong) {

  var li = document.createElement("li");
  var oTich = document.createElement("span");
  var ten = document.createElement("span");
  var nutXoa = document.createElement("button");

  oTich.className = "o-tich";
  ten.className = "ten";
  ten.textContent = noiDung;
  nutXoa.className = "nut-xoa";
  nutXoa.textContent = "Xoá";

  if (daXong) {
    li.className = "xong";
  }
  li.addEventListener("click", function () {
    li.classList.toggle("xong");
    capNhatSoDem();
  });
  nutXoa.addEventListener("click", function (suKien) {
    suKien.stopPropagation();  
    li.remove();
    capNhatSoDem();
  });
  li.appendChild(oTich);
  li.appendChild(ten);
  li.appendChild(nutXoa);
  document.getElementById("danh-sach").appendChild(li);

  capNhatSoDem();
}
function xuLyThem() {
  var oNhap = document.getElementById("o-nhap");
  var noiDung = oNhap.value.trim(); 

  if (noiDung == "") {
    return;                        
  }

  themViec(noiDung, false);
  oNhap.value = "";               
  oNhap.focus();                    
}

document.getElementById("nut-them").addEventListener("click", xuLyThem);

document.getElementById("o-nhap").addEventListener("keydown", function (suKien) {
  if (suKien.key == "Enter") {
    xuLyThem();
  }
});
themViec("Đọc chương HTML5 cơ bản", true);
themViec("Làm bài tập CSS Grid", false);
themViec("Quay video OBS nộp bài", false);