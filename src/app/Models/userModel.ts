import { IuserModel } from "../Interfaces/IuserModel";


export class UserModel implements IuserModel
{
     UserName:string = "";
     Name:string="";
     Password:string = "";
     Email:string = "";
     Address:string = "";
     Contact:number = 0;
     Age:number = 0;
}
