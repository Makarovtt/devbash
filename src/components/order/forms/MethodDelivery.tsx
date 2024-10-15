import { FC, memo } from "react";
import { Card, CardBody, Checkbox, Tab, Tabs } from "@nextui-org/react";
import { IUserAddress } from "../order.interface";
import { InputForm } from "@/ui/InputForm";

interface IProps {
  address: IUserAddress;
  changeAddress: (arg0: IUserAddress) => void;
  deliveryMethod: string | number;
  setDeliveryMethod: (arg0: string | number) => void;
}

export const MethodDelivery: FC<IProps> = memo(function MemoMethodDelivery({
  address,
  changeAddress,
  deliveryMethod,
  setDeliveryMethod,
}) {
  return (
    <Tabs
      aria-label="Options"
      classNames={{
        tabList: "bg-bgForm",
        tab: "data-[focus-visible=true]:bg-gray-500",
        tabContent: "text-white group-data-[selected=true]:text-white",
      }}
      key="deliveryMethod"
      selectedKey={deliveryMethod}
      onSelectionChange={setDeliveryMethod}
    >
      <Tab key="self" title="Самовывоз">
        <Card className="bg-bgForm">
          <CardBody className="bg-bgForm">
            Самовывоз из ресторана «Девичья Башня»
            <br />
            ул. Медногорская, 131
          </CardBody>
        </Card>
      </Tab>
      <Tab key="delivery" title="Доставка">
        <Card className="bg-bgForm">
          <CardBody className="bg-bgForm">
            <h3>Адрес доставки:</h3>
            <div className="flex flex-col items-start justify-start gap-5 mt-5">
              <div className="w-full">
                <InputForm
                  value={address.street}
                  onChange={(e) =>
                    changeAddress({ ...address, street: e.target.value })
                  }
                  placeholder="Улица"
                />
              </div>
              <div className="flex flex-col 400:flex-row justify-between items-start gap-5 400:gap-0 400:items-center w-full">
                <div>
                  <InputForm
                    value={address.home}
                    onChange={(e) =>
                      changeAddress({ ...address, home: e.target.value })
                    }
                    placeholder="Дом"
                  />
                </div>
                <div>
                  <Checkbox
                    defaultSelected
                    color="default"
                    isSelected={address.privateHome}
                    onChange={() =>
                      changeAddress({
                        ...address,
                        privateHome: !address.privateHome,
                      })
                    }
                  >
                    Частный дом
                  </Checkbox>
                </div>
              </div>
              {!address.privateHome && (
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <InputForm
                      value={address.entrance}
                      onChange={(e) =>
                        changeAddress({ ...address, entrance: e.target.value })
                      }
                      placeholder="Подъезд"
                    />
                  </div>
                  <div>
                    <InputForm
                      value={address.floor}
                      onChange={(e) =>
                        changeAddress({ ...address, floor: e.target.value })
                      }
                      placeholder="Этаж"
                    />
                  </div>
                  <div>
                    <InputForm
                      value={address.flat}
                      onChange={(e) =>
                        changeAddress({ ...address, flat: e.target.value })
                      }
                      placeholder="Квартира"
                    />
                  </div>
                </div>
              )}
            </div>
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
});
