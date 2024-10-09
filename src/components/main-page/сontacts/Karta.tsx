import { FC } from "react";

export const Karta: FC = () => {
  return (
    <div
      className="rounded-lg overflow-hidden flex justify-center items-center
                  max-w-[670px] w-full"
    >
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Accff206fcf8e411eecb46ccb9b8a36608b9a6a0bfe66afee2b91225157c28c55&amp;source=constructor"
        width="100%"
        height="450"
        frameBorder="0"
      ></iframe>
    </div>
  );
};
