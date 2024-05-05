export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface ILoginPayload {
  identifier: string;
  password: string;
}

export interface IUser {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IUserAdress {
  id: number;
  attributes: IUserAdressAttributes;
}

export interface IUserAdressAttributes {
  name: string;
  email: string;
  phone: string;
  zip: number;
  address: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
