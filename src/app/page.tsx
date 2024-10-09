import { AboutKebab } from "@/components/main-page/about-cafe/AboutKebab";
import { AboutDelivery } from "@/components/main-page/about-delivery/AboutDelivery";
import { TermsDelivery } from "@/components/main-page/terms-delivery/TermsDelivery";
import { Contacts } from "@/components/main-page/сontacts/Contacts";
import { ContainerMain } from "@/ui/ContainerMain";

export default function Home() {
  return (
    <main
      className="mt-0 bg-[url(/images/back.jpg)] bg-center bg-repeat-y min-h-[50vh] w-full
                      1000:mt-14"
    >
      <ContainerMain className="my-16">
        <AboutKebab />
        <AboutDelivery />
        <TermsDelivery />
        <Contacts />
      </ContainerMain>
    </main>
  );
}
