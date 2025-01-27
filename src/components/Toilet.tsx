import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Toilet() {
  const dataToilet = [
    "https://www.vietceramics.com/media/4644655/homey1.jpg?quality=85",
    "https://www.vietceramics.com/media/4644657/elegantnightroom.jpg?quality=85",
    "https://www.vietceramics.com/media/4644658/elegant1-1.jpg?quality=85",
    "https://www.vietceramics.com/media/4644656/elegant3.jpg?quality=85",
  ];
  return (
    <div>
      <div className="h-[480px] flex-col-reverse lg:flex-row flex my-5">
        <div className="h-full lg:w-1/2">
          <Image
            alt="toilet"
            width={1000}
            height={1000}
            src="https://www.vietceramics.com/media/1874167/kvviclean-ihplus1920x1080blogs.jpg?height=750&quality=90"
            className="h-full w-full"
          />
        </div>
        <div className="lg:w-1/3 lg:ms-4">
          <h1 className="text-amber-900">
            BỒN CẦU THÔNG MINH VICLEAN-IH+: KHÁNG KHUẨN TOÀN DIỆN, THOẢI MÁI
            TỪNG GIÂY
          </h1>
          <p>
            Vietceramics hợp tác cùng thương hiệu Villeroy & Boch ra mắt sản
            phẩm bồn cầu thông minh VICLEAN-IH+ với các tính năng kháng khuẩn
            toàn diện, đem lại sự thoải mái trong từng phút giây trải nghiệm của
            cả gia đình.
          </p>
          <br />
          <p>
            Sống khỏe đang trở thành xu hướng toàn cầu, đồng thời cũng là một
            yêu cầu các gia chủ tìm kiếm khi xây dựng phòng tắm. Với 276 năm
            kinh nghiệm về sứ vệ sinh cao cấp, thương hiệu Đức Villeroy & Boch
            đem đến cho các gia đình Việt Nam bồn cầu thông minh VICLEAN-IH+.
          </p>
          <br />
          <Button variant="default" className="primary-color rounded-none">
            <h3>Xem chi tiết</h3>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {dataToilet.map((item: string, index: number) => (
          <Image key={index} src={item} alt="toilet" width={500} height={500} />
        ))}
      </div>
    </div>
  );
}
