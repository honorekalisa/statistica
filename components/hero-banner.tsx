"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Rocket } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import useUserStore from "@/store/user";

const HeroBanner = () => {
  const { user } = useUserStore();
  console.log(user, "user");
  return (
    <div className="w-full grid xl:grid-cols-3 gap-3">
      <div className="h-full w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
          className="w-full h-full bg-primary/10 rounded-lg col-span-1 p-4"
        >
          <CarouselContent className="">
            {Array.from({ length: 2 }).map((_, index) => (
              <CarouselItem key={index} className="space-y-2">
                <h1 className="text-2xl font-semibold">
                  Welcome back{" "}
                  <span className="text-primary">
                    {user?.user_metadata?.full_name.split(" ")[0] || ""}
                  </span>
                </h1>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-600">
                    Pick up where you left off
                  </p>
                  <Rocket className="h-4 w-4 text-primary font-bold" />
                </div>
                <div>
                  <div className="text-2xl font-semibold text-primary border-l-4 pl-2 border-primary mt-4 flex items-baseline gap-2">
                    <p>4</p>{" "}
                    <span className="text-sm font-medium text-gray-500 uppercase">
                      New Updates
                    </span>
                  </div>
                </div>{" "}
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute right-16 bottom-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
      <div className="flex items-center xl:justify-center gap-2 md:gap-6 xl:gap-12 xl:col-span-2 bg-secondary/10 rounded-lg p-4 md:py-0">
        <Image
          src="/assets/hero-img.png"
          alt="Hero Banner"
          width={200}
          height={100}
          className="hidden md:block"
        />
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Discover More</h2>
          <p className="text-sm text-gray-600">
            Explore our latest features and updates.
          </p>
          <Button className="text-white">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
