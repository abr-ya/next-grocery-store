import { FC } from "react";
import Link from "next/link";

interface ILinkBlock {
  link: string;
  text: string;
}

const LinkBlock: FC<ILinkBlock> = ({ link, text }) => (
  <div>
    {`${text} `}
    <Link href={`/${link}`} className="text-blue-500">
      Click here to {link}
    </Link>
  </div>
);

export default LinkBlock;
