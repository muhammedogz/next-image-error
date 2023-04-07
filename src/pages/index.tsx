import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      test
      <Image
        alt="test"
        src={"https://avatars.githubusercontent.com/u/14985020?s=200&v=4"}
        width={100}
        height={100}
      />
    </div>
  );
}
