import { FC } from "react";
import { LoaderCircle } from "lucide-react";

interface ITextLoader {
  loading: boolean;
  text: string | number;
}

const TextLoader: FC<ITextLoader> = ({ loading, text }) =>
  loading ? <LoaderCircle className="animate-spin" /> : <>{text}</>;

export default TextLoader;
