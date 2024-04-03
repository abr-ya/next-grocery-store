"use client"; // todo: remove for SSR this component!

import { FC } from "react";
import { ISlideData } from "../_interfaces/slider.interface";

interface ISlider {
  data: ISlideData[];
}

const Slider: FC<ISlider> = ({ data }) => {
  console.log(data);

  return <div>Slider</div>;
};

export default Slider;
