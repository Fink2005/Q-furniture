"use client";
import BootBalance from "@/components/BootBalance";
import CarouselPage from "@/components/CarouselPage";
import CarouselProduct from "@/components/CarouselProduct";
import Toilet from "@/components/Toilet";

export default function Home() {
  return (
    <div>
      <CarouselPage />
      <Toilet />
      <BootBalance />
      <CarouselProduct />
    </div>
  );
}
