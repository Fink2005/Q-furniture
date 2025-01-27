import ButtonAnimation from "@/components/ButtonAnimation";
import Image from "next/image";
import React from "react";

export default function BootBalance() {
  return (
    <div className="lg:flex mt-16">
      <div className="w-1/2 space-y-8">
        <div className="flex justify-end">
          <div className="w-1/2 space-y-2">
            <h1>BOOST BALANCE – DÁNG HÌNH CỦA SỰ TĨNH LẶNG</h1>
            <div className="w-10 h-[2px] primary-color"></div>
            <p>
              Là yếu tố chủ đạo của phong cách sống “quiet luxury”, sự tĩnh lặng
              tạo nên cảm xúc cân bằng và thư thái. Bộ sưu tập Boost Balance
              hiện thực hóa dáng hình của sự tĩnh lặng, đem vẻ đẹp thanh lịch và
              thời thượng bước vào không gian.
            </p>
            <ButtonAnimation props="Xem chi tiết" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Image
            alt="image"
            src="https://www.vietceramics.com/media/3667567/onlineboostbalance460x400banner-tin-t%E1%BB%A9c-trang-ch%E1%BB%A7-1.jpg?quality=85"
            width="1000"
            height={1000}
            className="w-[400px] h-[300px]"
          />
          <Image
            alt="image"
            src="https://www.vietceramics.com/media/3667569/onlineboostbalance460x400banner-tin-t%E1%BB%A9c-trang-ch%E1%BB%A7-2.jpg?quality=85"
            width="1000"
            height="1000"
            className="w-[400px] h-[300px]"
          />
        </div>
      </div>
      <div className="w-1/2 p-4">
        <div>
          <Image
            alt="image"
            src="https://www.vietceramics.com/media/3667572/onlineboostbalance920x520banner-tin-t%E1%BB%A9c-hi%E1%BB%83n-th%E1%BB%8B-trang-ch%E1%BB%A7.jpg?quality=85"
            width="1000"
            height="1000"
            className="w-full h-[400px]"
          />
        </div>
        <div className="flex mt-3 space-x-3">
          <div>
            <Image
              alt="image"
              src="https://www.vietceramics.com/media/3667570/onlineboostbalance460x400banner-tin-t%E1%BB%A9c-trang-ch%E1%BB%A7-3.jpg?quality=85"
              width="1000"
              height="1000"
              className="w-[400px] h-[300px]"
            />
          </div>
          <div>
            <Image
              alt="image"
              src="https://www.vietceramics.com/media/5513359/onlineboostbalance460x400banner-tin-t%E1%BB%A9c-trang-ch%E1%BB%A7-4.jpg?quality=85"
              width="1000"
              height="1000"
              className="w-[400px] h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
