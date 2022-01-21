declare namespace API {
  type Order = {
    id?: number;
    shipDate?: string;
    status?: 'placed' | 'approved' | 'delivered';
    complete?: boolean;
    list?: string[][];
    uuid?: string;
    city?: string;
    url?: string;
  };
}
