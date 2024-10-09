import { ContainerMain } from "@/ui/ContainerMain";
import { FC } from "react";
import { AboutSection } from "./about/AboutSection";
import { GallerySection } from "./gallery/GallerySection";

export const About: FC = () => {
  return (
    <main className="bg-[url(/images/back.jpg)] bg-center bg-repeat-y min-h-[50vh] w-full">
      <ContainerMain>
        <AboutSection />
        <GallerySection />
      </ContainerMain>
    </main>
  );
};
