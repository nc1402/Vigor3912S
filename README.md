# Landing Page — DrayTek Vigor3912S | AN PHÁT

Landing page tĩnh đầy đủ để triển khai trực tiếp trên **GitHub Pages**. Không có yêu cầu Node.js, npm, backend, build hoặc CDN.

## Triển khai GitHub Pages (chỉ cần giải nén và upload)

1. Giải nén file ZIP.
2. Tạo GitHub repository mới (hoặc dùng repository sẵn có).
3. Upload **toàn bộ nội dung bên trong thư mục gốc** lên **root của repository**, đặc biệt giữ `index.html` ngay ở root, cùng các folder `assets/`. Không upload thư mục bao ngoài gây thêm một cấp nếu dùng Pages từ `/ (root)`.
4. GitHub → **Settings → Pages → Build and deployment → Deploy from a branch** → chọn branch `main` và folder `/ (root)` → Save.
5. Truy cập đường dẫn GitHub Pages do GitHub cấp. Chờ GitHub báo triển khai xong nếu chưa mở được ngay.

## Cấu trúc

- `index.html` — nội dung landing page 9 section.
- `assets/css/styles.css` — responsive layout, màu AN PHÁT, hiệu ứng 3D và animation.
- `assets/js/main.js` — menu mobile, tabs công nghệ, mô phỏng xử lý, topology, FAQ, nút về đầu trang.
- `assets/images/hero/` — banner Hero.
- `assets/images/threats/` — minh họa sự cố.
- `assets/images/security/` — Suricata, Zeek, Smart Action, DraySOAR.
- `assets/images/architecture/` — topology, VLAN.
- `assets/images/business/` — lợi ích hoạt động và tự động hóa.
- `assets/images/product/` — hình thật và hình trưng bày sản phẩm.
- `assets/images/brand/` — logo AN PHÁT, icon.
- `assets/images/seo/` — ảnh chia sẻ mạng xã hội.
- `.nojekyll` — hỗ trợ GitHub Pages static assets.
- `robots.txt` — quy tắc crawler cơ bản.

## CTA tư vấn / báo giá

Tất cả CTA có `data-cta` đều dùng cùng Google Form:

https://docs.google.com/forms/d/e/1FAIpQLScSM56ZVHF-ZzfcVAm9LuB1AHoc5-35wcTRRTK-Qw1XIHQ1vQ/viewform

Đổi ở **`assets/js/main.js`** và trong **`index.html`** nếu muốn cập nhật địa chỉ sau này.

## Lưu ý về Facebook / OG image

`og:image` hiện dùng đường dẫn tương đối để gói hoạt động được ở mọi repository. Khi đã có URL chính thức, để Facebook và một số mạng xã hội hiển thị preview ổn định, hãy thay `og:image` bằng **URL tuyệt đối** dẫn tới `assets/images/seo/vigor3912s-enterprise-security-og.jpg`. Cân nhắc bổ sung `og:url` và `rel=canonical` theo URL cuối cùng.

## Lưu ý kỹ thuật / hình ảnh

- Logo AN PHÁT và ảnh mặt trước Router được giữ từ ảnh người dùng cung cấp. Ảnh gốc độ phân giải thấp; bản phóng lớn vẫn giữ nguyên thiết kế cổng/nhãn, không tự dựng thêm cổng.
- Các ảnh 3D khác là **minh họa giải pháp**, không phải ảnh vật lý dùng để kiểm tra sơ đồ cổng.
- Suricata/Zeek chỉ nhìn thấy luồng đi qua Router; cơ chế Smart Action chặn IP theo log/điều kiện, không được xem là drop inline mọi gói tin.
- Các tính năng, hiệu năng, giới hạn AP/Switch, SSD, VPN và DraySOAR cần xác minh với firmware và thiết bị thực tế trước khi cam kết bán hàng.
- Mô phỏng JavaScript chỉ là giáo dục, không kết nối router hoặc gửi dữ liệu thật.
- Website không thu thập dữ liệu khách hàng. Biểu mẫu Google do chủ sở hữu Form quản lý.
- Tệp hình ảnh đã tối ưu WebP/JPEG; ảnh sản phẩm PNG giữ độ nét từ nguồn.

© AN PHÁT.
