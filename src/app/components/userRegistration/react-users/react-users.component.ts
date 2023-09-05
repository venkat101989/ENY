import { Component, OnInit } from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormControl, FormGroup, Validators,ValidationErrors, FormArray } from '@angular/forms'; 
import { WhiteSpaceValidator } from 'src/app/Validator/WhiteSpaceValidator';

@Component({
  selector: 'app-react-users',
  templateUrl: './react-users.component.html',
  styleUrls: ['./react-users.component.css']
})
export class ReactUsersComponent implements OnInit {

  //countries:string[] = [];

  countries:any[] = [];

  userFormGroup : FormGroup = {} as FormGroup;
  
  //Init Function
  ngOnInit(): void {
    console.log('ngOnInit!!!!!');
    this.CreateUserForm();
    var formValues = {
      Email : 'test@gmail.com',
      Password : '123456',
      FirstName: '',
      LastName : '',
      DOB : '',
      Contact : '',
      Gender : 'Female',
      Address : '',
      Description : '',
      TAC : 'true',
      Country : '4'
     };
    //this.userFormGroup.setValue(formValues); // here all the form control values must be supply in the json object (formValues)
     
    var formPatchValues = {
      Email : 'testpatch@gmail.com',
      Password : '12345679',
      Gender : 'Male',
      Address : '',
      Description : 'test description',
      TAC : 'false',
      Country : '1'
     };

    this.userFormGroup.patchValue(formPatchValues); // here what ever controls need to update using patch

   // this.userFormGroup.valueChanges.subscribe(data=> {
   // console.log(data.Gender);
   // });
    

  }


  //Constructor
  constructor()
  {
    console.log('Constructor!!!!!');
    //this.countries.push('USA');
    //this.countries.push('United Kingdom');
    //this.countries.push('Singapore');
    //this.countries.push('India');

    this.countries.push({ key: '1', value: 'USA'});
    this.countries.push({ key: '2', value: 'United Kingdom'});
    this.countries.push({ key: '3', value: 'Singapore'});
    this.countries.push({ key: '4', value: 'India'});

  }

  SubmitForm() :void{
      console.log(this.userFormGroup.value);

      console.log(this.userFormGroup.valid);

      console.log(this.userFormGroup);
  }

  CreateUserForm() 
  {
    this.userFormGroup = new FormGroup({
      'Email' : new FormControl(null,[Validators.required,WhiteSpaceValidator.cannotContainSpace]),
      'Password' : new FormControl(null,[Validators.required,WhiteSpaceValidator.cannotContainSpace]),
      'FirstName' : new FormControl(),
      'LastName' : new FormControl(),
      'DOB' : new FormControl(new Date()),
      'Contact' : new FormControl(),
      'Gender' : new FormControl(),
      'Address' : new FormControl(),
      'Description' : new FormControl(),
      'TAC' : new FormControl(),
      'Country' : new FormControl('3'),

      'tools' : new FormArray([ new FormControl('Kubendra'), new FormControl('Sivabala')  ])
      
      
    });


  }

  get tools() {
    return this.userFormGroup.controls['tools'] as FormArray;
  }

}


