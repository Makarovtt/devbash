"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { slides } from "@/data/swiper";
import { ISwiperSlider } from "@/data/interface";
import { A11y, Navigation, Pagination } from "swiper/modules";

export const AboutGallery: FC = () => {
  // const swiper = useSwiper();

  const video = useRef<NodeListOf<HTMLVideoElement>>();

  useEffect(() => {
    video.current = document.querySelectorAll("video");
    console.log(video);
  }, []);
  return (
    <div className="flex flex-col justify-between items-start mx-10 1250:mx-0">
      <h1 className="font-Berlingske">
        Шашлык{" "}
        <span className="font-semibold italic text-gold">на тандыре</span>
      </h1>
      <div className="cursor-pointer relative mt-7 grid place-items-center w-full">
        <div className="cursor-pointer relative flex justify-center items-center w-full">
          <Image
            src="/images/main-page/button-slider.svg"
            className="absolute hidden right-[-25px] z-10 760:block"
            width={60}
            height={60}
            alt=""
            data-slider-next
          />
          <div
            className="rounded-lg w-full max-w-[320px] h-[320px]
                          overflow-hidden flex justify-center items-center swiper-container
                          560:w-full 560:h-[320px] 560:mb-[30px]
                          1000:max-w-[500px] 1000:h-[320px]
                          1250:w-[670px] 1250:max-w-[670px] 1250:max-h-[435px] 1250:h-[435px]"
          >
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={15}
              loop={true}
              navigation={{
                nextEl: "[data-slider-next]",
                prevEl: "[data-slider-prev]",
              }}
              pagination={{
                el: "[data-slider-dots]",
                type: "bullets",
                clickable: true,
                bulletClass:
                  "bg-yellow-900 mx-1 rounded-full w-3 h-3 flex justify-center items-center cursor-pointer hover:bg-yellow-600",
                bulletActiveClass: "text-white !bg-yellow-500",
                renderBullet: function (index, className) {
                  return `<div class="${className}"></div>`;
                },
              }}
              scrollbar={{ draggable: true }}
            >
              {slides.map((item: ISwiperSlider) => {
                return (
                  <SwiperSlide key={item.id}>
                    {item.teg === "img" && (
                      <div className="h-[435px] w-full relative">
                        <Image
                          src={item.href}
                          fill
                          alt="Фото"
                          className="object-cover h-full w-full"
                        />
                      </div>
                    )}
                    {item.teg === "video" && (
                      <div
                        className="p-3 w-full h-auto bg-[#0f1017] flex justify-center items-center
                                      
                                      1000:max-w-[500px] 1000:h-[320px] 1000:w-full
                                      1250:w-full 1250:max-h-[435px] 1250:h-[435px] 1250:max-w-full"
                      >
                        <video
                          controls
                          className=" max-h-[300px] h-[250px]
                                    560:max-h-[436px] 560:w-auto 560:h-[320px]
                                    1250:h-full 1250:w-auto"
                        >
                          <source src={item.href} type="video/mp4"></source>
                        </video>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <Image
            src="/images/main-page/button-slider-left.svg"
            className="absolute hidden left-[-25px] z-10 760:block"
            width={60}
            height={60}
            alt=""
            data-slider-prev
          />
          <div
            className="absolute -bottom-2 flex item-center justify-center"
            data-slider-dots
          ></div>
        </div>
      </div>
    </div>
  );
};
