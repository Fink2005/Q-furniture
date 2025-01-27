import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  const footerLinks = [
    {
      title: "Vietceramics",
      links: [
        "Về Công Ty",
        "Tin Tức",
        "Thông tin & Báo cáo",
        "Đối Tác Thương Hiệu",
        "Liên Hệ Showroom",
      ],
    },
    {
      title: "Gạch Ốp Lát",
      links: [
        "Gạch Vân Đá Marble",
        "Gạch Vân Đá Tự Nhiên",
        "Gạch Thiết Kế Xi Măng",
        "Gạch Trang Trí",
        "Gạch Vân Gỗ",
      ],
    },
    {
      title: "Thiết Bị Vệ Sinh Phòng Tắm",
      links: [
        "Vòi Nước",
        "Chậu Rửa",
        "Bồn Cầu",
        "Bồn Tắm & Sen",
        "Nội Thất & Phụ Kiện",
      ],
    },
    {
      title: "Dịch Vụ Hỗ Trợ",
      links: [
        "Dịch Vụ Khách Hàng",
        "Dịch Vụ Thiết Kế",
        "Trung Tâm Thông Tin",
        "Câu Hỏi Thường Gặp",
        "Yêu Cầu Catalogue",
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="flex justify-center">
        <div className="text-center py-8 lg:flex lg:h-32 lg:border-b w-full  lg:w-3/4 items-center">
          <h3 className="text-xl font-semibold lg:w-1/4">Bản Tin Điện Tử</h3>
          <p className="text-gray-400 lg:w-1/4 text-sm lg:text-left text-center py-3">
            Đăng ký để cập nhật thông tin mới nhất về khuyến mãi, sản phẩm và sự
            kiện.
          </p>
          <div className="flex justify-center items-center lg:w-1/2 h-[40px]">
            <input
              type="email"
              placeholder="Nhập địa chỉ email của bạn"
              className="p-2 w-96 rounded-l-md focus:outline-none text-gray-800 bg-black/30"
            />
            <div className="h-full">
              <button className="bg-red-600 text-white px-4 rounded-r-sm hover:bg-red-700 h-full">
                <FontAwesomeIcon className="w-3 h-3" icon={faChevronRight} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 py-8">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h4 className="text-lg font-semibold">{section.title}</h4>
            <ul className="mt-4 space-y-2 text-gray-400">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:text-white cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-gray-400">
        <div className="container mx-auto px-8 py-4 text-sm text-center">
          <p>
            © 2017 VIETCERAMICS. Công Ty Cổ Phần Quốc Tế Gốm Sứ Việt. GPĐKKD:
            0311028311 do sở KH & ĐT TP.HCM cấp ngày 17/09/2014.
          </p>
          <p>
            © Công Ty TNHH MTV Đá Thế Giới. GPĐKKD: 0312095293 Đăng ký thay đổi
            lần 4: 09/03/2015 do sở KH & ĐT TP.HCM.
          </p>
          <p>
            Trụ Sở Chính: 778k/2 Nguyễn Kiệm, Quận Phú Nhuận, TP. HCM. Hotline:
            0797555299 và 1900 633 094. Email: vietceramics@vietceramics.com.vn.
            Bản Quyền được Bảo Hộ. Điều khoản & Chính sách.
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
