import { PropsWithChildren } from "react";
import Image from "next/image";

interface IFormWrapper {
  title: string;
  description: string;
}

const FormWrapper = ({ children, title, description }: PropsWithChildren<IFormWrapper>) => (
  <div className="flex items-baseline justify-center my-20">
    <div className="flex flex-col items-center justify-center p-10 bg-slate-100 border border-gray-200">
      <Image src="/logo.png" width={200} height={200} alt="logo" />
      <h2 className="font-bold text-3xl">{title}</h2>
      <h3 className="text-gray-500">{description}</h3>
      <div className="w-full flex flex-col gap-5 mt-7">{children}</div>
    </div>
  </div>
);

export default FormWrapper;
