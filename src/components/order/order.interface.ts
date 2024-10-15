export interface IUserAddress {
  street: string;
  home: string;
  privateHome: boolean;
  entrance: string;
  floor: string;
  flat: string;
}
export interface IUserData {
  phone: string;
  address: IUserAddress;
}
export interface ITimeDelivery {
  day: string;
  time: string;
}
