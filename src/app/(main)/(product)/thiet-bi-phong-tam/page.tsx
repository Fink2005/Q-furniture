import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const buttons = [
    {
      label: "VÒI NƯỚC",
      icon: "https://www.vietceramics.com/Assets/img/bath-1.png",
    },
    {
      label: " CHẬU RỬA",
      icon: "https://www.vietceramics.com/Assets/img/bath-2.png",
    },
    {
      label: "BỒN CẦU",
      icon: "https://www.vietceramics.com/Assets/img/bath-3.png",
    },
    {
      label: "BỒN TẮM & SEN TẮM",
      icon: "https://www.vietceramics.com/Assets/img/bath-4.png",
    },
    {
      label: "NỘI THẤT & PHỤ KIỆN",
      icon: "https://www.vietceramics.com/Assets/img/bath-5.png",
    },
  ];
  const cards = [
    {
      label: "VÒI LAVABO ĐẶT BÀN GESSI ANELLO 63306",
      image: "https://www.vietceramics.com/media/4529224/63306735.jpg",
    },
    {
      label: "VÒI LAVABO GẮN TƯỜNG GESSI ANELLO 63383",
      image: "https://www.vietceramics.com/media/4529255/63383735.jpg",
    },
    {
      label: "VÒI LAVABO ĐẶT BÀN GESSI VENTI20 65002",
      image:
        "https://www.vietceramics.com/media/3810471/hinh-up-web-300x300-px-03.jpg",
    },
    {
      label: "VÒI LAVABO THÂN CAO ĐẶT BÀN GESSI VENTI20 65004",
      image:
        "https://www.vietceramics.com/media/3810466/hinh-up-web-300x300-px-04.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[url(https://www.vietceramics.com/media/108565/banner.jpg)] p-12 flex items-center min-h-[534px] w-full bg-cover bg-center bg-no-repeat">
        <div className="w-full flex flex-col items-center text-center text-white">
          <div className="w-3/4">
            <h2 className="font-extrabold mb-3">
              BỘ SƯU TẬP THIẾT BỊ VỆ SINH PHÒNG TẮM CỦA VIETCERAMICS
            </h2>
            <div>
              Nhằm mang đến các trải nghiệm tinh tế để bạn có thể tận hưởng
              những khoảng khắc thư thái sau một ngày dài, bộ sưu tập thiết bị
              vệ sinh phòng tắm phân phối độc quyền bởi Vietceramics được thiết
              kế với nhiều kiểu dáng sang trọng, phong cách tiện nghi , nhằm đem
              đến lựa chọn phù hợp giúp tô điểm cho không gian phòng tắm cổ điển
              cũng như hiện đại.
            </div>
          </div>
          <div className="w-5/6 mt-[100px] flex justify-center flex-wrap space-x-4">
            {buttons.map((button, index) => (
              <button
                className="w-[174px] flex items-center article"
                key={index}
              >
                <div
                  style={{
                    backgroundImage: `url(${button.icon})`,
                  }}
                  className={`animated-icon bath-${index + 1}`}
                ></div>
                <div className="py-2 px-4 text-[10px] w-[60%]">
                  {button.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[80%] flex flex-col items-center border-b-[1px]">
        <div className="w-full p-12 my-8 bg-cover bg-center bg-no-repeat bg-[url(https://www.vietceramics.com/media/161330/voinuoc-2.jpg)]">
          <div className="max-w-[400px]">
            <h2 className="mb-1 font-extrabold">VÒI NƯỚC</h2>
            <div>
              Là điểm nhấn cho không gian phòng tắm, việc lựa chọn các thiết kế
              vòi nước từ vòi chậu rửa đến vòi bồn tắm rất quan trọng. Với tính
              năng vượt trội, đồ bền cao và chất liệu cao cấp, các bộ sưu tập
              thiết bị vệ sinh vòi nước thể hiện sự hài hòa giữa tính năng sản
              phẩm cũng như sự tiện lợi cho người sử dụng.
            </div>
          </div>
        </div>
        <div className="flex justify-between ">
          {cards.map((card, index) => (
            <Link
              href="#"
              key={index}
              className="flex flex-col group w-1/4 mx-8 grouptransition-all duration-300 ease-in-out cursor-pointer h-[300px] overflow-hidden relative"
            >
              <div className="-translate-y-96 absolute top-0 group-hover:translate-y-0 transition-all duration-500">
                <Image
                  src="https://www.vietceramics.com/media/2630382/shcolar60-thumbnail.jpg"
                  className="w-full h-full transition-all duration-300 "
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <div className="">
                <Image
                  src={card.image}
                  className="w-full h-full"
                  width={500}
                  height={500}
                  alt="Picture of the author"
                />
              </div>
              <div className="px-3 py-5 text-[14px] text-center group-hover:text-white group-hover:bg-[#981b1e] transition-all">
                {card.label}
              </div>
            </Link>
          ))}
        </div>
        <button className="custom-more-button py-2 text-[11px] px-6 mt-6 mb-8">
          XEM THÊM
        </button>
      </div>
      <div>fweofi</div>
    </div>
  );
}
