export type PositionType = 'Manager' | 'Employee';

export interface InfoCardType {
  photo: string;
  name: string;
  age?: string;
  postition: string;
  content: string;
  type: PositionType;
}
