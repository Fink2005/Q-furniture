"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Image from "next/image";
import { carouselData } from "@/utils/helpers";

export default function CarouselPage() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex justify-center w-full">
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselData.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Image
                  src={item}
                  alt="carousel"
                  width={1000}
                  height={1000}
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
