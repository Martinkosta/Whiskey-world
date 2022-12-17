import { IUser } from "./user";

export interface IWhiskey {
  _id:string;
  whiskeyName: string;
  subscribers: string[];
  userId: IUser;
  posts: string[];
  created_at: string;
  updated_at: string;
  distilleryLocation:string;
  brand:string;
  img:string;
  description:string;
  likes:number;
}