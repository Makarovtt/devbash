import { FC } from "react";
import {
  Card,
  CardBody,
  Select,
  SelectItem,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { ITimeDelivery } from "../order.interface";
import { ORDER_DAY, ORDER_TIME } from "../form.functions";

interface IProps {
  timeDelivery: ITimeDelivery;
  setTimeDelivery: (arg0: ITimeDelivery) => void;
  deliveryTime: string | number;
  setDeliveryTime: (arg0: string | number) => void;
}

const date = new Date();
const hour = date.getHours();
const today = hour < 18;

export const TimeDelivery: FC<IProps> = ({
  timeDelivery,
  setTimeDelivery,
  deliveryTime,
  setDeliveryTime,
}) => {
  return (
    <Tabs
      aria-label="Options"
      classNames={{
        tabList: "bg-bgForm",
        tab: "data-[focus-visible=true]:bg-gray-500",
        tabContent: "text-gray-400 group-data-[selected=true]:text-white",
      }}
      key="deliveryTime"
      selectedKey={deliveryTime}
      onSelectionChange={setDeliveryTime}
    >
      <Tab key="now" title="Быстрее">
        <Card className="bg-[#202022]">
          <CardBody className="bg-[#202022]">Как можно быстрее</CardBody>
        </Card>
      </Tab>
      <Tab key="later" title="Ко времени">
        <Card className="bg-bgForm">
          <CardBody className="bg-bgForm">
            <h3>Укажите день и время доставки:</h3>
            <div className="mt-5 flex gap-5 items-start w-full max-w-[600px]">
              <div className="w-full">
                <Select
                  name="SelectDay"
                  className="max-w-xs"
                  placeholder="день"
                  aria-label="день"
                  selectedKeys={[timeDelivery.day]}
                  disabledKeys={today ? [] : ["1"]}
                  onChange={(e) =>
                    setTimeDelivery({ ...timeDelivery, day: e.target.value })
                  }
                  classNames={{
                    trigger:
                      "bg-bgInput data-[hover=true]:bg-bgInputHover min-h-10 h-10 text-black font-semibold",
                    value: "!text-black font-semibold",
                    listboxWrapper: "bg-[#202022]",
                    popoverContent: "bg-[#202022]",
                  }}
                >
                  {ORDER_DAY.map((item) => (
                    <SelectItem key={item.date}>{item.title}</SelectItem>
                  ))}
                </Select>
                {!timeDelivery.day && (
                  <span className="block mt-2 text-red-700 text-xs">
                    * Укажите день
                  </span>
                )}
              </div>
              <div className="w-full">
                <Select
                  name="SelectTime"
                  className="max-w-xs"
                  placeholder="время"
                  aria-label="время"
                  selectedKeys={[timeDelivery.time]}
                  disabledKeys={today ? [] : ["1"]}
                  onChange={(e) =>
                    setTimeDelivery({ ...timeDelivery, time: e.target.value })
                  }
                  classNames={{
                    trigger:
                      "bg-bgInput data-[hover=true]:bg-bgInputHover min-h-10 h-10 text-black font-semibold",
                    value: "!text-black",
                    listboxWrapper: "bg-[#202022]",
                    popoverContent: "bg-[#202022]",
                  }}
                >
                  {ORDER_TIME.map((item) => (
                    <SelectItem key={item}>{item}</SelectItem>
                  ))}
                </Select>
                {!timeDelivery.day && (
                  <span className="block mt-2 text-red-700 text-xs">
                    * Укажите время
                  </span>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
};
