export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface ILoginPayload {
  identifier: string;
  password: string;
}
