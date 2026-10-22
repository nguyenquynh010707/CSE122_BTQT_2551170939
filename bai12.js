function inLich() {

      var ngay = Number(document.getElementById("ngay").value);
      var thang = Number(document.getElementById("thang").value);
      var nam = Number(document.getElementById("nam").value);

      var d = new Date(nam, thang - 1, ngay);

      if (d.getDate() != ngay || d.getMonth() != thang - 1) {
        alert("Ngày tháng năm không hợp lệ!");
        return;
      }

      var dsThu = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
      var thu = dsThu[d.getDay()];

      var gio = new Date().getHours();
      var loiChao;
      if (gio < 12) {
        loiChao = "Chào buổi sáng!";
      } else if (gio < 18) {
        loiChao = "Chào buổi chiều!";
      } else {
        loiChao = "Chào buổi tối!";
      }

      document.getElementById("nam-kq").innerHTML = nam;
      document.getElementById("thang-kq").innerHTML = "Tháng " + thang;
      document.getElementById("ngay-kq").innerHTML = ngay;
      document.getElementById("thu-kq").innerHTML = thu;
      document.getElementById("loi-chao").innerHTML = loiChao;
      document.getElementById("o-lich").style.display = "block";
    }

    document.getElementById("nut").addEventListener("click", inLich);