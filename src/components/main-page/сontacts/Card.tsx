import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Card: FC = () => {
  return (
    <div
      className="
                  rounded-lg py-[37px] px-[30px] bg-bgBlock w-full max-w-[670px]
                  1000:max-w-[460px]
                    1250:w-full"
    >
      <h3 className="mb-[20px] text-[30px]">Ждем Вас в гости</h3>
      <div className="">
        <div>
          <hr className="my-5 border border-[rgb(57,57,62)]" />
          <div>
            <div className="flex items-center py-2">
              <Image
                src="/images/main-page/geolocation.png"
                width={41}
                height={41}
                className=""
                alt=""
              />
              <p
                className="min-w-[250px] text-[16px] font-semibold text-white
                                ml-4"
              >
                Медногорская, 121
              </p>
            </div>
            <div className="flex items-center py-2">
              <Image
                src="/images/main-page/phone.png"
                width={41}
                height={41}
                className=""
                alt=""
              />
              <p
                className="min-w-[250px] text-[16px] font-semibold text-white
                                ml-4"
              >
                41-42-42
              </p>
            </div>
            <div className="flex items-center py-2">
              <Image
                src="/images/main-page/phone.png"
                width={41}
                height={41}
                className=""
                alt=""
              />
              <p
                className="min-w-[250px] text-[16px] font-semibold text-white
                                ml-4"
              >
                422-000
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-5">
          <Link
            href="https://yandex.ru/maps/?um=constructor%3Accff206fcf8e411eecb46ccb9b8a36608b9a6a0bfe66afee2b91225157c28c55&source=constructorLink"
            target="_blank"
            className="hover:text-[#ecd8b9] transition"
          >
            Посмотреть в Яндекс
          </Link>
          <div className="flex items-end justify-end gap-3">
            <Image
              src="/images/main-page/instagram.svg"
              width={23}
              height={23}
              className=""
              alt=""
            />
            <Image
              src="/images/main-page/Ok.svg"
              width={18}
              height={25}
              className=""
              alt=""
            />
            <Image
              src="/images/main-page/Vk.svg"
              width={33}
              height={19}
              className=""
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
