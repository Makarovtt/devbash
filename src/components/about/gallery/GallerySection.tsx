import { galleryCafe } from "@/data/gallery-cafe";
import { IGalleryCafe } from "@/data/interface";
import Image from "next/image";
import { FC } from "react";

export const GallerySection: FC = () => {
  return (
    <section>
      <h2>
        Галерея <span className="font-semibold italic">нашего кафе</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-5 my-14">
        {galleryCafe &&
          galleryCafe.map((item: IGalleryCafe) => {
            return (
              <div
                key={item.id}
                className="relative basis-[90%] flex-grow h-[300px] rounded-xl
                             500:basis-[40%] 700:basis-[30%]"
              >
                <Image
                  src={item.href}
                  alt=""
                  fill
                  className="h-full object-cover rounded-xl"
                />
              </div>
            );
          })}
      </div>
    </section>
  );
};
