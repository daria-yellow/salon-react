export interface SubService {
  name: string;
  addInfo?: string;
}

export interface ServiceTitle {
  name: string;
  subservices?: SubService[];
}

export interface Service {
  service: string;
  subservice?: string;
  name: string;
  time: number;
  price: string;
}
