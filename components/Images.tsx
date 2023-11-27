import Image from "next/image";

interface Props {
  img1: string;
  img2: string;
}

export default function Images({ img1, img2 }: Props) {
  return (
    <div className="w-full h-full grid grid-cols-1 gap-4">
      <div className="relative w-full h-[290px] sm:h-[550px] md:h-[600px] lg:h-[750px] xl:h-[800px]">
        <Image
          className="absolute w-full h-full border-2 border-black dark:border-white object-fill"
          src={img1}
          alt="Image"
          fill
        />
      </div>

      <div className="relative w-full h-[290px] sm:h-[550px] md:h-[600px] lg:h-[750px] xl:h-[800px]">
        <Image
          className="absolute w-full h-full border-2 border-black dark:border-white object-fill"
          src={img2}
          alt="Image"
          fill
        />
      </div>
    </div>
  );
}
