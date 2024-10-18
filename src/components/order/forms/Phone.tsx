// import { InputForm } from "@/ui/InputForm";
import { Input } from "@nextui-org/react";
import IMask from "imask";
import { FC, useRef } from "react";

interface IProps {
  phone: string;
  changePhone: (arg0: string) => void;
}

const maskOptions = {
  mask: "(000) 000-00-00",
};

export const Phone: FC<IProps> = ({ phone, changePhone }) => {
  const refPhoneInput = useRef<HTMLInputElement | null>(null);
  if (refPhoneInput && refPhoneInput.current) {
    const mask = IMask(refPhoneInput.current!, maskOptions);
  }
  return (
    <div className="bg-bgForm rounded-xl py-3 px-3">
      <Input
        ref={refPhoneInput}
        type="text"
        value={phone}
        onChange={(e) => changePhone(e.target.value)}
        placeholder="Номер телефона"
        classNames={{
          inputWrapper:
            "!bg-bgInput data-[hover=true]:!bg-bgInputHover group-data-[focus=true]:!bg-bgInputHover",
          input: ["!text-black font-semibold", "placeholder:text-gray-500"],
        }}
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-600 text-small">+7</span>
          </div>
        }
      />
    </div>
  );
};
