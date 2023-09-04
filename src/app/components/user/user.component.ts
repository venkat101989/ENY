import { Component,ViewChild } from '@angular/core';
import { UserModel } from 'src/app/Models/userModel';
import { IuserModel } from "src/app/Interfaces/IuserModel";
import { FormsModule, FormControl } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

   MyName: string = "Venkitesan";
   user:IuserModel = {} as IuserModel;

   userList:IuserModel[] = [];

   //#Method1
   //@ViewChild('frmUser') formUser: any; // you can form value from UI using ViewChild
  
   constructor()
   {
       //this.user.UserName = "Kuppanna";
       //this.user.Contact = 9091929394;
       //this.user.Address = "Cheennai";
       //this.user = { UserName : "From Interface", Contact: 959595, Address : "Cdd" };
       this.user.UserName = "Updated value new value";
       
       this.userList.push(this.user);
   }

   Submit(form:any) : void{

   // console.log(this.formUser);  //#Method1
        console.log(form.value);
        this.user = form.value;
        console.log(this.user);

        this.userList.push(this.user);
   }

}
