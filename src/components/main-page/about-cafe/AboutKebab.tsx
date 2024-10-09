import { FC } from "react";
import { AboutGallery } from "./AboutGallery";
import { AboutHistory } from "./AboutHistory";

export const AboutKebab: FC = () => {
  return (
    <section
      className="flex-col flex justify-between items-center mb-[70px]
                        1000:flex-row"
    >
      <AboutGallery />
      <AboutHistory />
    </section>
  );
};
