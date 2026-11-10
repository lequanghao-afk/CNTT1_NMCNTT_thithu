# BÀI LÀM – HACKATHON 02

- **Mã đề:** 01
- **Họ tên:**Lê Quang Hào
- **Lớp:**CNTT1
- **Link repository:**
- **Hệ điều hành (Windows/macOS):**Windows

## 4.2. Thao tác máy tính cơ bản bằng CLI

### Các lệnh đã chạy

```shell
pwd
ls -force
mv ghi_chu_ban_giao.txt docs/
mkdir backup
cp data/giao_dich_thang_10.xlsx backup/
rm *.tmp
cd logs; ls; cd ..
```

### Kết quả liệt kê toàn bộ dự án (Windows: Get-ChildItem -Recurse -Force; macOS: ls -aR)

```text
Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_01\Luyen_Tap_01\starter-kit\nha-sach-moc-lan


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026   9:13 PM                backup
d-----        11/10/2026   9:10 PM                data
d-----        11/10/2026   9:12 PM                docs
d-----        11/10/2026   9:09 PM                evidence
d-----        11/10/2026   9:10 PM                logs
d-----        11/10/2026   9:06 PM                web
-a----        11/10/2026   9:06 PM             70 .env
-a----        11/10/2026   9:06 PM           2411 bai_lam.md


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_01\Luyen_Tap_01\starter-kit\nha-sach-moc-lan\backup


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:06 PM           6243 giao_dich_thang_10.xlsx


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_01\Luyen_Tap_01\starter-kit\nha-sach-moc-lan\data


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:06 PM           6243 giao_dich_thang_10.xlsx


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_01\Luyen_Tap_01\starter-kit\nha-sach-moc-lan\docs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:06 PM            150 ghi_chu_ban_giao.txt


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_01\Luyen_Tap_01\starter-kit\nha-sach-moc-lan\logs


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:06 PM            986 access.log


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_01\Luyen_Tap_01\starter-kit\nha-sach-moc-lan\web


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
d-----        11/10/2026   9:06 PM                images
-a----        11/10/2026   9:06 PM            652 app.js
-a----        11/10/2026   9:06 PM            581 index.html
-a----        11/10/2026   9:06 PM            460 style.css


    Directory: C:\Users\lequanghao\Downloads\Luyen_Tap_01\Luyen_Tap_01\starter-kit\nha-sach-moc-lan\web\images


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----        11/10/2026   9:06 PM           3101 logo-nha-sach-moc-lan.png

```

## 4.3. Lọc log truy cập website

### a) Lệnh lọc các dòng status=500

```shell
Get-Content logs/access.log | Select-String "status=500" | Set-Content logs/loi_500.txt
Get-Content logs/loi_500.txt -TotalCount 2
```

### 2 dòng đầu tiên trong logs/loi_500.txt

```text
2026-10-06 08:24:40 POST /khuyen-mai status=500
2026-10-08 09:38:06 POST /api/dat-hang status=500

```

### b) Lệnh đếm số dòng status=404 và kết quả

```shell
(Get-Content logs/access.log | Select-String "status=404").Count
```

```text
5

```

## 4.4. Chạy script tong_hop (.ps1 hoặc .sh)

### Lệnh chạy (Windows: nếu dùng Phụ lục 2 thì ghi cả 2 lệnh)

```shell
# Ghi lệnh vào đây (xoá dòng này)

```

### Nội dung file logs/tong_hop.txt

```text
(Dán nội dung file vào đây – xoá dòng này)

```

## 4.5. README.md và bảo vệ thông tin bí mật

> README.md, .gitignore và .env.example được chấm trực tiếp trên file ở gốc dự án. Đánh dấu `[x]` vào các mục đã làm để tự kiểm tra.

- [ ] README.md: Heading 1, mô tả có **in đậm** và *in nghiêng*, bảng, code block, task list, blockquote
- [ ] .gitignore có dòng `.env` (tên file đúng, không có đuôi .txt)
- [ ] .env.example có đủ tên biến, giá trị để trống (tên file đúng, không có đuôi .txt)

## 4.6. Kiểm tra trang web bằng DevTools (F12) và báo cáo lỗi

### Bảng lỗi

| STT | Tab DevTools phát hiện lỗi | Tên file hoặc thông báo lỗi | Cách khắc phục |
| --- | --- | --- | --- |
| 1 |  |  |  |
| 2 |  |  |  |

> Ảnh chụp màn hình lưu trong thư mục `evidence/` (network.png, console.png).

### Báo cáo lỗi gửi trưởng nhóm

- **Context:** 
- **Expected:** 
- **Actual:** 
- **Log:** 

### Câu tìm kiếm Google

```text
(Ghi câu tìm kiếm vào đây – xoá dòng này)

```

## 4.7. Excel

> Phần Excel được chấm trực tiếp trên file `data/giao_dich_thang_10.xlsx`, không cần ghi vào đây.
