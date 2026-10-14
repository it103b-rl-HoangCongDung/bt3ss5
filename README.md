# BÁO CÁO BÀI TẬP: XÂY DỰNG PHÂN HỆ LÀM SẠCH VÀ CHUẨN HÓA DỮ LIỆU HỌ TÊN KHÁCH HÀNG

> 👤 **Học viên:** Hoàng Công Dũng | **Mã SV:** PTIT-HCM-009
> 🏫 **Môn học:** it103b-rl-HoangCongDung

---

## 📊 Sơ đồ thiết kế hệ thống (Flowchart)

> 💡 *Sơ đồ dưới đây được render tự động trực tiếp trên GitHub bằng Mermaid. Bạn cũng có thể tải file **`bt3.drawio`** trong repository này để mở và chỉnh sửa trực tiếp trên [Draw.io (diagrams.net)](https://app.diagrams.net).* 

```mermaid
graph TD
  Start([Bắt đầu: Nhận chuỗi nén]) --> Split[Tách chuỗi bằng hàm .split('-')]
  Split --> Extract[Trích xuất 4 trường: Bác sĩ, Chuyên khoa, Giờ, Phòng]
  Extract --> CleanDoc[Chuẩn hóa Tên Bác sĩ: Bỏ BS., đổi _ thành space, Title Case]
  CleanDoc --> CleanDept[Chuẩn hóa Chuyên khoa: Đổi _ thành space]
  CleanDept --> CleanRoom[Chuẩn hóa Phòng: Thay PHONG_ bằng Phòng]
  CleanRoom --> FormatConsole[In kết quả ra Console bằng Template Literals]
  FormatConsole --> End([Kết thúc hiển thị bảng])
```

---

## 1. Mục tiêu và Ngữ cảnh bài toán

Bài tập yêu cầu xây dựng một module JavaScript để xử lý và bóc tách các chuỗi dữ liệu thô nhận từ máy chủ phòng khám, sau đó chuẩn hóa theo đúng các quy tắc nghiệp vụ định trước.

Dữ liệu đầu vào là một chuỗi định dạng bản ghi lịch khám phức hợp được phân tách bằng dấu gạch ngang, ví dụ 'BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302'.

- Thực hiện bóc tách chuỗi hiệu quả sử dụng phương thức .split() kết hợp các thao tác chuỗi.
- Đảm bảo chuẩn hóa viết hoa chữ cái đầu (Title Case) và loại bỏ các tiền tố kỹ thuật không cần thiết.
- Kiểm thử với nhiều bộ dữ liệu khác nhau để đảm bảo tính ổn định của module.

## 2. Quy tắc nghiệp vụ và Xử lý kỹ thuật

Để hoàn thành yêu cầu của giảng viên, tôi đã phân tích kỹ các quy tắc xử lý chuỗi và áp dụng các phương thức có sẵn trong JavaScript như replaceAll, toLowerCase, toUpperCase kết hợp vòng lặp để viết hoa từng từ.

- Tách chuỗi: Sử dụng chuỗi.split('-') để chia bản ghi thành mảng gồm 4 phần tử tương ứng với Bác sĩ, Chuyên khoa, Giờ khám và Phòng khám.
- Chuẩn hóa Tên Bác sĩ: Cắt bỏ tiền tố 'BS.', thay thế toàn bộ dấu gạch dưới '_' bằng dấu cách, sau đó chuyển đổi sang định dạng Title Case ('Nguyễn Văn Hải').
- Chuẩn hóa Chuyên khoa và Phòng: Thay thế dấu '_' thành dấu cách và chuyển đổi từ khóa 'PHONG_' thành 'Phòng ' để tăng tính thân thiện khi hiển thị cho bệnh nhân.

## 3. Bảng đặc tả kiểm thử dữ liệu

Dưới đây là bảng kiểm thử với 3 chuỗi dữ liệu bác sĩ khác nhau theo đúng yêu cầu bài tập:

| STT | Dữ liệu đầu vào (Raw String) | Bác sĩ chuẩn hóa | Chuyên khoa chuẩn hóa | Giờ & Phòng khám |
| --- | --- | --- | --- | --- |
| 1 | BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302 | Nguyễn Văn Hải | Khoa Tim Mạch | 08:30 - Phòng 302 |
| 2 | BS.tran_thi_thu_ha-KHOA_NHI-09:15-PHONG_104 | Trần Thị Thu Hà | Khoa Nhi | 09:15 - Phòng 104 |
| 3 | BS.le_hoang_nam-KHOA_NGOAI_TONG_QUAT-10:00-PHONG_205 | Lê Hoàng Nam | Khoa Ngoại Tổng Quát | 10:00 - Phòng 205 |

## 4. Tổng kết quá trình làm bài

Đã hoàn thành việc viết code vào file solution_ex7.js nằm trong thư mục của repository it103b-rl-HoangCongDung theo đúng quy định nộp bài.

Module chạy ổn định, không phát sinh lỗi cú pháp và xuất thông tin dạng bảng rất trực quan ra màn hình Console bằng Template Literals.

---

## 📁 Danh sách tệp tin nộp bài trong Repository
- 📝 `bt3.docx`: Báo cáo tài liệu phân tích nghiệp vụ hoàn chỉnh.
- 🎨 `bt3.drawio`: File thiết kế sơ đồ chuẩn theo quy định đề bài (mở trực tiếp bằng [Draw.io](https://app.diagrams.net) hoặc Lucidchart).
- 💻 `solution_ex7.js`: Mã nguồn chương trình.
