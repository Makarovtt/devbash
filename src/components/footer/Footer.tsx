import { ContainerMain } from "@/ui/ContainerMain";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="min-h-24 mt-auto w-full py-5">
      <ContainerMain>
        <div className="flex justify-between items-start px-5 760:px-32">
          <div className="flex flex-row justify-between items-center mb-36  1000:mb-0">
            <div className="h-[80px] w-[80px] relative">
              <Link target="_blank" href="/">
                <Image
                  src="/images/footer/db.png"
                  alt="logo"
                  className="mr-[30px] object-contain h-full hover:opacity-80 relative"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin />
              <span>ул. Медногорская, 121</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone />
              <span>41-42-42</span>
            </div>
          </div>
        </div>
        <hr className="mt-5 border-bgBlock" />
        <div className="px-32 mt-5 flex justify-end">
          <div className="group flex justify-center gap-3 items-center">
            <div className="h-[50px] w-[50px] relative ">
              <Link target="_blank" href="https://bzcekh.ru/" className="">
                <Image
                  src="/images/footer/bzcekh.png"
                  fill
                  sizes=""
                  alt="Маркетинговое агентство Бизнес ЦЕХ"
                  title="Разработка, изготовление интернет сайтов"
                  className="mr-[30px] object-contain h-full opacity-60 group-hover:opacity-100 transition"
                />
              </Link>
            </div>
            <Link target="_blank" href="https://bzcekh.ru/" className="">
              <span className="text-gray-500 group-hover:text-gray-300 transition">
                Разаработка сайтов
              </span>
            </Link>
          </div>
        </div>
      </ContainerMain>
    </footer>
  );
};

export default Footer;
