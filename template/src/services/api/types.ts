// login
export type ParamsUserLogin = {
  id: number;
  name: string;
};
export type ResponseUserLogin = {
  id: number;
  name: string;
  status?: 'available' | 'pending' | 'sold';
};

// account
export type ParamsUserAccount = {
  id: number;
};
export type ResponseUserAccount = {
  id: number;
  status?: 'placed' | 'approved' | 'delivered';
  shipDate?: string;
  complete?: boolean;
  list?: string[][];
  uuid?: string;
  city?: string;
  url?: string;
};
