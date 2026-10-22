
// Hàm tạo ảnh chữ số
function taoAnhChuSo(chuSo) {

    const anh = document.createElement("img");

    // Đổi số thành tên ảnh GIF
    // Ví dụ: 0 -> 00.gif, 5 -> 05.gif
    const tenAnh = String(chuSo).padStart(2, "0");

    anh.className = "chu-so";

    // Đường dẫn đến thư mục imgs
    anh.src = "00.gif";
    anh.src = "01.gif";
    anh.src = "02.gif";
    anh.src = "03.gif";
    anh.src = "04.gif";
    anh.src = "05.gif";
    anh.src = "06.gif";
    anh.src = "07.gif";
    anh.src = "08.gif";
    anh.src = "09.gif";
    
    anh.alt = chuSo;

    return anh;
}


// Hàm tạo ảnh dấu hai chấm
function taoAnhHaiCham() {

    const anh = document.createElement("img");

    anh.className = "dau-hai-cham";

    anh.src = "haicham.gif";

    anh.alt = ":";

    return anh;
}


// Hàm thêm hai chữ số vào đồng hồ
function themCapSo(khung, giaTri) {

    for (let i = 0; i < giaTri.length; i++) {

        khung.appendChild(taoAnhChuSo(giaTri[i]));

    }
}


// Hàm cập nhật đồng hồ
function capNhatDongHo() {

    // Lấy thời gian hiện tại
    const hienTai = new Date();

    // Lấy giờ, phút, giây
    const gio = String(hienTai.getHours()).padStart(2, "0");

    const phut = String(hienTai.getMinutes()).padStart(2, "0");

    const giay = String(hienTai.getSeconds()).padStart(2, "0");

    // Lấy khung đồng hồ
    const khung = document.getElementById("dongHo");

    // Xóa các ảnh cũ
    khung.replaceChildren();

    // Hiển thị 2 số giờ
    themCapSo(khung, gio);

    // Hiển thị dấu hai chấm
    khung.appendChild(taoAnhHaiCham());

    // Hiển thị 2 số phút
    themCapSo(khung, phut);

    // Hiển thị dấu hai chấm
    khung.appendChild(taoAnhHaiCham());

    // Hiển thị 2 số giây
    themCapSo(khung, giay);

    // Cập nhật lời chào theo giờ
    capNhatLoiChao(hienTai.getHours());
}


// Hàm thay đổi lời chào theo buổi
function capNhatLoiChao(gio) {

    const loiChao = document.getElementById("loiChao");

    if (gio >= 5 && gio < 12) {

        loiChao.textContent = "Chào buổi sáng";

    } else if (gio >= 12 && gio < 18) {

        loiChao.textContent = "Chào buổi chiều";

    } else if (gio >= 18 && gio < 22) {

        loiChao.textContent = "Chào buổi tối";

    } else {

        loiChao.textContent = "Chúc ngủ ngon";

    }
}


// Chạy đồng hồ khi mở trang
capNhatDongHo();

// Cập nhật tự động mỗi 1 giây
setInterval(capNhatDongHo, 1000);
