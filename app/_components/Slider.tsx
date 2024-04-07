import { FC } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ISliderData } from "../_interfaces/slider.interface";

interface ISlider {
  data: ISliderData;
}

const Slider: FC<ISlider> = ({ data }) => {
  const backUrl = process.env.NEXT_PUBLIC_API_URL;

  return (
    <Carousel className="w-full">
      <CarouselContent>
        {data.attributes.images.data.map((item, index) => (
          <CarouselItem key={index}>
            <Image
              className="w-full h-[200px] md:h-[400px] object-cover rounded-2xl"
              src={`${backUrl}${item.attributes.formats.medium.url}`}
              width={900}
              height={600}
              alt="slider-image"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Slider;
