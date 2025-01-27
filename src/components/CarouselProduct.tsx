import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function CarouselProduct() {
  const dataImage = [
    {
      image:
        "https://www.vietceramics.com/media/3900314/boost-natural-1640x640-px-2.jpg?quality=85",
      name: "BOOST NATURAL",
    },
    {
      image: "https://www.vietceramics.com/media/3664827/avatar.jpg?quality=85",
      name: "MYSTIC",
    },
    {
      image:
        "https://www.vietceramics.com/media/3518216/thumbnail-template-300x300.png?quality=85",
      name: "MARVEL SHINE",
    },
    {
      image:
        "https://www.vietceramics.com/media/3813809/avatar-300x300.jpg?quality=85",
      name: "UNIONSTONE",
    },
    {
      image: "https://www.vietceramics.com/media/3663423/avatar.jpg?quality=85",
      name: "RIOJA",
    },
    {
      image: "https://www.vietceramics.com/media/3664420/avatar.jpg?quality=85",
      name: "EREBOR",
    },
    {
      image: "https://www.vietceramics.com/media/3666046/avatar.jpg?quality=85",
      name: "HYBRID",
    },
    {
      image:
        "https://www.vietceramics.com/media/3810497/300x300jpg-01.jpg?quality=85",
      name: "COROT - HORTA - ERTE- SYSLEY",
    },
    {
      image:
        "https://www.vietceramics.com/media/3813815/avatar-300x300.jpg?quality=85",
      name: "DIAGONALS - DIAMOND",
    },
    {
      image: "https://www.vietceramics.com/media/3663870/avatar.jpg?quality=85",
      name: "IGUAZU",
    },
    {
      image:
        "https://www.vietceramics.com/media/3810489/1-avt-kich-300x300.jpg?quality=85",
      name: "MINDANAO",
    },
  ];

  return (
    <div className="flex justify-center">
      <Carousel className="w-[1200px]">
        <CarouselContent>
          {dataImage.map((item, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4"
            >
              <div className="p-1 size-[300px]">
                <Image
                  key={index}
                  src={item.image}
                  alt={item.name}
                  width={1000}
                  height={1000}
                  className="size-full object-cover"
                />
              </div>
              <p className="text-sm text-center font-medium">{item.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
