import { Translation } from './translation-model';

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  languages: string;
  role: string;
  password: string;
  translations: Translation[];
}

export type newUser = Pick<
  User,
  | 'email'
  | 'firstName'
  | 'lastName'
  | 'languages'
  | 'password'
  | 'phone'
  | 'role'
>;

export type loginUser = Pick<User, 'email' | 'password'>;
