const danhSachSan = [
  { ma: "DV01-01", ten: "Dế Mèn phiêu lưu ký", gia: 85000 }
  { ma: "DV01-02", ten: "Cho tôi xin một vé đi tuổi thơ", gia: 90000 }
  { ma: "DV01-03", ten: "Nhà giả kim", gia: 110000 }
  { ma: "DV01-04", ten: "Tuổi trẻ đáng giá bao nhiêu", gia: 105000 }
];

function renderCatalog() {
  const bang = document.getElementById("bang-gia");
  for (const item of danhSachSan) {
    const row = bang.insertRow();
    row.insertCell().textContent = item.ma;
    row.insertCell().textContent = item.ten;
    row.insertCell().textContent = item.gia.toLocaleString("vi-VN");
  }
}

showBookList();
