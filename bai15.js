var phepTinh = "";
var ketQua = "0";
var daTinh = false;   


function capNhatManHinh() {
  document.getElementById("phep-tinh").textContent = phepTinh;
  document.getElementById("ket-qua").textContent = ketQua;
}

function tinhKetQua() {
  if (phepTinh == "") {
    return;
  }

  var bieuThuc = phepTinh;
  bieuThuc = bieuThuc.split("×").join("*");
  bieuThuc = bieuThuc.split("÷").join("/");
  bieuThuc = bieuThuc.split("−").join("-");
  bieuThuc = bieuThuc.split("%").join("/100");

  try {
    var kq = eval(bieuThuc);  

    if (!isFinite(kq)) {     
      ketQua = "Lỗi";
    } else {
     
      ketQua = String(Math.round(kq * 10000000000) / 10000000000);
    }
  } catch (loi) {
    ketQua = "Lỗi";        
  }
  daTinh = true;
}

function chonNgoac() {
  var soMo = phepTinh.split("(").length - 1;     
  var soDong = phepTinh.split(")").length - 1;   
  var kyTuCuoi = phepTinh.slice(-1);

  if (soMo > soDong && "0123456789)%".indexOf(kyTuCuoi) >= 0) {
    return ")";
  }
  return "(";
}

function xuLyNut(chu) {
  if (chu == "C") {
    phepTinh = "";
    ketQua = "0";
    daTinh = false;
  } else if (chu == "=") {
    tinhKetQua();
  } else {
    if (chu == "( )") {
      chu = chonNgoac();
    }
    if (daTinh) {
      if (ketQua == "Lỗi" || "0123456789.(".indexOf(chu) >= 0) {
        phepTinh = "";               
        ketQua = "0";
      } else {
        phepTinh = ketQua;          
      }
      daTinh = false;
    }
    if ("+−×÷".indexOf(chu) >= 0) {
      phepTinh = phepTinh + " " + chu + " ";
    } else {
      phepTinh = phepTinh + chu;
    }
  }

  capNhatManHinh();
}

var dsNut = document.querySelectorAll(".nut");
for (var i = 0; i < dsNut.length; i++) {
  dsNut[i].addEventListener("click", function () {
    xuLyNut(this.textContent);
  });
}

capNhatManHinh();