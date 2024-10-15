import { InputForm } from "@/ui/InputForm";
import { FC } from "react";

interface IProps {
  phone: string;
  changePhone: (arg0: string) => void;
}

export const Phone: FC<IProps> = ({ phone, changePhone }) => {
  return (
    <div className="bg-bgForm rounded-xl py-3 px-3">
      <InputForm
        type="text"
        value={phone}
        onChange={(e) => changePhone(e.target.value)}
        placeholder="Номер телефона"
      />
    </div>
  );
};
